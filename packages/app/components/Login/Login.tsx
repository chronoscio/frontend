import * as React from 'react';
import { Auth0DecodedHash } from 'auth0-js';
import { Button, ButtonProps } from 'semantic-ui-react';
import { compose } from 'recompose';
import styled from 'styled-components';

import withAuth from './decorators/withAuth';
import withLogin from './decorators/withLogin';

interface LoginProps {
  auth: Auth0DecodedHash;
  isLoggedIn: boolean;
  login: (event: any, data: ButtonProps) => void;
  logout: (event: any, data: ButtonProps) => void;
}

const Wrapper = styled.div`
  padding: 20px;
  position: absolute;
  right: 0;
  top: 0;
`;

const Login: React.SFC<LoginProps> = ({ auth, isLoggedIn, login, logout }) => (
  <Wrapper>
    {isLoggedIn ? (
      <Button onClick={logout} primary>
        Logout
      </Button>
    ) : (
      <Button onClick={login} primary>
        Login
      </Button>
    )}
  </Wrapper>
);

export default compose(
  withAuth,
  withLogin
)(Login);
