import { useNavigate } from "react-router-dom";

export const GoToReports = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        let url_string = window.location.href;
        let url = new URL(url_string);
        const patientId = url.searchParams.get("patientId");
        navigate("/patient-reports?patientId=" + patientId);
      }}
      style={{
        margin: "15px 0px",
        borderRadius: "5px",
        backgroundColor: "#CDF8FF",
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        padding: "25px 20px",
        position: "relative",
      }}
    >
      <div>
        <span
          style={{
            fontWeight: "bold",
            fontSize: "15px",
          }}
        >
          View overall patient trends
        </span>{" "}
        <br />
        <span
          style={{
            fontSize: "12px",
          }}
        >
          On Prescription and Reports
        </span>
      </div>
      <div
        style={{
          position: "absolute",
          right: "0px",
          top: "50%",
          transform: "translate(50%, -50%)",
          height: "30px",
          width: "30px",
          backgroundColor: "#fff",
          lineHeight: "30px",
          textAlign: "center",
          borderRadius: "5px",
          boxShadow: "0px 0px 5px #efefef",
        }}
      >
        {">"}
      </div>
    </div>
  );
};
