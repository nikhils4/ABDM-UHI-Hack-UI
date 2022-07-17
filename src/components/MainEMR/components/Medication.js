import { TextField, InputAdornment } from "@mui/material";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { useState, useEffect } from "react";

export const Medication = () => {
  const [localState, setLocalState] = useState("");
  const [medication, setMedication] = useState([]);

  useEffect(() => {
    window.localStorage.setItem("chiefComplaints", JSON.stringify(medication));
  }, [medication]);

  const handleSymptomsAdd = () => {
    if (localState.length <= 0) return;
    setMedication([...medication, localState]);
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
      <h3>Medication</h3>
      <TextField
        width="100%"
        id="outlined-required"
        label="Medication"
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
      {medication.length > 0 && (
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
            {medication?.map((medication) => (
              <li>{medication}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
