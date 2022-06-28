import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import ROUTES from "../../config/routes";
import DrawerItem from "../../interfaces/drawer_item";

export const NAV_LINKS: { [key: string]: DrawerItem } = {
  about: { path: ROUTES.about, icon: <InfoOutlinedIcon />, label: "About" },
  contact: {
    path: ROUTES.contact,
    icon: <MailOutlinedIcon />,
    label: "Contact",
  },
  blogs: { path: ROUTES.blogs, icon: <BookOutlinedIcon />, label: "Blogs" },
};
