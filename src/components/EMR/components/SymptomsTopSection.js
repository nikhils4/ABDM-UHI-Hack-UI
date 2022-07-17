export const SymptomsTopSection = () => {
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
        }}
      >
        <div
          style={{
            border: "1px solid blue",
            width: "90px",
          }}
        >
          Head/ Stomach/ Bones and Joints or Default
        </div>
        <div
          style={{
            border: "1px solid black",
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
            Cough, Cold, Fever list to be displayed
          </div>
          <div
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
          </div>
        </div>
      </div>
    </>
  );
};
