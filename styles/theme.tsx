// styles/theme.ts
import { extendTheme } from "@chakra-ui/react";

// Define your colors for light and dark themes
const colors = {
  light: {
    primaryText: "#333333", // Dark Gray
    background: "#FAFAFA", // Off-White
    accent: {
      blue: "#007BFF",
      coral: "#FF6F61",
      emerald: "#2ECC71",
    },
    secondaryText: "#666666", // Medium Gray
    border: "#E0E0E0", // Light Gray
  },
  dark: {
    primaryText: "#FFFFFF", // White
    background: "#000000", // Dark Gray
    accent: {
      neonBlue: "#FF6500",
      neonGreen: "#00FF6C",
      electricPink: "#FF007F",
    },
    secondaryText: "#AAAAAA", // Gray
    border: "#333333", // Medium Gray
  },
};

// Create the theme
const theme = extendTheme({
  styles: {
    global: (props: { colorMode: string }) => ({
      body: {
        bg: props.colorMode === "dark" ? colors.dark.background : colors.light.background,
        color: props.colorMode === "dark" ? colors.dark.primaryText : colors.light.primaryText,
      },
    }),
  },
  colors: {
    light: colors.light,
    dark: colors.dark,
    // You can also define default colors here if needed
  },
});

export default theme;
