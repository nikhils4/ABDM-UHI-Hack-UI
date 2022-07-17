import { Search } from "./Search";
import { TopBar } from "./TopBar";
import { Calendar } from "./Calendar";

export const Header = ({ selectedDate, setSelectedDate }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          padding: "10px",
          alignItems: "center",
          backgroundColor: "#F5FEFF",
        }}
      >
        <TopBar selectedDate={selectedDate} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "15px",
          paddingBottom: "15px",
        }}
      >
        <Search />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "15px",
          paddingBottom: "15px",
          backgroundColor: "#F5FEFF",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.15)",
        }}
      >
        <Calendar
          setSelectedDate={setSelectedDate}
          selectedDate={selectedDate}
        />
      </div>
    </>
  );
};
