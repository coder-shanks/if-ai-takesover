import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Predict your future job if AI takes over."
        />
        <meta property="og:site_name" content="twitterbio.com" />
        <meta
          property="og:description"
          content="Predict your future job if AI takes over."
        />
        <meta property="og:title" content="If AI Takes Over" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
