import DatePicker from "react-horizontal-datepicker";
import "./css/calendar.css";

export const Calendar = ({ setSelectedDate, selectedDate }) => {
  const getSelectedDay = (date) => {
    setSelectedDate(date);
  };
  return (
    <div
      style={{
        textAlign: "center",
        width: "90%",
      }}
    >
      <DatePicker
        getSelectedDay={getSelectedDay}
        shouldScroll={true}
        endDate={365}
        selectDate={selectedDate}
        color="#4ed8e9"
      />
    </div>
  );
};
