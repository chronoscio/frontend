import axios from 'axios';
import { compose, withHandlers, withProps } from 'recompose';
import * as localForage from 'localforage';
import { WebAuth } from 'auth0-js';
import { withRouter } from 'next/router';

import './withAuth';

const auth0 = new WebAuth({
  domain: 'amaurymartiny.auth0.com',
  clientID: 'o85SlnfmIdeW50gQenv4S9KbSFJDDihZ',
  redirectUri: `${window.location.protocol}//${window.location.hostname}:${
    window.location.port
  }/callback`,
  audience: 'https://amaurymartiny.auth0.com/userinfo',
  responseType: 'token id_token',
  scope: 'openid'
});

export default compose(
  withRouter,
  withHandlers({
    handleAuthentication: ({ router }) => () => {
      auth0.parseHash(async (err, authResult) => {
        if (err) {
          console.error(err);
          router.push('/');
          return;
        }

        await localForage.setItem('auth', authResult);

        router.push('/');
      });
    },
    login: () => () => {
      auth0.authorize();
    },
    logout: () => () => localForage.removeItem('auth')
  }),
  withProps(({ auth }) => ({ isLoggedIn: !!auth }))
);
