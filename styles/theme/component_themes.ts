import { createTheme, Theme } from "@mui/material";

export const COMPONENT_THEME: Theme = createTheme({
  components: {
    MuiAppBar: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
        }),
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        contained: {},
        text: ({ theme }) => ({
          color:
            theme.palette.mode === "dark"
              ? theme.palette.text.primary
              : theme.palette.primary.main,
        }),
      },
    },
  },
});
