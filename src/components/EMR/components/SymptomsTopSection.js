export const SymptomsTopSection = ({
  selectedProminenceOfSymptoms,
  majorSymptoms,
}) => {
  const symptoms = majorSymptoms.map(({ symptom }) => symptom);

  return (
    <>
      <div
        style={{
          marginBottom: "15px",
          marginTop: "10px",
        }}
      >
        Patient Symptoms Summary{" "}
        <span
          style={{
            fontWeight: "bold",
          }}
        >
          Overview
        </span>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "90px",
            textAlign: "center",
          }}
        >
          <img src="https://uhi-git-feature-uhi-patient-symp-934750-amansaxenabfhl-gmailcom.vercel.app/_next/image?url=%2Fhead.svg&w=256&q=75" />
        </div>
        <div
          style={{
            flexGrow: "1",
            display: "flex",
            flexDirection: "column",
            padding: "5px",
          }}
        >
          <div
            style={{
              paddingLeft: "7px",
            }}
          >
            {symptoms.join(", ")}
          </div>
          {/* <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              // flexDirection: "row",
            }}
          >
            <div
              style={{
                margin: "7px",
                border: "1px solid green",
                height: "75px",
                width: "75px",
              }}
            >
              pdf or image
            </div>
            <div
              style={{
                margin: "7px",
                border: "1px solid green",
                height: "75px",
                width: "75px",
              }}
            >
              pdf or image
            </div>
            <div
              style={{
                margin: "7px",
                border: "1px solid green",
                height: "75px",
                width: "75px",
              }}
            >
              pdf or image
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};
