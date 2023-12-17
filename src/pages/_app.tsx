import { type AppType } from 'next/dist/shared/lib/utils';

import { ContextProvider } from '@/AppContext';
import '@/styles/globals.css';

const MyApp: AppType = ({ Component, pageProps }) => {
  return (<ContextProvider>
    <Component {...pageProps} />
  </ContextProvider>);
};

export default MyApp;
