import { AppProps } from 'next/app';
import Navbar from "../components/navbar";
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import theme from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
