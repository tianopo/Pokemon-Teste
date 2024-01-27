import { AppProps } from 'next/app';
import GlobalStyles from '../styles/GlobalStyles';
import { Header } from '../app/components/Layout/Header/Header';
import { Footer } from '../app/components/Layout/Footer/Footer';

export default function App({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any;
  return (
    <>
      <GlobalStyles />
      <Header />
      <AnyComponent {...pageProps} />
      <Footer />
    </>
  );
}
