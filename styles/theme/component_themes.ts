import { createTheme, Theme } from "@mui/material";

export const COMPONENT_THEME: Theme = createTheme({
  components: {
    MuiPaper: {
      defaultProps: { elevation: 0 },
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

    MuiButtonBase: { styleOverrides: { root: { borderRadius: 4 } } },

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

    MuiListItemButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          "&.Mui-selected": {
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.primary.contrastText,
            ":hover": { backgroundColor: theme.palette.primary.dark },
          },
        }),
      },
    },

    MuiCard: {
      defaultProps: { variant: "outlined" },
      styleOverrides: { root: { borderRadius: 12 } },
    },

    MuiCssBaseline: { styleOverrides: {} },
  },
});
