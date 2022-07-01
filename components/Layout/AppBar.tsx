import { DarkMode, Menu } from "@mui/icons-material";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import {
  AppBar as MuiAppBar,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import { useState } from "react";
import { useColorMode } from "../../contexts/ColorModeContext";
import { useResponsiveMaxWidth } from "../../hooks/useResponsiveMaxWitdth";
import THEME_COLORS from "../../styles/theme/theme_colors";
import { useIsMobile } from "../../utility/media_query_helper";
import NavLink from "../NavLink";
import { NAV_LINKS } from "./config";

type AppBarProps = {
  onClickMenu: () => void;
};

const AppBar = (props: AppBarProps) => {
  const isMobile = useIsMobile();
  const responsiveMaxWidth = useResponsiveMaxWidth();

  const { toggleDarkMode, changeColor } = useColorMode();

  const [showColorPicker, setShowColorPicker] = useState(false);
  const onCloseThemePicker = () => {
    setShowColorPicker(false);
  };

  const onChangeColor = (color: string) => {
    changeColor(color);
    setShowColorPicker(false);
  };

  const navLinks = Object.keys(NAV_LINKS).map((key, index) =>
    NAV_LINKS[key].path === "/" ? null : (
      <NavLink key={key} href={NAV_LINKS[key].path} exact>
        {({ isActive }) => (
          <Button key={key} variant={isActive ? "contained" : "text"}>
            {NAV_LINKS[key].label}
          </Button>
        )}
      </NavLink>
    )
  );

  return (
    <>
      <Dialog open={showColorPicker} onClose={onCloseThemePicker}>
        <DialogTitle align="center">
          <ColorLensOutlinedIcon color="secondary" />
          <p>Pick your desired color</p>
        </DialogTitle>
        <DialogContent>
          <div className="grid grid-cols-5 gap-2">
            {THEME_COLORS.map((color, index) => (
              <IconButton key={index} onClick={() => onChangeColor(color)}>
                <Box
                  height={24}
                  width={24}
                  borderRadius={24}
                  sx={{ bgcolor: color }}
                />
              </IconButton>
            ))}
          </div>
        </DialogContent>
      </Dialog>
      <MuiAppBar position="static">
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

          <Stack direction="row" width="100%" gap={3} alignItems="center">
            <NavLink href="/" exact>
              {({ isActive }) => (
                <Typography
                  variant="h6"
                  color={isActive ? "primary" : undefined}
                >
                  <Link href="/">Home</Link>
                </Typography>
              )}
            </NavLink>

            <Box flex={1} />

            {!isMobile && navLinks}

            <Tooltip title="Toggle Dark Mode">
              <IconButton onClick={toggleDarkMode}>
                <DarkMode />
              </IconButton>
            </Tooltip>

            <Tooltip title="Theme Colors">
              <IconButton onClick={() => setShowColorPicker(true)}>
                <Box
                  height={24}
                  width={24}
                  borderRadius={24}
                  sx={{ bgcolor: "primary.main" }}
                />
              </IconButton>
            </Tooltip>
          </Stack>
        </Toolbar>
      </MuiAppBar>
    </>
  );
};

export default AppBar;
