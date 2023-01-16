import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { MantineProvider } from "@mantine/core";
import { ShoppingCartProvider } from '../context/ShoppingCartContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ShoppingCartProvider>
      <MantineProvider >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MantineProvider>
    </ShoppingCartProvider>
  )
}
