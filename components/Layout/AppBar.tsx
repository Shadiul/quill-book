import React from "react";
import { AppBar as MuiAppBar, Toolbar } from "@mui/material";

type AppBarProps = {};

const AppBar = (props: AppBarProps) => {
  return (
    <MuiAppBar position="sticky">
      <Toolbar>AppBar</Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
