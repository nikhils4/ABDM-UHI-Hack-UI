import { Chip } from "@mui/material";
import { useState, useEffect } from "react";

export const SymptomsDetailsSection = ({
  selectedProminenceOfSymptoms = [],
  setSelectedProminenceOfSymptoms,
  painLocation = [],
  setPainLocation,
  accompaniedSymptoms = [],
  setAccompaniedSymptoms,
  symptomsInduced = [],
  setSymptomsInduced,
  symptomsRelievedBy = [],
  setSymptomsRelievedBy,
  symptomsDetailData = [],
  setSymptomsDetailData,
  screenFlow,
  setScreenState,
  screenState,
}) => {
  useEffect(() => {
    fetch("")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSymptomsDetailData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleClick = (dataObject, section) => {
    if (section === "SI") {
      setSymptomsInduced([...symptomsInduced, dataObject]);
    }
    if (section === "SRB") {
      setSymptomsRelievedBy([...symptomsRelievedBy, dataObject]);
    }
    if (section === "POS") {
      setSelectedProminenceOfSymptoms([
        ...selectedProminenceOfSymptoms,
        dataObject,
      ]);
    }
    if (section === "PL") {
      setPainLocation([...painLocation, dataObject]);
    }
    if (section === "AS") {
      setAccompaniedSymptoms([...accompaniedSymptoms, dataObject]);
    }
  };

  const handleDelete = (value, section) => {
    if (section === "SI") {
      setSymptomsInduced(
        symptomsInduced.filter(({ symptom }) => symptom !== value)
      );
    }
    if (section === "SRB") {
      setSymptomsRelievedBy(
        symptomsRelievedBy.filter(({ symptom }) => symptom !== value)
      );
    }
    if (section === "POS") {
      setSelectedProminenceOfSymptoms(
        selectedProminenceOfSymptoms.filter(({ symptom }) => symptom !== value)
      );
    }
    if (section === "PL") {
      setPainLocation(painLocation.filter(({ symptom }) => symptom !== value));
    }
    if (section === "AS") {
      setAccompaniedSymptoms(
        accompaniedSymptoms.filter(({ symptom }) => symptom !== value)
      );
    }
  };

  const doesItContain = (value, array, keyToSearch) => {
    return array.some((data) => data[keyToSearch] === value);
  };

  const handleGoBack = () => {
    const currentIndex = screenFlow.indexOf(screenState);
    const newIndex = currentIndex - 1;
    const newScreenState = screenFlow[newIndex];
    setScreenState(newScreenState);
  };

  const handleGoForward = () => {
    const currentIndex = screenFlow.indexOf(screenState);
    const newIndex = currentIndex + 1;
    const newScreenState = screenFlow[newIndex];
    setScreenState(newScreenState);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          padding: "15px",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            onClick={handleGoBack}
            style={{
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Back
          </div>
          <div
            style={{
              flexGrow: 1,
              border: "2px solid #27C1CD",
              marginLeft: "20px",
            }}
          ></div>
          <div
            style={{
              flexGrow: 1,
              border: "2px solid #27C1CD",
              marginRight: "20px",
            }}
          ></div>
          <div
            style={{
              fontWeight: "bold",
              cursor: "pointer",
            }}
            onClick={handleGoForward}
          >
            Preview {">"}
          </div>
        </div>
        <h3>Previous Selected Symptoms</h3>
        <div>
          {selectedProminenceOfSymptoms.map(({ symptom }) => (
            <Chip
              label={symptom}
              variant="outlined"
              onClick={(event) => handleDelete(event.target.innerText, "POS")}
              onDelete={() => handleDelete(symptom, "POS")}
              style={{
                backgroundColor: "#27C1CD",
                margin: "5px",
                color: "white",
                border: "none",
                fontSize: "1rem",
              }}
            />
          ))}
          {painLocation.map(({ symptom }) => (
            <Chip
              label={symptom}
              variant="outlined"
              onClick={(event) => handleDelete(event.target.innerText, "PL")}
              onDelete={() => handleDelete(symptom, "PL")}
              style={{
                backgroundColor: "#27C1CD",
                margin: "5px",
                color: "white",
                border: "none",
                fontSize: "1rem",
              }}
            />
          ))}
          {accompaniedSymptoms.map(({ symptom }) => (
            <Chip
              label={symptom}
              variant="outlined"
              onClick={(event) => handleDelete(event.target.innerText, "AS")}
              onDelete={() => handleDelete(symptom, "AS")}
              style={{
                backgroundColor: "#27C1CD",
                margin: "5px",
                color: "white",
                border: "none",
                fontSize: "1rem",
              }}
            />
          ))}
        </div>
        <h3>Symptoms Induced/ Worsened by</h3>
        <div>
          {symptomsDetailData["Symptoms Induced/ Worsened by"]?.map(
            (symptom) => {
              if (!doesItContain(symptom, symptomsInduced, "symptom")) {
                return (
                  <Chip
                    label={symptom}
                    onClick={(event) =>
                      handleClick(
                        { symptom: event.target.innerText, custom: false },
                        "SI"
                      )
                    }
                    style={{
                      backgroundColor: "white",
                      border: "1px solid black",
                      margin: "5px",
                      color: "#02626F",
                      fontWeight: "bold",
                      fontSize: "1rem",
                    }}
                  />
                );
              } else {
                return (
                  <Chip
                    label={symptom}
                    variant="outlined"
                    onClick={(event) =>
                      handleDelete(event.target.innerText, "SI")
                    }
                    onDelete={() => handleDelete(symptom, "SI")}
                    style={{
                      backgroundColor: "#27C1CD",
                      margin: "5px",
                      color: "white",
                      border: "none",
                      fontSize: "1rem",
                    }}
                  />
                );
              }
            }
          )}
          {/* // Add custom chip rendering here */}
          <span
            style={{
              color: "#02626F",
              paddingLeft: "10px",
              fontWeight: "bold",
            }}
          >
            + Add Symptom
          </span>
        </div>
        <h3>Symptoms relieved by</h3>
        <div>
          {symptomsDetailData["Symptoms relieved by"]?.map((symptom) => {
            if (!doesItContain(symptom, symptomsRelievedBy, "symptom")) {
              return (
                <Chip
                  label={symptom}
                  onClick={(event) =>
                    handleClick(
                      { symptom: event.target.innerText, custom: false },
                      "SRB"
                    )
                  }
                  style={{
                    backgroundColor: "white",
                    border: "1px solid black",
                    margin: "5px",
                    color: "#02626F",
                    fontWeight: "bold",
                    fontSize: "1rem",
                  }}
                />
              );
            } else {
              return (
                <Chip
                  label={symptom}
                  variant="outlined"
                  onClick={(event) =>
                    handleDelete(event.target.innerText, "SRB")
                  }
                  onDelete={() => handleDelete(symptom, "SRB")}
                  style={{
                    backgroundColor: "#27C1CD",
                    margin: "5px",
                    color: "white",
                    border: "none",
                    fontSize: "1rem",
                  }}
                />
              );
            }
          })}
          {/* // Add custom chip rendering here */}
          <span
            style={{
              color: "#02626F",
              paddingLeft: "10px",
              fontWeight: "bold",
            }}
          >
            + Add Symptom
          </span>
        </div>
      </div>
    </>
  );
};
