import axios from 'axios';
import { compose, withHandlers, withProps } from 'recompose';
import * as localForage from 'localforage';
import { WebAuth } from 'auth0-js';
import { withRouter } from 'next/router';

import './withAuth';

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

        const { data: githubIdentity } = await axios.get(
          `https://wt-37cf1f65543181db5247750abf73fd32-0.sandbox.auth0-extend.com/auth0-github?userId=${
            authResult.idTokenPayload.sub
          }`,
          {
            headers: {
              Authorization: `Bearer ${authResult.idToken}`
            }
          }
        );

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
