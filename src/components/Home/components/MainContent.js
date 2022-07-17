import { useState, useEffect } from "react";
import { AppointmentCard } from "./AppointmentCard";

export const MainContent = ({ selectedDate }) => {
  const [appointmentList, setAppointmentList] = useState([]);

  useEffect(() => {
    fetch(
      `https://uhi-hack.herokuapp.com/appointment/list?date=${new Date(
        selectedDate
      ).getFullYear()}-${new Date(selectedDate).getMonth() + 1}-${new Date(
        selectedDate
      ).getDate()}`
    )
      .then((res) => res.json())
      .then((data) => {
        setAppointmentList(formatAppointmentList(data));
      })
      .catch((err) => console.log(err));
  }, [selectedDate]);

  const formatAppointmentList = (data) => {
    return data.map((appointment) => {
      if (appointment.patient) {
        return {
          patientName:
            appointment.patient?.firstName +
            " " +
            appointment.patient?.lastName,
          appointmentSource: appointment.appointmentSource,
          gender: appointment.patient?.gender,
          age: appointment.patient?.age,
          contactNumber: appointment.patient?.phoneNumber,
          appointmentTime: "10:30 am - 11:30 am",
          appointmentId: appointment.appointmentId,
          emrId: appointment.emrId,
        };
      }
    });
  };

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
      {appointmentList.length > 0 ? (
        appointmentList.map((appointment) => {
          return <AppointmentCard appointment={appointment} />;
        })
      ) : (
        <div
          style={{
            width: "100%",
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          No appointments for today
        </div>
      )}
    </div>
  );
};
