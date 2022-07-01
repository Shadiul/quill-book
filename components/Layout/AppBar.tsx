import { DarkMode, Menu } from "@mui/icons-material";
import {
  AppBar as MuiAppBar,
  Button,
  IconButton,
  MenuItem,
  Select,
  Toolbar,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
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
  const theme = useTheme();
  const isMobile = useIsMobile();
  const responsiveMaxWidth = useResponsiveMaxWidth();

  const { toggleDarkMode, changeColor } = useColorMode();

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
        {!isMobile && (
          <div className="w-full flex gap-6 items-center">
            <Typography variant="h6">
              <Link href="/">Home</Link>
            </Typography>

            <div className="flex-1" />

            {navLinks}

            <Tooltip title="Toggle Dark Mode">
              <IconButton onClick={toggleDarkMode}>
                <DarkMode />
              </IconButton>
            </Tooltip>
            <Tooltip title="Theme Colors">
              <Select
                variant="standard"
                disableUnderline
                defaultValue={theme.palette.primary.main}
                IconComponent={"div"}
                inputProps={{ sx: { padding: "0 !important" } }}
                sx={{ borderRadius: 999 }}
                renderValue={(value) => (
                  <Box
                    height={24}
                    width={24}
                    borderRadius={24}
                    sx={{ bgcolor: value }}
                  />
                )}
                onChange={(event) => changeColor(event.target.value)}
              >
                {THEME_COLORS.map((color, index) => (
                  <MenuItem value={color} key={index}>
                    <Box
                      height={24}
                      width={24}
                      borderRadius={24}
                      sx={{ bgcolor: color }}
                    />
                  </MenuItem>
                ))}
              </Select>
            </Tooltip>
          </div>
        )}
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
