import { TextField, InputAdornment } from "@mui/material";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { useState, useEffect } from "react";
import { GoToReports } from "./GoToReports";

export const Advice = () => {
  const [localState, setLocalState] = useState("");
  const [advice, setAdvice] = useState(
    JSON.parse(window.localStorage.getItem("advice")) || []
  );

  useEffect(() => {
    window.localStorage.setItem("advice", JSON.stringify(advice));
  }, [advice]);

  const handleSymptomsAdd = () => {
    if (localState.length <= 0) return;
    setAdvice([...advice, localState]);
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
      <h3>Advice</h3>
      <TextField
        width="100%"
        id="outlined-required"
        label="Advice"
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
      {advice.length > 0 && (
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
            {advice?.map((advice) => (
              <li>{advice}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
