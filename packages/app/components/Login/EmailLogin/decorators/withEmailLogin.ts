import axios from 'axios';
import { compose, withHandlers } from 'recompose';
import * as localForage from 'localforage';

import { Auth } from '../../types';

export default compose(
  withHandlers({
    login: () => async ({
      password,
      username
    }: {
      password: string;
      username: string;
    }) => {
      const { data: accessToken } = await axios.post(
        `${process.env.BACKEND_API}/api-token-auth/`,
        {
          password,
          username
        }
      );
      localForage.setItem('auth', { accessToken } as Auth);
    }
  })
);
