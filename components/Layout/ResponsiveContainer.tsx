import { Box } from "@mui/material";
import { ReactNode } from "react";
import { useResponsiveMaxWidth } from "../../hooks/useResponsiveMaxWitdth";
import { useIsMobile } from "../../utility/media_query_helper";

type ResponsiveContainerProps = {
  paddingY?: number;
  children?: ReactNode;
};

const ResponsiveContainer = (props: ResponsiveContainerProps) => {
  const isMobile = useIsMobile();
  const responsiveMaxWidth = useResponsiveMaxWidth();
  return (
    <Box
      maxWidth={responsiveMaxWidth}
      width="100%"
      margin="auto"
      padding={isMobile ? "0px 32px" : undefined}
      paddingY={props.paddingY}
    >
      {props.children}
    </Box>
  );
};

export default ResponsiveContainer;
