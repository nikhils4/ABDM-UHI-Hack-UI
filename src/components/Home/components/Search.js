import { TextField, InputAdornment } from "@mui/material";
import { useState } from "react";
// import search isocn from material ui
import SearchIcon from "@mui/icons-material/Search";

export const Search = () => {
  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <TextField
        id="outlined-required"
        label="Search Patient"
        sx={{ width: window.innerWidth > 900 ? "45vw" : "90vw" }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};
