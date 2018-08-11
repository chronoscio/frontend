import { compose, withHandlers, withProps } from 'recompose';
import * as localForage from 'localforage';
import { WebAuth } from 'auth0-js';

import './withAuth';

export const auth0 = new WebAuth({
  domain: 'amaurymartiny.auth0.com',
  clientID: 'o85SlnfmIdeW50gQenv4S9KbSFJDDihZ',
  audience: 'https://amaurymartiny.auth0.com/userinfo',
  responseType: 'token id_token',
  scope: 'openid'
});

export default compose(
  withHandlers({
    handleAuthentication: () => () => {
      auth0.parseHash(async (err, authResult) => {
        if (err) {
          throw err;
        }

        await localForage.setItem('auth', authResult);
      });
    },
    login: () => () => {
      auth0.authorize({
        redirectUri: `${window.location.protocol}//${
          window.location.hostname
        }:${window.location.port}/callback`
      });
    },
    logout: () => async () => {
      await localForage.removeItem('auth');
      auth0.logout({
        returnTo: `${window.location.protocol}//${window.location.hostname}:${
          window.location.port
        }`
      });
    }
  }),
  withProps(({ auth }) => ({ isLoggedIn: !!auth }))
);
