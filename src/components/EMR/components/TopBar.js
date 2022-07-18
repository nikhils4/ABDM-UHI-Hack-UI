import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export const TopBar = ({
  screenFlow,
  setScreenState,
  screenState,
  name,
  apptTime,
  apptSource,
}) => {
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
            "url(https://img.freepik.com/premium-vector/user-icon-human-person-symbol-social-profile-icon-avatar-login-sign-web-user-symbol-neumorphic-ui-ux-white-user-interface-web-button-neumorphism-vector-eps-10_399089-2757.jpg)",
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
        <div style={{ paddingBottom: "5px" }}>
          {name} | By {apptSource}
        </div>
        <div style={{ flexGrow: 1 }}>
          Appointment scheduled at {apptTime?.split("-")[0]}
        </div>
      </div>
    </>
  );
};
