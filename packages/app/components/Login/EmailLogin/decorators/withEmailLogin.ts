import axios from 'axios';
import { compose, withHandlers } from 'recompose';
import * as localForage from 'localforage';

import { Auth } from '../../types';
import '../../decorators/withAuth';

export default compose(
  withHandlers({
    login: () => async ({
      username,
      password
    }: {
      username: string;
      password: string;
    }) => {
      console.log(username, password);
      const { data: accessToken } = await axios.post(
        `${process.env.BACKEND_API}/api-token-auth/`,
        {
          password: 'amaAMA112',
          username: 'ama'
        }
      );
      localForage.setItem('auth', { accessToken } as Auth);
    }
  })
);
