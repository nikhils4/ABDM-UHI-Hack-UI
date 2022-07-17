import { TopBar } from "./TopBar";
import { SymptomsTopSection } from "./SymptomsTopSection";

export const Header = ({
  screenState,
  screenFlow,
  setScreenState,
  majorSymptoms,
  selectedProminenceOfSymptoms,
  name,
  apptSource,
  apptTime,
}) => {
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
          name={name}
          apptSource={apptSource}
          apptTime={apptTime}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "10px 15px",
        }}
      >
        {(screenState === "SymptomsReviewSection" ||
          screenState === "SymptomsSection" ||
          screenState === "SymptomsDetailsSection") && (
          <SymptomsTopSection
            majorSymptoms={majorSymptoms}
            selectedProminenceOfSymptoms={selectedProminenceOfSymptoms}
          />
        )}
      </div>
    </>
  );
};
