import { useMediaQuery, useTheme } from "@mui/material";
import React, { ReactNode } from "react";
import AppBar from "./AppBar";
import CustomFooter from "./Footer";

type LayoutProps = {
  children?: ReactNode | undefined;
};

const Layout = (props: LayoutProps) => {
  const theme = useTheme();

  const isDesktop = useMediaQuery(theme.breakpoints.up(834));
  const isTablet = useMediaQuery(theme.breakpoints.between(425, 834));
  const isMobile = useMediaQuery(theme.breakpoints.between(0, 425));

  return (
    <>
      <AppBar />
      <main>{props.children}</main>
      <CustomFooter />
    </>
  );
};

export default Layout;
