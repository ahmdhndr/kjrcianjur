import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import '@/styles/globals.css';
import 'tailwindcss/tailwind.css';
import Layout from '@/components/Layout';
import Loading from '@/components/Loading';
import { AuthProvider } from '@/context/AuthContext';
import DashboardSkeleton from '@/components/Skeleton/DashboardSkeleton';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => {
      url !== router.pathname ? setLoading(true) : setLoading(false);
    };
    const handleComplete = (url) => setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
  }, [router]);

  return (
    <>
      <Loading loading={loading} />
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </>
  );
}

export default MyApp;
