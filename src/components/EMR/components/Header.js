import { TopBar } from "./TopBar";
import { SymptomsTopSection } from "./SymptomsTopSection";

export const Header = ({ screenState }) => {
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
        <TopBar />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "10px 15px",
        }}
      >
        {screenState === "SymptomsReviewSection" && <SymptomsTopSection />}
      </div>
    </>
  );
};
