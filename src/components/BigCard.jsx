import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const bigCard = (
  <React.Fragment>
    <CardContent className={"bigCard"}>
      <h6 className={"rev"}>Revenue Generated</h6>
      <h4 className={"revNum"}>$271,434.63</h4>
    </CardContent>
  </React.Fragment>
);

export default function BigOutlinedCard() {
  return (
    <>
      <Box sx={{ minWidth: 275 }} className="bigBox">
        <Card variant="outlined">{bigCard}</Card>
      </Box>
    </>
  );
}