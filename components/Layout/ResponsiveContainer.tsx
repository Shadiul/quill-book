import { ReactNode } from "react";
import { useResponsiveMaxWidth } from "../../hooks/useResponsiveMaxWitdth";
import { useIsMobile } from "../../utility/media_query_helper";

type ResponsiveContainerProps = {
  children?: ReactNode | undefined;
};

const ResponsiveContainer = (props: ResponsiveContainerProps) => {
  const isMobile = useIsMobile();
  const responsiveMaxWidth = useResponsiveMaxWidth();
  return (
    <div
      style={{
        maxWidth: responsiveMaxWidth,
        width: "100%",
        margin: "auto",
        padding: isMobile ? "0px 32px" : undefined,
      }}
    >
      {props.children}
    </div>
  );
};

export default ResponsiveContainer;
