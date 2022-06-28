import { DarkMode, Menu } from "@mui/icons-material";
import {
  AppBar as MuiAppBar,
  Button,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useContext } from "react";
import { ColorModeContext } from "../../contexts/ColorModeContext";
import { useResponsiveMaxWidth } from "../../hooks/useResponsiveMaxWitdth";
import { useIsMobile } from "../../utility/media_query_helper";
import { NAV_LINKS } from "./config";

type AppBarProps = {
  onClickMenu: () => void;
};

const AppBar = (props: AppBarProps) => {
  const isMobile = useIsMobile();
  const responsiveMaxWidth = useResponsiveMaxWidth();

  const toggleMode = useContext(ColorModeContext);

  const navLinks = Object.keys(NAV_LINKS).map((key, index) => (
    <Button key={key}>
      <Link href={NAV_LINKS[key].path}>{NAV_LINKS[key].label}</Link>
    </Button>
  ));

  return (
    <MuiAppBar position="sticky">
      <Toolbar
        sx={{
          maxWidth: responsiveMaxWidth,
          mx: isMobile ? null : "auto",
          width: "100%",
          px: isMobile ? "32px" : 0,
        }}
      >
        {isMobile && (
          <IconButton sx={{ ml: "-10px" }} onClick={props.onClickMenu}>
            <Menu />
          </IconButton>
        )}
        {!isMobile && (
          <div className="w-full flex gap-6 items-center">
            <Typography variant="h6">
              <Link href="/">Home</Link>
            </Typography>

            <div className="flex-1" />

            {navLinks}

            <Tooltip title="Toggle Dark Mode">
              <IconButton onClick={toggleMode.toggleColorMode}>
                <DarkMode />
              </IconButton>
            </Tooltip>
          </div>
        )}
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
