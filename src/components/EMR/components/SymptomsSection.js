import { useEffect, useState } from "react";
import { Chip } from "@mui/material";

export const SymptomsSection = ({
  selectedProminenceOfSymptoms = [],
  setSelectedProminenceOfSymptoms,
  painLocation = [],
  setPainLocation,
  accompaniedSymptoms = [],
  setAccompaniedSymptoms,
  screenFlow,
  setScreenState,
  screenState,
}) => {
  const [symptomsData, setSymptomsData] = useState({
    Prominence_of_Symptoms: ["1 week", "2 days", "5-7 days"],
    Pain_Located: ["Shoulder", "Around nose", "Ear"],
    Acompained_Symptoms: ["Sleeplessness", "Pain in chest"],
  });

  useEffect(() => {
    let url_string = window.location.href;
    let url = new URL(url_string);
    const emrId = url.searchParams.get("emrId");
    fetch("https://uhi-hack.herokuapp.com/symptoms/doctor/checkup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        EmrId: emrId,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.H || data?.Cough || data?.Fever || data?.["0"])
          setSymptomsData(data?.H || data?.Cough || data?.Fever || data?.["0"]);
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
              border: "2px solid #4ed8e9",
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
            Next {">"}
          </div>
        </div>
        <h3>Prominence of Symptoms</h3>
        <div
          style={{
            marginBottom: "20px",
          }}
        >
          {symptomsData?.["Prominence_of_Symptoms"]?.map((symptom) => {
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
        <div
          style={{
            marginBottom: "20px",
          }}
        >
          {symptomsData?.["Pain_Located"]?.map((symptom) => {
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
        <div
          style={{
            marginBottom: "20px",
          }}
        >
          {symptomsData["Acompained_Symptoms"]?.map((symptom) => {
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
