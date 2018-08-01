import { WebAuth } from 'auth0-js';
import { compose, withHandlers, withProps, withState } from 'recompose';
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
  withState('auth', 'updateAuth', undefined),
  withRouter,
  withHandlers({
    handleAuthentication: ({ router, updateAuth }) => () => {
      auth0.parseHash((err, authResult) => {
        if (err) {
          console.error(err);
          // router.push('/');
          return;
        }

        updateAuth(authResult);
        // router.push('/');
      });
    },
    login: () => () => {
      auth0.authorize();
    }
  }),
  withProps(({ auth }) => ({ isLoggedIn: !!auth }))
);
