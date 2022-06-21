import { Paper, useMediaQuery, useTheme } from "@mui/material";
import { ReactNode } from "react";
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
    <Paper
      sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <AppBar />
      <main className="flex-1">{props.children}</main>
      <CustomFooter />
    </Paper>
  );
};

export default Layout;
