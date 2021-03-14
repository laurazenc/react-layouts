import Head from "next/head"
import React from "react"
import { RauiProvider, Global, css } from "@react-atomic-ui/core"

const tomato = "tomato"

const globalStyle = css`
  body {
    background-color: ${tomato};
  }
`

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <meta name="theme-color" content="#319795" />
      </Head>
      <Global styles={globalStyle} />
      <RauiProvider theme={{ hola: "hola" }}>
        <Component {...pageProps} />
      </RauiProvider>
    </>
  )
}

export default App
