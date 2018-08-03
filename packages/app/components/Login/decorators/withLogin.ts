import axios from 'axios';
import { compose, withHandlers, withProps } from 'recompose';
import * as localForage from 'localforage';
import { WebAuth } from 'auth0-js';
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

        console.log('authResult', authResult);
        await localForage.setItem('auth', authResult);

        const {
          data: { identities }
        } = await axios.get(
          `https://amaurymartiny.auth0.com/api/v2/users/${
            authResult.idTokenPayload.sub
          }`,
          {
            headers: {
              Authorization: `TODO`
            }
          }
        );

        const githubIdentity: {
          connection: string;
          isSocial: boolean;
          provider: string;
          user_id: number;
        } = identities.find(
          ({ connection }: { connection: string }) => connection === 'github'
        );
        console.log('Got github identity', githubIdentity);

        router.push('/');
      });
    },
    login: () => () => {
      auth0.authorize();
    }
  }),
  withProps(({ auth }) => ({ isLoggedIn: !!auth }))
);
