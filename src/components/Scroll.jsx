import * as React from "react";
import Box from "@mui/material/Box";
import { CardContent, List, ListItem, ListItemText } from "@mui/material";

export default function ScrollMenu({ mockTransactions }) {
  return (
    <Box id={"scrollBox"}>
      <CardContent>
        <h4 id={"recTra"}>Recent Transactions:</h4>
      </CardContent>
      <List id={"listInfo"}>
        {mockTransactions.map((i) => (
          <ListItem key={i.key}>
            <ListItemText primary={i.txId} className={"listScroll"} />
            <ListItemText
              primary={i.user}
              sx={{ color: "mediumspringgreen" }}
              className={"listScroll"}
            />
            <ListItemText primary={i.date} className={"listScroll"} />
            <ListItemText
              primary={i.cost}
              id={"cost"}
              className={"listScroll"}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}