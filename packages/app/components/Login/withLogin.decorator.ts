import { WebAuth } from 'auth0-js';
import { compose, withHandlers, withProps } from 'recompose';
import * as localForage from 'localforage';
import { withRouter } from 'next/router';

const auth0 = new WebAuth({
  domain: 'amaurymartiny.auth0.com',
  clientID: 'o85SlnfmIdeW50gQenv4S9KbSFJDDihZ',
  redirectUri: 'http://localhost:3000/callback',
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
    }
  }),
  withProps(({ auth }) => ({ isLoggedIn: !!auth }))
);
