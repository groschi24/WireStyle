import '@wirecore/wirestyle/lib/cjs/wirestyle.css';
import '../styles/globals.css';

import type { AppProps } from 'next/app';
import {
  AsideMenu,
  Layout,
  MenuType,
  NavBar,
  ThemeProvider,
  Typographie,
} from '@wirecore/wirestyle';
import Link from 'next/link';
import { useRouter } from 'next/router';

const menu: MenuType = [
  'Dashboard',
  [
    {
      to: '/',
      component: Link,
      icon: <div>0</div>,
      label: 'Dashboard',
    },
  ],
];

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <ThemeProvider>
      <NavBar
        logo={
          <div className='flex gap-2 fill-black dark:fill-white'>
            <Typographie size='2xl' weight='black'>
              Example Dashboard
            </Typographie>
          </div>
        }
      />
      <AsideMenu
        pathname={router.pathname}
        menu={menu}
        bottomInformation='WireStyle v0.0.1'
      />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
