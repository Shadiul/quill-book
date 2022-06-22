import { useTheme } from "@mui/material";
import { useIsMobile, useIsTablet } from "../utility/media_query_helper";

export const MAX_WIDTH = {
  tablet: 786,
  desktop: 1128,
};

export const useResponsiveMaxWidth = () => {
  const theme = useTheme();
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  if (isMobile) return undefined;
  if (isTablet) return MAX_WIDTH.tablet;

  return MAX_WIDTH.desktop;
};
