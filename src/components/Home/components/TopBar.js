export const TopBar = ({ selectedDate }) => {
  return (
    <>
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
      <div style={{ fontSize: "22px", fontWeight: "500", paddingLeft: "20px" }}>
        {selectedDate.toLocaleString("default", { month: "long" })}
      </div>
      <div
        style={{
          textAlign: "right",
          flexGrow: "1",
        }}
      >
        Icon
      </div>
    </>
  );
};
