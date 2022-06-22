import { useMediaQuery, useTheme } from "@mui/material";

export const useIsTablet = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.between(834, 1200));
  return isTablet;
};
export const useIsMobile = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("tablet"));
  return isMobile;
};
