import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Records = [
  {
    med: "Hemoglobin",
    qt: "13.0 - 17.0 g/dl",
    status: "Normal",
    value: "15.20",
    color: "#366327"
  },
  {
    med: "RBC Count",
    qt: "3.0 - 6.0 mill/mm3",
    status: "Good",
    value: "1.20",
    color: "#82AF73"

  },
  {
    med: "MCV",
    qt: "13.0 - 1.0 g/dl",
    status: "Average",
    value: "9.20",
    color: "#4ED8E9"

  },
  {
    med: "MCH",
    qt: "13.0 - 17.0 g/dl",
    status: "Normal",
    value: "1.20",
    color: "#366327"

  },
  {
    med: "MCH",
    qt: "13.0 - 17.0 g/dl",
    status: "Normal",
    value: "15.20",
    color: "#366327"

  },
  {
    med: "MCH-v1",
    qt: "13.0 - 17.0 g/dl",
    status: "Below Normal",
    value: "15.20",
    color: "red"

  },
  {
    med: "Fungus",
    qt: "13.0 - 17.0 g/dl",
    status: "Normal",
    value: "55.20",
    color: "#366327"

  },
  {
    med: "Diabetes",
    qt: "13.0 - 17.0 g/dl",
    status: "Good",
    value: "12.20",
    color: "#82AF73"

  },
  
];

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

const Documents = (cur,idx) => (
  <div
    style={{
      flexBasis: 200,
      flexShrink: 0,
      height: 220,
      borderRadius: 10,
      marginRight: 20,
      background: "#CDF8FF",
      padding: 12,
textAlign:'center'
    }}
  >
  <img src={idx%2==0? "https://images.template.net/wp-content/uploads/2019/05/Medical-Claims-and-Doctore-Prescription-for-Drugs-Download.jpg":
  "https://cdn.techjockey.com/blog/wp-content/uploads/2017/02/9.png"}

  height={200}
  width={200}
  />
  <br/>
  <span>Prescription 20-10-22</span>
  <br/>
  </div>
);

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderRecords = () => {
    return Records.map((curr, idx) => (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 10,
            alignItems: "center",
          }}
        >
          <div>
            {curr.med}
            <br />
            {curr.qt}
          </div>
          <div style={{textAlign:'end'}}>
            <span style={{ color: curr.color ,fontWeight:'700'}}>{curr.status}</span>
            <br />
            {curr.value}
          </div>
        </div>
        {idx !== Records.length - 1 && (
          <div
            style={{
              height: 1,
              width: "100%",
              background: "#4b4b4b",
              margin: "10px 0",
            }}
          ></div>
        )}{" "}
      </>
    ));
  };
  return (
    <Box sx={{ width: "100%", overflow: "scroll" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          TabIndicatorProps={{ style: { backgroundColor: "#52B6C3" } }}
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            autoCapitalize={false}
            style={{ width: "50%", color: "#4b4b4b" }}
            fullWidth={true}
            label="Records"
            tez
            {...a11yProps(0)}
          />
          <Tab
            autoCapitalize={false}
            style={{ width: "50%", color: "#4b4b4b" }}
            fullWidth={true}
            label="Reports"
            {...a11yProps(1)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div style={{ display: "flex", overflowX: "auto", width: "100%" }}>
          {Array(5).fill("").map(Documents)}
        </div>
        <br />
        <h3 style={{color:'#4b4b4b'}}>Records Analysis</h3>
        {renderRecords()}
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div style={{ display: "flex", overflowX: "auto", width: "100%" }}>
          {Array(5).fill("").map(Documents)}
        </div>
        <br />
        <h3 style={{color:'#4b4b4b'}}>Records Analysis</h3>
        {renderRecords()}
      </TabPanel>
    </Box>
  );
}
