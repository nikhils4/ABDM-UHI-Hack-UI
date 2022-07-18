import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { Header } from "./components/Header";
import { SymptomsSection } from "./components/SymptomsSection";
import { SymptomsDetailsSection } from "./components/SymptomsDetailsSection";
import { SymptomsReviewSection } from "./components/SymptomsReviewSection";
import { MajorSymptomsSection } from "./components/MajorSymptomsSection";
import { Navigate } from "react-router-dom";

export const EMR = () => {
  let url_string = window.location.href;
  let url = new URL(url_string);
  const apptId = url.searchParams.get("apptId");
  const name = url.searchParams.get("name");
  const apptSource = url.searchParams.get("source");
  const apptTime = url.searchParams.get("time");

  const [screenState, setScreenState] = useState("home");
  const [majorSymptoms, setMajorSymptoms] = useState([]);
  const [selectedProminenceOfSymptoms, setSelectedProminenceOfSymptoms] =
    useState(
      JSON.parse(localStorage.getItem(apptId))?.selectedProminenceOfSymptoms ||
        []
    );
  const [painLocation, setPainLocation] = useState(
    JSON.parse(localStorage.getItem(apptId))?.painLocation || []
  );
  const [accompaniedSymptoms, setAccompaniedSymptoms] = useState(
    JSON.parse(localStorage.getItem(apptId))?.accompaniedSymptoms || []
  );
  const [symptomsInduced, setSymptomsInduced] = useState(
    JSON.parse(localStorage.getItem(apptId))?.symptomsInduced || []
  );
  const [symptomsRelievedBy, setSymptomsRelievedBy] = useState(
    JSON.parse(localStorage.getItem(apptId))?.symptomsRelievedBy || []
  );
  const [screenFlow, setScreenFlow] = useState([]);

  const formatData = (array) => {
    return array.map((name) => {
      return {
        symptom: name,
        custom: false,
      };
    });
  };

  useEffect(() => {
    fetch(`https://uhi-hack.herokuapp.com/appointment/${apptId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.emr.symptoms?.length > 0) {
          setScreenState("SymptomsSection");
          setMajorSymptoms(formatData(data.emr.symptoms));
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
        setScreenState("MajorSymptomsSection");
        setScreenFlow([
          "Dashboard",
          "MajorSymptomsSection",
          "SymptomsSection",
          "SymptomsDetailsSection",
          "SymptomsReviewSection",
        ]);
      });
  }, []);

  return (
    <Grid container>
      <Grid item md={2}></Grid>
      <Grid item xs={12} md={8}>
        {screenState === "Dashboard" && <Navigate to="/" replace />}
        <Header
          name={name}
          apptSource={apptSource}
          apptTime={apptTime}
          majorSymptoms={majorSymptoms}
          selectedProminenceOfSymptoms={selectedProminenceOfSymptoms}
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
            screenFlow={screenFlow}
            setScreenState={setScreenState}
            screenState={screenState}
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
            screenFlow={screenFlow}
            setScreenState={setScreenState}
            screenState={screenState}
          />
        )}
        {screenState === "SymptomsReviewSection" && (
          <SymptomsReviewSection
            majorSymptoms={majorSymptoms}
            selectedProminenceOfSymptoms={selectedProminenceOfSymptoms}
            painLocation={painLocation}
            accompaniedSymptoms={accompaniedSymptoms}
            symptomsInduced={symptomsInduced}
            symptomsRelievedBy={symptomsRelievedBy}
            screenFlow={screenFlow}
            setScreenState={setScreenState}
            screenState={screenState}
          />
        )}
      </Grid>
      <Grid item md={2}></Grid>
    </Grid>
  );
};
