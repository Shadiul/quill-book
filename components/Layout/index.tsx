import { useMediaQuery, useTheme } from "@mui/material";
import { ReactNode } from "react";
import { useResponsiveMaxWidth } from "../../hooks/useResponsiveMaxWitdth";
import { useIsMobile } from "../../utility/media_query_helper";
import AppBar from "./AppBar";
import CustomFooter from "./Footer";

type LayoutProps = {
  children?: ReactNode | undefined;
};

const Layout = (props: LayoutProps) => {
  const theme = useTheme();

  const isDesktop = useMediaQuery(theme.breakpoints.up(834));
  const isTablet = useMediaQuery(theme.breakpoints.between(425, 834));
  const isMobile = useIsMobile();

  const responsiveMaxWidth = useResponsiveMaxWidth();

  return (
    <div className="min-h-screen flex flex-col">
      <AppBar />
      <main className="flex-1">{props.children}</main>
      <CustomFooter />
    </div>
  );
};

export default Layout;
