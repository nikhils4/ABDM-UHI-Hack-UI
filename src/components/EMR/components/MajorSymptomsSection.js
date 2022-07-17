import { Chip } from "@mui/material";

export const MajorSymptomsSection = ({
  majorSymptoms = [],
  setMajorSymptoms,
  setScreenState,
}) => {
  const majorSymptomsStatic = [
    "Fever",
    "Cold & Cough",
    "Headache",
    "Chest Pain",
  ];

  const handleClick = (dataObject, section) => {
    setMajorSymptoms([...majorSymptoms, dataObject]);
  };

  const handleDelete = (value, section) => {
    setMajorSymptoms(majorSymptoms.filter(({ symptom }) => symptom !== value));
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
            backgroundColor: "#52B6C3",
            borderRadius: "50px",
            padding: "10px",
            color: "white ",
            border: "none",
            cursor: "pointer",
            alignSelf: "center",
          }}
          onClick={() => setScreenState("SymptomsSection")}
        >
          Save and proceed
        </button>
      </div>
    </>
  );
};
