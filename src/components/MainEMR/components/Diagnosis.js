import { TextField, InputAdornment } from "@mui/material";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { useState, useEffect } from "react";
import { GoToReports } from "./GoToReports";
import CancelIcon from "@mui/icons-material/Cancel";

export const Diagnosis = () => {
  const [localState, setLocalState] = useState("");
  const [diagnosis, setDiagnosis] = useState(
    JSON.parse(window.localStorage.getItem("diagnosis")) || []
  );

  const handleDelete = (value) => {
    setDiagnosis(diagnosis.filter((item) => item !== value));
  };

  useEffect(() => {
    window.localStorage.setItem("diagnosis", JSON.stringify(diagnosis));
  }, [diagnosis]);

  const handleSymptomsAdd = () => {
    if (localState?.length <= 0) return;
    setDiagnosis([...diagnosis, localState]);
    setLocalState("");
  };

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
      <h3>Diagnosis</h3>
      <TextField
        width="100%"
        id="outlined-required"
        label="Diagnosis"
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
      {diagnosis?.length > 0 && (
        <>
          <div
            style={{
              marginTop: "20px",
              fontWeight: "bold",
            }}
          >
            Added
          </div>
          <ul>
            {diagnosis?.map((diagnosis) => (
              <li
                style={{
                  marginBottom: "10px",
                }}
              >
                {diagnosis}{" "}
                <CancelIcon
                  onClick={() => handleDelete(diagnosis)}
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
