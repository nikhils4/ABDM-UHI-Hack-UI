import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { Header } from "./components/Header";
import { SymptomsSection } from "./components/SymptomsSection";
import { SymptomsDetailsSection } from "./components/SymptomsDetailsSection";
import { SymptomsReviewSection } from "./components/SymptomsReviewSection";
import { MajorSymptomsSection } from "./components/MajorSymptomsSection";
import { Navigate } from "react-router-dom";

export const EMR = () => {
  const [screenState, setScreenState] = useState("home");
  const [majorSymptoms, setMajorSymptoms] = useState([]);
  const [selectedProminenceOfSymptoms, setSelectedProminenceOfSymptoms] =
    useState([]);
  const [painLocation, setPainLocation] = useState([]);
  const [accompaniedSymptoms, setAccompaniedSymptoms] = useState([]);
  const [symptomsInduced, setSymptomsInduced] = useState([]);
  const [symptomsRelievedBy, setSymptomsRelievedBy] = useState([]);
  const [screenFlow, setScreenFlow] = useState([]);

  useEffect(() => {
    fetch(
      "https://uhi-hack.herokuapp.com/appointment/75282f14-004c-486d-a006-d484fb785f18"
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.emr.symptoms.length > 0) {
          setScreenState("SymptomsSection");
          setScreenFlow([
            "Dashboard",
            "SymptomsSection",
            "SymptomsDetailsSection",
            "SymptomsReviewSection",
          ]);
        } else {
          setScreenState("MajorSymptomsSection");
          setScreenFlow([
            "Dashboard",
            "MajorSymptomsSection",
            "SymptomsSection",
            "SymptomsDetailsSection",
            "SymptomsReviewSection",
          ]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Grid container>
      <Grid item md={2}></Grid>
      <Grid item xs={12} md={8}>
        {screenState === "Dashboard" && <Navigate to="/" replace />}
        <Header
          screenState={screenState}
          setScreenState={setScreenState}
          screenFlow={screenFlow}
        />
        {screenState === "MajorSymptomsSection" && (
          <MajorSymptomsSection
            setScreenState={setScreenState}
            setMajorSymptoms={setMajorSymptoms}
            majorSymptoms={majorSymptoms}
          />
        )}
        {screenState === "SymptomsSection" && (
          <SymptomsSection
            selectedProminenceOfSymptoms={selectedProminenceOfSymptoms}
            setSelectedProminenceOfSymptoms={setSelectedProminenceOfSymptoms}
            painLocation={painLocation}
            setPainLocation={setPainLocation}
            accompaniedSymptoms={accompaniedSymptoms}
            setAccompaniedSymptoms={setAccompaniedSymptoms}
          />
        )}
        {screenState === "SymptomsDetailsSection" && (
          <SymptomsDetailsSection
            selectedProminenceOfSymptoms={selectedProminenceOfSymptoms}
            setSelectedProminenceOfSymptoms={setSelectedProminenceOfSymptoms}
            painLocation={painLocation}
            setPainLocation={setPainLocation}
            accompaniedSymptoms={accompaniedSymptoms}
            setAccompaniedSymptoms={setAccompaniedSymptoms}
            symptomsInduced={symptomsInduced}
            setSymptomsInduced={setSymptomsInduced}
            symptomsRelievedBy={symptomsRelievedBy}
            setSymptomsRelievedBy={setSymptomsRelievedBy}
          />
        )}
        {screenState === "SymptomsReviewSection" && (
          <SymptomsReviewSection
            selectedProminenceOfSymptoms={selectedProminenceOfSymptoms}
            painLocation={painLocation}
            accompaniedSymptoms={accompaniedSymptoms}
            symptomsInduced={symptomsInduced}
            symptomsRelievedBy={symptomsRelievedBy}
          />
        )}
      </Grid>
      <Grid item md={2}></Grid>
    </Grid>
  );
};
