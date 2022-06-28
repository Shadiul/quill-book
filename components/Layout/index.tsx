import Head from "next/head";
import { ReactNode, useEffect, useState } from "react";
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

      <div className="min-h-screen flex flex-col">
        <Drawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
        <AppBar onClickMenu={toggleDrawer} />
        <main className="flex-1">{props.children}</main>
        <CustomFooter />
      </div>
    </>
  );
};

export default Layout;
