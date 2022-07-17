import { Chip } from "@mui/material";
import { useEffect, useState } from "react";

export const MajorSymptomsSection = ({
  majorSymptoms = [],
  setMajorSymptoms,
  setScreenState,
}) => {
  const [majorSymptomsStatic, setMajorSymptomsStatic] = useState([
    "Fever",
    "Cold & Cough",
    "Headache",
    "Chest Pain",
  ]);

  useEffect(() => {
    fetch("https://uhi-hack.herokuapp.com/symptoms/patient/suggestions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Specialization: "General_Physician",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setMajorSymptomsStatic(data?.General_Physician?.Head);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleClick = (dataObject, section) => {
    setMajorSymptoms([...majorSymptoms, dataObject]);
  };

  const handleDelete = (value, section) => {
    setMajorSymptoms(majorSymptoms.filter(({ symptom }) => symptom !== value));
  };

  const getFormattedData = (array) => {
    return array.map(({ symptom }) => symptom);
  };

  const handleSaveAndProceed = () => {
    let url_string = window.location.href;
    let url = new URL(url_string);
    const emrId = url.searchParams.get("emrId");
    fetch("https://uhi-hack.herokuapp.com/emr/addEmrPatient", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        emrId,
        symptoms: getFormattedData(majorSymptoms),
      }),
    });
    setScreenState("SymptomsSection");
  };

  console.log({
    majorSymptoms,
  });

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
        <h3>Major Symptoms Section</h3>
        <div>
          {majorSymptomsStatic.map((symptom) => {
            if (!doesItContain(symptom, majorSymptoms, "symptom")) {
              return (
                <Chip
                  label={symptom}
                  onClick={(event) =>
                    handleClick(
                      { symptom: event.target.innerText, custom: false },
                      "MS"
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
                    handleDelete(event.target.innerText, "MS")
                  }
                  onDelete={() => handleDelete(symptom, "MS")}
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
        <button
          style={{
            width: "fit-content",
            fontSize: "14px",
            fontWeight: "bold",
            marginTop: "40px",
            backgroundColor: "#4ED8E9",
            borderRadius: "50px",
            padding: "10px",
            color: "white ",
            border: "none",
            cursor: "pointer",
            alignSelf: "center",
          }}
          onClick={handleSaveAndProceed}
        >
          Save and proceed
        </button>
      </div>
    </>
  );
};
