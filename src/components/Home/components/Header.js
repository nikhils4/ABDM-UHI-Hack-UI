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
