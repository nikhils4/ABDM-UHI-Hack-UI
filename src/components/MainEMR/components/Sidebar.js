import { useNavigate } from "react-router-dom";

export const Sidebar = ({ setMainEmrScreenState }) => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#F5FEFF",
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
            borderRadius: "50%",
            marginTop: "60px",
            position: "relative",
            backgroundColor: "#4ed8e9",
          }}
        >
          <div
            onClick={() => {
              window.history.back();
            }}
            style={{
              position: "absolute",
              top: "-100%",
              left: "50%",
              lineHeight: "20px",
              transform: "translate(-50%, -50%)",
              fontWeight: "bold",
            }}
          >
            {"<"}
          </div>
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
