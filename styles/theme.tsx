import { extendTheme, type StyleFunctionProps } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  colors: {
    brand: {
      100: "#f7fafc",
      900: "#1a202c",
    },
  },
  semanticTokens: {
    colors: {
      text: {
        default: "#000000", // Black text for light mode
        _dark: "#ffffff", // White text for dark mode
      },
      background: {
        default: "#f7fafc",
        _dark: "#1a202c",
      },
      primary: {
        default: "#3182ce",
        _dark: "#90cdf4",
      },
    },
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: props.colorMode === "dark" ? "background._dark" : "background.default",
        color: props.colorMode === "dark" ? "text._dark" : "text.default",
      },
    }),
  },
});

export default theme;
