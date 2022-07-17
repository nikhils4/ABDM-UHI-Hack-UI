export const Sidebar = ({ setMainEmrScreenState }) => {
  return (
    <div
      style={{
        width: "50px",
        border: "2px solid blue",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          height: "120px",
          lineHeight: "50px",
        }}
      >
        <div
          style={{
            height: "35px",
            width: "35px",
            border: "2px solid green",
            borderRadius: "50%",
            marginTop: "60px",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              lineHeight: "20px",
              transform: "translate(-50%, -50%)",
            }}
          >
            NS
          </div>
        </div>
      </div>
      <div
        onClick={() => setMainEmrScreenState("ChiefComplaints")}
        style={{
          height: "50px",
          lineHeight: "50px",
        }}
      >
        C
      </div>
      <div
        style={{ height: "50px", lineHeight: "50px" }}
        onClick={() => setMainEmrScreenState("Diagnosis")}
      >
        D
      </div>
      <div
        style={{ height: "50px", lineHeight: "50px" }}
        onClick={() => setMainEmrScreenState("Medication")}
      >
        M
      </div>
      <div
        style={{ height: "50px", lineHeight: "50px" }}
        onClick={() => setMainEmrScreenState("Advice")}
        Medication
      >
        A
      </div>
    </div>
  );
};
