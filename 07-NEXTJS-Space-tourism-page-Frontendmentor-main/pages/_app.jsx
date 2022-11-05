import Head from 'next/head';
import { MenuWrapper } from '../context/useMenuContext';

import '../styles/globals.scss';
import '../styles/normalize.scss';

function MyApp({ Component, pageProps }) {
  return (
    <MenuWrapper>
      <Head>
        <title>Space Tourism</title>
      </Head>
      <Component {...pageProps} />
    </MenuWrapper>
  );
}

export default MyApp;
