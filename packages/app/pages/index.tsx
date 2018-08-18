import * as React from 'react';
import { NextContext } from 'next';
import Router from 'next/router';

class Index extends React.Component {
  static async getInitialProps({ res }: NextContext) {
    // If we arrive to the index '/' page, redirect to today's map:
    // /map/yyyy/mm/dd
    const [today] = new Date().toISOString().split('T');

    // `today` is in dd-mm-yyyy format, we convert it to yyyy/mm/dd format
    const newUrl = today
      .split('-')
      .reverse()
      .join('/');

    // https://github.com/zeit/next.js/wiki/Redirecting-in-%60getInitialProps%60
    if (res) {
      res.writeHead(302, {
        Location: `/map/${newUrl}`
      });
      res.end();
    } else {
      Router.push(`/map/${newUrl}`);
    }
    return {};
  }
}

export default Index;
