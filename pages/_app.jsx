import { useEffect } from 'react';
import { useRouter } from 'next/router';
import amplitude from 'amplitude-js';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRefresh = () => {

      amplitude.getInstance().logEvent('Page Refresh');
    };

    window.addEventListener('beforeunload', handleRefresh);

    return () => {
      window.removeEventListener('beforeunload', handleRefresh);
    };
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
