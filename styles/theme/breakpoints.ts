import { createTheme } from "@mui/material";
declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true; // adds the `mobile` breakpoint
    tablet: true;
    desktop: true;
  }
}
export const BREAKPOINTS = createTheme({
  breakpoints: {
    values: {
      mobile: 375,
      tablet: 834,
      desktop: 1200,
    },
  },
});
