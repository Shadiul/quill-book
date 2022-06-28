import { createTheme, Theme } from "@mui/material";

export const COMPONENT_THEME: Theme = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: { root: { borderRadius: 0 } },
    },
    MuiAppBar: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
        }),
      },
    },
    MuiDrawer: { styleOverrides: { paper: { width: 300 } } },
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
