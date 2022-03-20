import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import CloudIcon from "@mui/icons-material/Cloud";
//APP Bar developed using :
//https://mui.com/components/app-bar/

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#ebb51c" }}>
        <Toolbar
          sx={{ display: "flex", flexDirection: "row", textAlign: "center" }}
        >
          <WbSunnyIcon />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Weather application
          </Typography>
          <CloudIcon />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
