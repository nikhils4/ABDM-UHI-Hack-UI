import { Link, useNavigate } from "react-router-dom";

export const AppointmentCard = ({ appointment }) => {
  const {
    patientName,
    appointmentSource,
    gender,
    age,
    contactNumber,
    appointmentTime,
    appointmentId,
    emrId,
    status,
  } = appointment;
  const navigate = useNavigate();
  return (
    <div
      style={{
        height: "75px",
        position: "relative",
        padding: "10px 15px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        marginBottom: "10px",
        borderRadius: "5px",
        boxShadow: "2px 2px 4px rgba(188,188,188,0.15)",
      }}
    >
      <div>
        <span
          style={{
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          {patientName}
        </span>{" "}
        | by {appointmentSource}
      </div>
      <div>
        {gender} {age} | {contactNumber}
      </div>
      <div>{appointmentTime}</div>
      {status === "com" ? (
        <button
          style={{
            width: "fit-content",
            position: "absolute",
            bottom: "10px",
            right: "25px",
            fontSize: "18px",
            backgroundColor: "#4BB543",
            borderRadius: "50px",
            padding: "10px",
            color: "white ",
            border: "none",
            cursor: "pointer",
          }}
        >
          Completed
        </button>
      ) : (
        <Link
          to={`/emr?apptId=${appointmentId}&emrId=${emrId}&name=${patientName}&time=${appointmentTime}&source=${appointmentSource}`}
        >
          {" "}
          <button
            onClick={(status) => {
              if (status === "act") {
                navigate(`/mainEmr?emrId=${emrId}`);
              } else {
                navigate(
                  `/emr?apptId=${appointmentId}&emrId=${emrId}&name=${patientName}&time=${appointmentTime}&source=${appointmentSource}`
                );
              }
            }}
            style={{
              width: "fit-content",
              position: "absolute",
              bottom: "10px",
              right: "15px",
              fontSize: "18px",
              backgroundColor: "#52B6C3",
              borderRadius: "50px",
              padding: "10px",
              color: "white ",
              border: "none",
              cursor: "pointer",
            }}
          >
            {status === "act" ? "Consult" : "+ Symptoms"}
          </button>
        </Link>
      )}
    </div>
  );
};
