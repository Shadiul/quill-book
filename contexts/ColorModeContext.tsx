import { CssBaseline, responsiveFontSizes, ThemeProvider } from "@mui/material";
import { createContext, ReactNode, useContext } from "react";
import useMaterialColor from "../hooks/useMaterialColor";

export function useColorMode() {
  return useContext(ColorModeContext);
}

interface ColorModeInterface {
  changeColor: (color: string) => void;
  toggleDarkMode: () => void;
}

export const ColorModeContext = createContext({} as ColorModeInterface);

type Props = {
  children?: ReactNode | ((props: { isLoading: boolean }) => ReactNode);
};

const ColorModeContextProvider = ({ children }: Props) => {
  const { isLoading, theme, changeThemeColor, colorMode } =
    useMaterialColor("#2196F3");

  return (
    <ColorModeContext.Provider
      value={{
        changeColor: changeThemeColor,
        toggleDarkMode: colorMode.toggleColorMode,
      }}
    >
      <ThemeProvider theme={responsiveFontSizes(theme)}>
        <CssBaseline enableColorScheme />
        {typeof children === "function" ? children({ isLoading }) : children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ColorModeContextProvider;
