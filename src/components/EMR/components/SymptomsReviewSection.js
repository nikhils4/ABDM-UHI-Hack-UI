import { useNavigate } from "react-router-dom";

export const SymptomsReviewSection = ({
  selectedProminenceOfSymptoms = [],
  painLocation = [],
  accompaniedSymptoms = [],
  symptomsInduced = [],
  symptomsRelievedBy = [],
  screenFlow = [],
  screenState = [],
  setScreenState,
  majorSymptoms = [],
}) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    const currentIndex = screenFlow.indexOf(screenState);
    const newIndex = currentIndex - 1;
    const newScreenState = screenFlow[newIndex];
    setScreenState(newScreenState);
  };

  const getFormattedData = (array) => {
    return array.map(({ symptom }) => symptom);
  };

  const handleStartConsultation = () => {
    window.localStorage.removeItem("chiefComplaints");
    window.localStorage.removeItem("medication");
    window.localStorage.removeItem("diagnosis");
    window.localStorage.removeItem("advice");
    window.localStorage.setItem(
      "consultationData",
      JSON.stringify({
        selectedProminenceOfSymptoms,
        painLocation,
        accompaniedSymptoms,
        symptomsInduced,
        symptomsRelievedBy,
        majorSymptoms,
      })
    );
    let url_string = window.location.href;
    let url = new URL(url_string);
    const emrId = url.searchParams.get("emrId");
    fetch("https://uhi-hack.herokuapp.com/emr/updateEmrReceptionist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        provisionalDiagnosis: [
          ...getFormattedData(selectedProminenceOfSymptoms),
          ...getFormattedData(painLocation),
          ...getFormattedData(accompaniedSymptoms),
          ...getFormattedData(symptomsInduced),
          ...getFormattedData(symptomsRelievedBy),
        ],
      }),
    });
    navigate(`/mainEmr?emrId=${emrId}`);
  };

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
            height: "100px",
          }}
        ></div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            position: "absolute",
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
              cursor: "pointer",
            }}
            onClick={handleGoBack}
          >
            Back to Appointment
          </div>
          <div
            onClick={handleStartConsultation}
            style={{
              flexGrow: 1,
              textAlign: "center",
              backgroundColor: "#4FD9EA",
              paddingTop: "25px",
              paddingBottom: "25px",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Start Consultation {">"}
          </div>
        </div>
      </div>
    </>
  );
};
