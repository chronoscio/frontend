import { compose, withHandlers } from 'recompose';
import * as localForage from 'localforage';
import { WebAuth } from 'auth0-js';

import './withAuth';

export const auth0 = new WebAuth({
  domain: process.env.AUTH0_DOMAIN,
  clientID: process.env.AUTH0_CLIENT_ID,
  audience: `https://${process.env.AUTH0_DOMAIN}/userinfo`,
  responseType: 'token id_token',
  scope: 'openid email profile'
});

const currentHost = `${window.location.protocol}//${window.location.hostname}:${
  window.location.port
}`;

export interface WithLoginProps {
  handleAuthentication(): Promise<void>;
  login(): Promise<void>;
  logout(): Promise<void>;
}

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
    login: () => async () => {
      auth0.authorize({
        redirectUri: `${currentHost}/callback`
      });
    },
    logout: () => async () => {
      await localForage.removeItem('auth');
      auth0.logout({
        returnTo: currentHost
      });
    }
  })
);
