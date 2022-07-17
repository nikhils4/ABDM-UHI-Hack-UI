import { useState } from "react";
import Grid from "@mui/material/Grid";
import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";

export const Home = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <Grid container>
      <Grid item md={2}></Grid>
      <Grid item xs={12} md={8}>
        <Header setSelectedDate={setSelectedDate} selectedDate={selectedDate} />
        <MainContent selectedDate={selectedDate} />
      </Grid>
      <Grid item md={2}></Grid>
    </Grid>
  );
};
