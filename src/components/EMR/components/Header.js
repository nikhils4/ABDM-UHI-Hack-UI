import { TopBar } from "./TopBar";
import { SymptomsTopSection } from "./SymptomsTopSection";

export const Header = ({ screenState, screenFlow, setScreenState }) => {
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
        <TopBar
          screenFlow={screenFlow}
          setScreenState={setScreenState}
          screenState={screenState}
        />
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
