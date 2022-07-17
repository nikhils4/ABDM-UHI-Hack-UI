import { useState } from "react";
import Grid from "@mui/material/Grid";
import { Sidebar } from "./components/Sidebar";
import { ChiefComplaints } from "./components/ChiefComplaints";
import { Diagnosis } from "./components/Diagnosis";
import { Medication } from "./components/Medication";
import { Advice } from "./components/Advice";
import { useNavigate } from "react-router-dom";

export const MainEMR = () => {
  const navigate = useNavigate();
  const [mainEmrScreenState, setMainEmrScreenState] =
    useState("ChiefComplaints");

  const getFormattedData = (array) => {
    return array.map(({ symptom }) => symptom);
  };

  const handleSaveConsultation = () => {
    let url_string = window.location.href;
    let url = new URL(url_string);
    const emrId = url.searchParams.get("emrId");
    fetch("https://uhi-hack.herokuapp.com/emr/updateEmrDoctor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        emrId,
        symptoms: [
          ...getFormattedData(
            JSON.parse(localStorage.getItem("consultationData")).majorSymptoms
          ),
          ...JSON.parse(window.localStorage.getItem("chiefComplaints")),
        ],
        provisionalDiagnosis: [
          ...JSON.parse(window.localStorage.getItem("diagnosis")),
        ],
        advice: [...JSON.parse(window.localStorage.getItem("advice"))],
        medication: [...JSON.parse(window.localStorage.getItem("medication"))],
      }),
    });
    navigate("/");
  };

  return (
    <Grid container>
      <Grid item md={2}></Grid>
      <Grid
        item
        xs={12}
        md={8}
        style={{
          display: "flex",
          position: "relative",
        }}
      >
        <Sidebar setMainEmrScreenState={setMainEmrScreenState} />
        {mainEmrScreenState === "ChiefComplaints" && <ChiefComplaints />}
        {mainEmrScreenState === "Diagnosis" && <Diagnosis />}
        {mainEmrScreenState === "Medication" && <Medication />}
        {mainEmrScreenState === "Advice" && <Advice />}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            padding: "25px 0",
            transform: "translateX(-50%)",
            backgroundColor: "#F5FEFF",
            width: "100%",
            textAlign: "center",
            fontWeight: "bold",
          }}
          onClick={handleSaveConsultation}
        >
          Save Consultation
        </div>
      </Grid>
      <Grid item md={2}></Grid>
    </Grid>
  );
};
