import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import ROUTES from "../../config/routes";
import DrawerItem from "../../interfaces/drawer_item";

export const NAV_LINKS: { [key: string]: DrawerItem } = {
  home: { path: "/", icon: <HomeOutlinedIcon />, label: "Home" },
  about: { path: ROUTES.about, icon: <InfoOutlinedIcon />, label: "About" },
  contact: {
    path: ROUTES.contact,
    icon: <MailOutlinedIcon />,
    label: "Contact",
  },
  blogs: { path: ROUTES.blogs, icon: <BookOutlinedIcon />, label: "Blogs" },
};
