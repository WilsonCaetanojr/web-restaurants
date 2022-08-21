import React from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { QueryClientProvider } from "react-query";

import { GlobalStyle, theme } from "../libs/styledComponents";
import { client } from "../libs/reactQuery";
import { GlobalProvider } from "../contexts/GlobalContex";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GlobalProvider>
        <QueryClientProvider client={client}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </GlobalProvider>
    </ThemeProvider>
  );
}

export default App;
