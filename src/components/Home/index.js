import Grid from "@mui/material/Grid";

export const Home = () => {
  return (
    <Grid container>
      <Grid item xs={4}></Grid>
      <Grid item xs={4}>
        <div>This is Home page powered by Material UI</div>
      </Grid>
      <Grid item xs={4}></Grid>
    </Grid>
  );
};
