import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='hu'>
       <Head >
       <link href='https://api.mapbox.com/mapbox-gl-js/v1.11.1/mapbox-gl.css' rel='stylesheet' />
      </Head >
      <body>
        <NextScript />
      </body>
    </Html>
  )
}
