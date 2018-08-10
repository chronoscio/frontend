import axios from 'axios';
import { compose, withHandlers } from 'recompose';
import * as localForage from 'localforage';

import { Auth } from '../../types';
import { EmailLoginProps } from '../EmailLogin';

interface LoginData {
  email: string;
  password: string;
  username: string;
}

export default compose<EmailLoginProps, {}>(
  withHandlers({
    login: () => async (loginData: LoginData) => {
      const { data: accessToken } = await axios.post(
        `${process.env.BACKEND_API}/api-token-auth/`,
        loginData
      );
      localForage.setItem('auth', { accessToken } as Auth);
    }
  })
);
