import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import _default from "@emotion/styled";
import SvgIconsSize from "./Icons";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

export default function AnchorTemporaryDrawer({
  state,
  setState,
  toggleDrawer,
}) {
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      id={"sidebar"}
    >
      <List id={"list"}>
        {["Dashboard", "FAQ"].map((text, index) => (
          <ListItem key={text} disablePadding id="listeditems">
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <SvgIconsSize /> : <HelpOutlineIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <div>
        {["left"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              id={"drawer"}
            >
              <h3 className="rest">The King's</h3>
              <h3 className="restb">Restaurant</h3>
              <p>Dashboard Owner</p>
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    </>
  );
}