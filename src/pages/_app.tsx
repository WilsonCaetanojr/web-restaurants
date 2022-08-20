import React from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { QueryClientProvider } from "react-query";

import { GlobalStyle, theme } from "../libs/styledComponents";
import { client } from "../libs/reactQuery";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <QueryClientProvider client={client}>
        <React.Suspense fallback="Loading...">
          <Component {...pageProps} />
        </React.Suspense>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
