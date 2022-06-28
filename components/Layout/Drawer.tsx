import {
  Container,
  Drawer as MuiDrawer,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
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
      <Container sx={{ my: 4 }}>
        <Typography variant="h4">QuillBook</Typography>
      </Container>
      <Stack paddingX={2} gap={1}>
        {navLinks}
      </Stack>
    </MuiDrawer>
  );
};

export default Drawer;
