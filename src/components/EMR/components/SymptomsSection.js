import { useEffect, useState } from "react";
import { Chip } from "@mui/material";

export const SymptomsSection = ({
  selectedProminenceOfSymptoms = [],
  setSelectedProminenceOfSymptoms,
  painLocation = [],
  setPainLocation,
  accompaniedSymptoms = [],
  setAccompaniedSymptoms,
}) => {
  const [symptomsData, setSymptomsData] = useState({
    "Prominence of Symptoms": ["fever", "cold"],
    "Pain Located": ["fever", "cold"],
    "Accompanied Symptoms": ["fever", "cold"],
  });

  useEffect(() => {
    fetch("")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSymptomsData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleClick = (dataObject, section) => {
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

  return (
    <>
      <div
        style={{
          display: "flex",
          padding: "15px",
          flexDirection: "column",
        }}
      >
        <h3>Prominence of Symptoms</h3>
        <div>
          {symptomsData["Prominence of Symptoms"]?.map((symptom) => {
            if (
              !doesItContain(symptom, selectedProminenceOfSymptoms, "symptom")
            ) {
              return (
                <Chip
                  label={symptom}
                  onClick={(event) =>
                    handleClick(
                      { symptom: event.target.innerText, custom: false },
                      "POS"
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
                    handleDelete(event.target.innerText, "POS")
                  }
                  onDelete={() => handleDelete(symptom, "POS")}
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
        <h3>Pain Located</h3>
        <div>
          {symptomsData["Pain Located"]?.map((symptom) => {
            if (!doesItContain(symptom, painLocation, "symptom")) {
              return (
                <Chip
                  label={symptom}
                  onClick={(event) =>
                    handleClick(
                      { symptom: event.target.innerText, custom: false },
                      "PL"
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
                    handleDelete(event.target.innerText, "PL")
                  }
                  onDelete={() => handleDelete(symptom, "PL")}
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
        <h3>Accompanied Symptoms</h3>
        <div>
          {symptomsData["Accompanied Symptoms"]?.map((symptom) => {
            if (!doesItContain(symptom, accompaniedSymptoms, "symptom")) {
              return (
                <Chip
                  label={symptom}
                  onClick={(event) =>
                    handleClick(
                      { symptom: event.target.innerText, custom: false },
                      "AS"
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
                    handleDelete(event.target.innerText, "AS")
                  }
                  onDelete={() => handleDelete(symptom, "AS")}
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
