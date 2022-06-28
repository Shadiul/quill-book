import { Box, Stack } from "@mui/material";
import Head from "next/head";
import { ReactNode, useEffect, useState } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { useIsMobile } from "../../utility/media_query_helper";
import AppBar from "./AppBar";
import Drawer from "./Drawer";
import CustomFooter from "./Footer";

type LayoutProps = {
  title?: string | undefined;
  description?: string | undefined;
  children?: ReactNode | undefined;
};

const Layout = (props: LayoutProps) => {
  const isMobile = useIsMobile();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => setIsDrawerOpen((isOpen) => !isOpen);

  useEffect(() => {
    if (!isMobile && isDrawerOpen) {
      setIsDrawerOpen(false);
    }
  }, [isDrawerOpen, isMobile]);

  return (
    <>
      <Head>
        <title>{props.title ?? "QuillBook"}</title>
        <meta name="description" content={props.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Drawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />

      <Stack height="100vh">
        <AppBar onClickMenu={toggleDrawer} />

        <Stack flex={1} component="main">
          <Scrollbars
            universal
            renderThumbVertical={() => (
              <Box bgcolor="primary.dark" borderRadius={8} />
            )}
          >
            <Box minHeight="100%">{props.children}</Box>
            <CustomFooter />
          </Scrollbars>
        </Stack>
      </Stack>
    </>
  );
};

export default Layout;
