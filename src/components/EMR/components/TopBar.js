import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export const TopBar = ({ screenFlow, setScreenState, screenState }) => {
  const handleGoBack = () => {
    const currentIndex = screenFlow.indexOf(screenState);
    const newIndex = currentIndex - 1;
    const newScreenState = screenFlow[newIndex];
    setScreenState(newScreenState);
  };

  return (
    <>
      <div>
        <ArrowBackIosIcon
          onClick={handleGoBack}
          style={{
            cursor: "pointer",
          }}
        />
      </div>
      <div
        style={{
          height: "50px",
          width: "50px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          borderRadius: "50%",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          position: "relative",
          flexDirection: "column",
          fontSize: "14px",
          paddingLeft: "15px",
        }}
      >
        <div style={{ paddingBottom: "5px" }}>Nikhil Singh | By Bajaj</div>
        <div style={{ flexGrow: 1 }}>Appointment scheduled at 10:00 am</div>
      </div>
    </>
  );
};
