import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import Skeleton from "@mui/material/Skeleton";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const renderDocumentCard = (cur, title) => {
  const handleOpenPdf = (base64) => {
    window.open(encodeURI(base64));
  };
  return (
    <div
      style={{
        flexBasis: 200,
        flexShrink: 0,
        height: 220,
        borderRadius: 10,
        marginRight: 20,
        background: "#CDF8FF",
        padding: 12,
        textAlign: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          height: "200px",
          width: "200px",
          position: "absolute",
        }}
        onClick={() => handleOpenPdf(cur.base64)}
      ></div>
      <object
        height={200}
        width={200}
        data={cur.base64}
        type="application/pdf"
      ></object>
      <br />
      <span>
        {title} {new Date(cur.documentDate).getFullYear()}-
        {new Date(cur.documentDate).getMonth() + 1}-
        {new Date(cur.documentDate).getDate()}
      </span>
      <br />
    </div>
  );
};

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  let url_string = window.location.href;
  let url = new URL(url_string);
  const patientId = url.searchParams.get("patientId");

  const [recordsData, setRecordsData] = useState([]);
  const [medicalData, setMedicalData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://uhi-hack.herokuapp.com/document/report?patientId=${patientId}`
    )
      .then((res) => res.json())
      .then((res) => setRecordsData(res))
      .catch((err) => console.log(err))
      .finally(() =>
        setTimeout(() => {
          setIsLoading(false);
        }, 2500)
      );
  }, []);

  useEffect(() => {
    setIsLoading(true);

    fetch(
      `https://uhi-hack.herokuapp.com/document/medical?patientId=${patientId}`
    )
      .then((res) => res.json())
      .then((res) => setMedicalData(res))
      .catch((err) => console.log(err))
      .finally(() =>
        setTimeout(() => {
          setIsLoading(false);
        }, 2500)
      );
  }, []);

  return (
    <Box sx={{ width: "100%", overflow: "scroll" }}>
      <Grid container>
        <Grid
          item
          xs={12}
          style={{
            textAlign: "center",
            marginTop: "20px",
            fontWeight: "bold",
            fontSize: "1.2rem",
            marginBottom: "20px",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "inline-block",
              position: "absolute",
              float: "left",
              left: "25px",
              cursor: "pointer",
            }}
            onClick={() => {
              window.history.back();
            }}
          >
            {"<"}
          </div>
          Report and Records
        </Grid>
      </Grid>

      <Box
        sx={{ borderBottom: 1, borderColor: "divider", textAlign: "center" }}
      >
        <Tabs
          TabIndicatorProps={{
            style: {
              backgroundColor: "#52B6C3",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
          }}
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered
        >
          <Tab
            autoCapitalize={false}
            style={{ flexGrow: 1, color: "#4b4b4b" }}
            fullWidth={true}
            label="Reports"
            {...a11yProps(1)}
          />
          <Tab
            autoCapitalize={false}
            style={{ color: "#4b4b4b", flexGrow: 1 }}
            fullWidth={true}
            label="Medical Records"
            tez
            {...a11yProps(0)}
          />
        </Tabs>
      </Box>
      {isLoading ? (
        <div
          style={{
            padding: "25px",
          }}
        >
          {" "}
          <Skeleton
            variant="rectangular"
            width={"100%"}
            height={118}
            style={{
              marginBottom: "10px",
            }}
          />
          <Skeleton
            variant="rectangular"
            width={"100%"}
            height={118}
            style={{
              marginBottom: "10px",
            }}
          />
          <Skeleton
            variant="rectangular"
            width={"100%"}
            height={118}
            style={{
              marginBottom: "10px",
            }}
          />
          <Skeleton
            variant="rectangular"
            width={"100%"}
            height={118}
            style={{
              marginBottom: "10px",
            }}
          />
          <Skeleton
            variant="rectangular"
            width={"100%"}
            height={118}
            style={{
              marginBottom: "10px",
            }}
          />
        </div>
      ) : (
        <>
          <TabPanel value={value} index={0}>
            <div style={{ display: "flex", overflowX: "auto", width: "100%" }}>
              {recordsData.map((ele) => renderDocumentCard(ele, "Report"))}
            </div>
            <br />
            <h3 style={{ color: "#4b4b4b" }}>Reports Analysis</h3>
            {recordsData.map(({ report }, idx) => {
              return (
                <>
                  <div
                    key={idx}
                    style={{
                      marginTop: "20px",
                    }}
                  >
                    <p style={{ color: "#4b4b4b", fontWeight: "bold" }}>
                      {new Date(report.documentDate).toLocaleString("default", {
                        month: "long",
                      })}{" "}
                      {new Date(report.documentDate).getDate()},{" "}
                      {new Date(report.documentDate).getFullYear()}
                    </p>
                  </div>
                  {renderRecords(report, idx)}
                </>
              );
            })}
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div style={{ display: "flex", overflowX: "auto", width: "100%" }}>
              {medicalData.map((ele) => {
                return <>{renderDocumentCard(ele, "Prescription")}</>;
              })}
            </div>
            <br />
            <h3 style={{ color: "#4b4b4b" }}>Medical Records Analysis</h3>
            {medicalData.map((data, idx) => {
              const { provisionalDiagnosis, medication, symptoms, advice } =
                data;
              return (
                <>
                  <p style={{ color: "#4b4b4b", fontWeight: "bold" }}>
                    {new Date(data.documentDate).toLocaleString("default", {
                      month: "long",
                    })}{" "}
                    {new Date(data.documentDate).getDate()},{" "}
                    {new Date(data.documentDate).getFullYear()}
                  </p>
                  {renderMedical(
                    {
                      provisionalDiagnosis,
                      medication,
                      symptoms,
                      advice,
                    },
                    idx
                  )}
                </>
              );
            })}
          </TabPanel>
        </>
      )}
    </Box>
  );
}

const renderMedical = (medical, idx) => {
  const keys = Object.keys(medical);
  const getFormattedKey = (key) => {
    if (key === "provisionalDiagnosis") {
      return "Provisional Diagnosis";
    }
    if (key === "medication") {
      return "Medication";
    }
    if (key === "symptoms") {
      return "Chied Complaints";
    }
    if (key === "advice") {
      return "Advice";
    }
  };

  return keys.map((key) => {
    return (
      <>
        {medical[key]?.length > 0 && (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px",
              alignItems: "center",
              borderBottom: "1px solid #4b4b4b",
            }}
          >
            <div>
              {getFormattedKey(key)}
              <br />
              <ul>
                {medical[key].map((ele) => {
                  return <li>{ele}</li>;
                })}
              </ul>
            </div>
          </div>
        )}
      </>
    );
  });
};

const renderRecords = (report, idx) => {
  const keys = Object.keys(report);
  return keys.map((key) => {
    if (key === "documentDate") {
      return null;
    }
    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px",
            alignItems: "center",
            borderBottom: "1px solid #4b4b4b",
          }}
        >
          <div>
            {key}
            <br />
            {Number(report[key].lowRange)} - {Number(report[key].highRange)}
          </div>
          <div style={{ textAlign: "end" }}>
            <span
              style={{
                color:
                  Number(report[key].value) > Number(report[key].highRange) ||
                  Number(report[key].value) < Number(report[key].lowRange)
                    ? "red"
                    : "green",
                fontWeight: "700",
              }}
            >
              {Number(report[key].value) > Number(report[key].highRange)
                ? "Above normal"
                : Number(report[key].value) < Number(report[key].lowRange)
                ? "Below normal"
                : "Normal"}
            </span>
            <br />
            {Number(report[key].value)}
          </div>
        </div>
      </>
    );
  });
};
