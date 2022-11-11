import Layout from '../components/Layout'
import '../styles/globals.sass'
import type { AppProps } from 'next/app'
import { FC } from 'react'
const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return <Layout>
    <Component {...pageProps} />
  </Layout>
}

export default MyApp
