import { createTheme, PaletteOptions } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import LOCAL_STORAGE_KEYS from "../constants/local_storage_keys";
import { BREAKPOINTS } from "../styles/theme/breakpoints";
import { COMPONENT_THEME } from "../styles/theme/component_themes";
import { materialDynamicColors } from "../utility/material_dynamic_colors";

interface Colors {
  primary: any;
  onPrimary: any;
  primaryContainer: any;
  onPrimaryContainer: any;
  secondary: any;
  onSecondary: any;
  secondaryContainer: any;
  onSecondaryContainer: any;
  tertiary: any;
  onTertiary: any;
  tertiaryContainer: any;
  onTertiaryContainer: any;
  error: any;
  errorContainer: any;
  onError: any;
  onErrorContainer: any;
  background: any;
  onBackground: any;
  surface: any;
  onSurface: any;
  surfaceVariant: any;
  onSurfaceVariant: any;
  outline: any;
  inverseOnSurface: any;
  inverseSurface: any;
  inversePrimary: any;
  shadow: any;
}

interface ThemeColors {
  light: Colors;
  dark: Colors;
}

const getPalette = (mode: "light" | "dark", colors: ThemeColors) => {
  if (mode === "light") {
    const palette: PaletteOptions = {
      mode: "light",
      primary: {
        main: colors.light.primary,
        contrastText: colors.light.onPrimary,
      },

      primaryContainer: {
        main: colors.light.primaryContainer,
        contrastText: colors.light.onPrimaryContainer,
      },
      secondary: {
        main: colors.light.secondary,
        contrastText: colors.light.onSecondary,
      },
      tertiary: {
        main: colors.light.tertiary,
        contrastText: colors.light.onTertiary,
      },
      background: {
        default: colors.light.background,
        paper: colors.light.surface,
      },
      text: { primary: "#1B1B1F", secondary: "#1B1B1F" },
    };

    return palette;
  } else {
    const palette: PaletteOptions = {
      mode: "dark",
      primary: {
        main: colors.dark.primary,
        contrastText: colors.dark.onPrimary,
      },

      primaryContainer: {
        main: colors.dark.primaryContainer,
        contrastText: colors.dark.onPrimaryContainer,
      },
      secondary: {
        main: colors.dark.secondary,
        contrastText: colors.dark.onSecondary,
      },
      tertiary: {
        main: colors.dark.tertiary,
        contrastText: colors.dark.onTertiary,
      },
      background: {
        default: colors.dark.background,
        paper: colors.dark.surface,
      },
      text: { primary: "#E4E2E6", secondary: "#E4E2E6" },
    };
    return palette;
  }
};

type ThemeModeType = "light" | "dark";

const useMaterialColor = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [themeColor, setThemeColor] = useState("#2196F3");
  const [paletteColors, setPaletteColors] = useState<ThemeColors | undefined>(
    undefined
  );
  const [mode, setMode] = useState<ThemeModeType>("light");

  const colorMode = useMemo(
    () => ({
      changeThemeColor: (color: string) => {
        setThemeColor(color);
        localStorage.setItem(LOCAL_STORAGE_KEYS.themeColor, color);
      },
      toggleDarkMode: () => {
        setMode((prevMode) => {
          const newMode = prevMode === "light" ? "dark" : "light";
          localStorage.setItem(LOCAL_STORAGE_KEYS.themeMode, newMode);
          return newMode;
        });
      },
    }),
    []
  );

  useEffect(() => {
    const getColors = async () => {
      const _colors: ThemeColors | undefined = await materialDynamicColors(
        themeColor
      );
      if (_colors) setPaletteColors(_colors);
    };

    setTimeout(() => {
      getColors().catch(console.error);
      setIsLoading(false);
    }, 0);
  }, [themeColor]);

  useEffect(() => {
    const cachedThemeColor = localStorage.getItem(
      LOCAL_STORAGE_KEYS.themeColor
    );
    if (cachedThemeColor) setThemeColor(cachedThemeColor);

    const cachedThemeMode = localStorage.getItem(LOCAL_STORAGE_KEYS.themeMode);
    if (
      cachedThemeMode &&
      (cachedThemeMode === "dark" || cachedThemeMode === "light")
    )
      setMode(cachedThemeMode);
  }, []);

  const theme = useMemo(
    () =>
      createTheme({
        palette: paletteColors
          ? getPalette(mode, paletteColors)
          : { mode: mode },
        components: COMPONENT_THEME.components,
        breakpoints: BREAKPOINTS.breakpoints,
        shape: { borderRadius: 999 },
      }),
    [paletteColors, mode]
  );

  return { isLoading, theme, colorMode };
};

export default useMaterialColor;
