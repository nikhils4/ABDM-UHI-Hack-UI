import { TextField, InputAdornment } from "@mui/material";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { useState, useEffect } from "react";

export const Advice = () => {
  const [localState, setLocalState] = useState("");
  const [advice, setAdvice] = useState([]);

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
          <div>Added</div>
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
