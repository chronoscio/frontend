import * as React from 'react';
import Document, {
  Head,
  Main,
  NextDocumentContext,
  NextScript
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }: NextDocumentContext) {
    // Make NextJs work with styled components
    // https://github.com/zeit/next.js/tree/canary/examples/with-styled-components
    const sheet = new ServerStyleSheet();
    const page = renderPage((App: React.ComponentType) => (props: object) =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
