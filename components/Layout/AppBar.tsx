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
import { useRouter } from "next/router";
import { useContext } from "react";
import { ColorModeContext } from "../../contexts/ColorModeContext";
import { useResponsiveMaxWidth } from "../../hooks/useResponsiveMaxWitdth";
import { useIsMobile, useIsTablet } from "../../utility/media_query_helper";

type AppBarProps = {};

const AppBar = (props: AppBarProps) => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const responsiveMaxWidth = useResponsiveMaxWidth();

  const toggleMode = useContext(ColorModeContext);

  const { pathname } = useRouter();

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
          <IconButton sx={{ ml: "-10px" }}>
            <Menu />
          </IconButton>
        )}
        {!isMobile && (
          <div className="w-full flex gap-6 items-center">
            <Typography variant="h6">
              <Link href="/">Home</Link>
            </Typography>

            <div className="flex-1" />

            <Button>
              <Link href="/about">About</Link>
            </Button>
            <Button>
              <Link href="#">Contact</Link>
            </Button>
            <Button>
              <Link href="#">Blog</Link>
            </Button>

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
