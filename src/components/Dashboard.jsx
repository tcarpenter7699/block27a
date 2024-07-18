import { Typography } from "@mui/material";

export default function Dashboard() {
  return (
    <>
      <Typography variant="h2" component="div" sx={{ flexGrow: 1 }} id={"typo"}>
        DASHBOARD
      </Typography>
      <Typography variant="p" component="div" sx={{ flexGrow: 1 }} id={"typo2"}>
        Welcome to your dashboard
      </Typography>
    </>
  );
}