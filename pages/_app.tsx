import { FC, useEffect } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/dist/client/router'
import theme from '../utils/theme'
import Header from '../components/Header/Header'
import { AppContext } from '../contexts/store'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const { pathname } = useRouter()
  const logged = pathname !== '/'

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <>
      <Head>
        <title>Linkedin</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {logged && pageProps.user ? (
          <AppContext.Provider value={{ user: pageProps.user }}>
            <Header />
            <Component {...pageProps} />
          </AppContext.Provider>
        ) : (
          <Component {...pageProps} />
        )}
      </ThemeProvider>
    </>
  )
}

export default MyApp
