import {
  Drawer as MuiDrawer,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Stack,
} from "@mui/material";
import NavLink from "../NavLink";
import { NAV_LINKS } from "./config";

type DrawerProps = {
  isOpen: boolean;
  toggleDrawer: () => void;
};

const Drawer = (props: DrawerProps) => {
  const navLinks = Object.keys(NAV_LINKS).map((key, index) => (
    <NavLink key={key} href={NAV_LINKS[key].path}>
      {({ isActive }) => (
        <ListItemButton selected={isActive}>
          <ListItemAvatar>{NAV_LINKS[key].icon}</ListItemAvatar>
          <ListItemText>{NAV_LINKS[key].label}</ListItemText>
        </ListItemButton>
      )}
    </NavLink>
  ));

  return (
    <MuiDrawer open={props.isOpen} onClose={props.toggleDrawer}>
      <Stack>{navLinks}</Stack>
    </MuiDrawer>
  );
};

export default Drawer;
