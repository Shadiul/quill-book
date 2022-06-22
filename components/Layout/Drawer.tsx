import { Drawer as MuiDrawer } from "@mui/material";

type DrawerProps = {
  isOpen: boolean;
  toggleDrawer: () => void;
};

const Drawer = (props: DrawerProps) => {
  return (
    <MuiDrawer open={props.isOpen} onClose={props.toggleDrawer}>
      Drawer
    </MuiDrawer>
  );
};

export default Drawer;
