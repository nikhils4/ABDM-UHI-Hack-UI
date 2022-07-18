import { TextField, InputAdornment } from "@mui/material";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { useState, useEffect } from "react";
import { GoToReports } from "./GoToReports";
import CancelIcon from "@mui/icons-material/Cancel";

export const ChiefComplaints = () => {
  const [localState, setLocalState] = useState("");
  const [chiefComplaints, setChiefComplaints] = useState(
    JSON.parse(window.localStorage.getItem("chiefComplaints")) || []
  );

  useEffect(() => {
    window.localStorage.setItem(
      "chiefComplaints",
      JSON.stringify(chiefComplaints)
    );
  }, [chiefComplaints]);

  const handleSymptomsAdd = () => {
    if (localState?.length <= 0) return;
    setChiefComplaints([...chiefComplaints, localState]);
    setLocalState("");
  };

  const handleDelete = (value) => {
    setChiefComplaints(chiefComplaints.filter((item) => item !== value));
  };

  const majorSymptoms = JSON.parse(
    localStorage.getItem("consultationData")
  )?.majorSymptoms;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "10px 25px",
        flexGrow: 1,
      }}
    >
      <GoToReports />

      <h3>Chief Complaints</h3>
      <TextField
        width="100%"
        id="outlined-required"
        label="Chief Complaints"
        value={localState}
        onChange={(event) => setLocalState(event.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <KeyboardReturnIcon onClick={handleSymptomsAdd} />
            </InputAdornment>
          ),
        }}
      />
      {majorSymptoms?.length > 0 && (
        <>
          <div
            style={{
              marginTop: "20px",
              fontWeight: "bold",
            }}
          >
            Previously Added
          </div>
          <ul>
            {majorSymptoms?.map(({ symptom }) => (
              <li
                style={{
                  color: "#A9ACAC",
                }}
              >
                {symptom}
              </li>
            ))}
          </ul>
        </>
      )}
      {chiefComplaints?.length > 0 && (
        <>
          <div
            style={{
              marginTop: "20px",
              fontWeight: "bold",
              color: "#52b6c3",
            }}
          >
            Added
          </div>
          <ul>
            {chiefComplaints?.map((chiefComplaint) => (
              <li
                style={{
                  marginBottom: "10px",
                }}
              >
                {chiefComplaint}{" "}
                <CancelIcon
                  onClick={() => handleDelete(chiefComplaint)}
                  style={{
                    right: "35px",
                    position: "absolute",
                  }}
                />
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
