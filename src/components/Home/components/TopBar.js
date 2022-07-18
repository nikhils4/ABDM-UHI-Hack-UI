import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";

import { useState } from "react";
export const TopBar = ({ selectedDate }) => {
  const [value, setValue] = useState(null);
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        style={{
          height: "50px",
          width: "50px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          borderRadius: "50%",
          backgroundImage:
            "url(https://img.freepik.com/premium-vector/user-icon-human-person-symbol-social-profile-icon-avatar-login-sign-web-user-symbol-neumorphic-ui-ux-white-user-interface-web-button-neumorphism-vector-eps-10_399089-2757.jpg)",
        }}
      ></div>
      <div style={{ fontSize: "22px", fontWeight: "500", paddingLeft: "20px" }}>
        {selectedDate.toLocaleString("default", { month: "long" })}
      </div>
      <div
        style={{
          textAlign: "right",
          flexGrow: "1",
        }}
      >
        <CalendarMonthIcon
          onClick={() => {
            setOpen((isOpen) => !isOpen);
          }}
        />
        {/* 
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <DatePicker open={open} value={new Date(selectedDate)} />
        </MuiPickersUtilsProvider> */}
      </div>
    </>
  );
};
