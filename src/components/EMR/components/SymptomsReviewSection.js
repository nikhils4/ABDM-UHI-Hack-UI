export const SymptomsReviewSection = ({
  selectedProminenceOfSymptoms = [],
  painLocation = [],
  accompaniedSymptoms = [],
  symptomsInduced = [],
  symptomsRelievedBy = [],
}) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "15px",
          position: "relative",
        }}
      >
        {selectedProminenceOfSymptoms.length > 0 && (
          <div
            style={{
              border: "1px solid #4ed8e9",
              padding: "0px 20px 15px 20px",
              marginBottom: "15px",
              boxShadow:
                "0px 0.15px 0.45px rgba(0, 0, 0, 0.14), 0px 0.8px 1.8px rgba(0, 0, 0, 0.12)",
              borderRadius: "5px",
            }}
          >
            <h3>Prominence of Symptoms</h3>
            <div>
              <ul>
                {selectedProminenceOfSymptoms.map(({ symptom }) => (
                  <li>{symptom}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
        {painLocation.length > 0 && (
          <div
            style={{
              border: "1px solid #4ed8e9",
              padding: "0px 20px 15px 20px",
              marginBottom: "15px",
              boxShadow:
                "0px 0.15px 0.45px rgba(0, 0, 0, 0.14), 0px 0.8px 1.8px rgba(0, 0, 0, 0.12)",
              borderRadius: "5px",
            }}
          >
            <h3>Pain Located</h3>
            <div>
              <ul>
                {painLocation.map(({ symptom }) => (
                  <li>{symptom}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
        {accompaniedSymptoms.length > 0 && (
          <div
            style={{
              border: "1px solid #4ed8e9",
              padding: "0px 20px 15px 20px",
              marginBottom: "15px",
              boxShadow:
                "0px 0.15px 0.45px rgba(0, 0, 0, 0.14), 0px 0.8px 1.8px rgba(0, 0, 0, 0.12)",
              borderRadius: "5px",
            }}
          >
            <h3>Accompanied Symptoms</h3>
            <div>
              <ul>
                {accompaniedSymptoms.map(({ symptom }) => (
                  <li>{symptom}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
        {symptomsInduced.length > 0 && (
          <div
            style={{
              border: "1px solid #4ed8e9",
              padding: "0px 20px 15px 20px",
              marginBottom: "15px",
              boxShadow:
                "0px 0.15px 0.45px rgba(0, 0, 0, 0.14), 0px 0.8px 1.8px rgba(0, 0, 0, 0.12)",
              borderRadius: "5px",
            }}
          >
            <h3>Symptoms Induced</h3>
            <div>
              <ul>
                {symptomsInduced.map(({ symptom }) => (
                  <li>{symptom}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
        {symptomsRelievedBy.length > 0 && (
          <div
            style={{
              border: "1px solid #4ed8e9",
              padding: "0px 20px 15px 20px",
              marginBottom: "15px",
              boxShadow:
                "0px 0.15px 0.45px rgba(0, 0, 0, 0.14), 0px 0.8px 1.8px rgba(0, 0, 0, 0.12)",
              borderRadius: "5px",
            }}
          >
            <h3>Symptoms Relieved By</h3>
            <div>
              <ul>
                {symptomsRelievedBy.map(({ symptom }) => (
                  <li>{symptom}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100vw",
            alignItems: "center",
            position: "fixed",
            bottom: 0,
            transform: "translateX(-15px)",
          }}
        >
          <div
            style={{
              flexGrow: 1,
              textAlign: "center",
              backgroundColor: "#F5FEFF",
              paddingTop: "25px",
              paddingBottom: "25px",
              fontWeight: "bold",
            }}
          >
            Back to Appointment
          </div>
          <div
            style={{
              flexGrow: 1,
              textAlign: "center",
              backgroundColor: "#4FD9EA",
              paddingTop: "25px",
              paddingBottom: "25px",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Start Consultation {">"}
          </div>
        </div>
      </div>
    </>
  );
};
