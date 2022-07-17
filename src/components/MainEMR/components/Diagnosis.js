import { TextField, InputAdornment } from "@mui/material";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { useState, useEffect } from "react";

export const Diagnosis = () => {
  const [localState, setLocalState] = useState("");
  const [diagnosis, setDiagnosis] = useState([]);

  useEffect(() => {
    window.localStorage.setItem("diagnosis", JSON.stringify(diagnosis));
  }, [diagnosis]);

  const handleSymptomsAdd = () => {
    if (localState.length <= 0) return;
    setDiagnosis([...diagnosis, localState]);
    setLocalState("");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "10px 20px",
        flexGrow: 1,
      }}
    >
      <div
        style={{
          height: "80px",
          border: "1px solid blue",
        }}
      >
        Go to reports
      </div>
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
      {diagnosis.length > 0 && (
        <>
          <div>Added</div>
          <ul>
            {diagnosis?.map((diagnosis) => (
              <li>{diagnosis}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
