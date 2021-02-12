import { ThemeProvider } from 'styled-components';
import theme from '../src/theme';
import { GlobalStyle } from '../src/theme/GlobalStyle';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>Instalura - Projeto Base</title>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
    </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
