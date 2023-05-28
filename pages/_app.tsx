import React from 'react';
import dynamic from 'next/dynamic';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from '@/redux/store'; // Import Redux Store và Persistor từ file store/index.ts
import Loading from '@/components/Loading/Loading';
import routes from '@/routes';
import AdminLayout from '@/layouts/Admin';
import AuthLayout from '@/layouts/Auth';
import '../public/styles.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const currentRoute = routes.find((route) => route.path === router.pathname);
  const Layout = currentRoute?.layout === '/admin' ? AdminLayout : AuthLayout;

  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  );
};

export default dynamic(() => Promise.resolve(MyApp), {
  ssr: false,
});
