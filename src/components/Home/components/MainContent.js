import { useState, useEffect } from "react";
import { AppointmentCard } from "./AppointmentCard";

export const MainContent = ({ selectedDate }) => {
  const [appointmentList, setAppointmentList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/appointments")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) =>
        setAppointmentList([
          {
            patientName: "John Doe",
            appointmentSource: "Bajaj",
            gender: "M",
            age: "24",
            contactNumber: "9792977807",
            appointmentTime: "10:30 am - 11:30 am",
            appointmentId: "9792977807",
          },
          {
            patientName: "John Doe",
            appointmentSource: "Bajaj",
            gender: "M",
            age: "24",
            contactNumber: "9792977807",
            appointmentTime: "10:30 am - 11:30 am",
            appointmentId: "9792977807",
          },
        ])
      );
  }, [selectedDate]);

  return (
    <div
      style={{
        padding: "10px 15px",
      }}
    >
      <div
        style={{
          paddingLeft: "15px",
          fontSize: "18px",
          marginBottom: "20px",
          marginTop: "20px",
          fontWeight: "bold",
        }}
      >
        {new Date(selectedDate).getDate()}{" "}
        {selectedDate.toLocaleString("default", { month: "long" })}
      </div>
      {appointmentList.map((appointment) => {
        return <AppointmentCard appointment={appointment} />;
      })}
    </div>
  );
};
