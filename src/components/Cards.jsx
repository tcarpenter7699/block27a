import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";

const card1 = (
  <React.Fragment>
    <CardContent className="card">
      <PointOfSaleIcon className="icons" />
      <Typography variant="h5" className={"num"}>
        837
      </Typography>
      <Typography className={"numInfo"}>Sales Obtained</Typography>
      <Typography className={"percent"}>+21%</Typography>
    </CardContent>
  </React.Fragment>
);

const card2 = (
  <React.Fragment>
    <CardContent className="card">
      <PersonAddIcon className="icons" />
      <Typography variant="h5" className={"num"}>
        86,435
      </Typography>
      <Typography className={"numInfo"}>New Clients</Typography>
      <Typography className={"percent"}>+5%</Typography>
    </CardContent>
  </React.Fragment>
);

const card3 = (
  <React.Fragment>
    <CardContent className="card">
      <TrafficIcon className={"icons"} />
      <Typography variant="h5" className={"num"}>
        23,784,133
      </Typography>
      <Typography className={"numInfo"}>Traffic Received</Typography>
      <Typography className={"percent"}>+43%</Typography>
    </CardContent>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <>
      <Box sx={{ minWidth: 275 }} className="box">
        <Card variant="outlined">{card1}</Card>
      </Box>
      <Box sx={{ minWidth: 275 }} className="box">
        <Card variant="outlined">{card2}</Card>
      </Box>
      <Box sx={{ minWidth: 275 }} className="box">
        <Card variant="outlined">{card3}</Card>
      </Box>
    </>
  );
}