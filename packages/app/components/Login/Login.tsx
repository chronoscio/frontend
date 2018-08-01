import * as React from 'react';
import { Auth0DecodedHash } from 'auth0-js';
import { Button, ButtonProps } from 'semantic-ui-react';
import styled from 'styled-components';

import withLogin from './withLogin.decorator';

interface LoginProps {
  auth: Auth0DecodedHash;
  isLoggedIn: boolean;
  login: (event: any, data: ButtonProps) => void;
}

const Wrapper = styled.div`
  padding: 20px;
  position: absolute;
  right: 0;
  top: 0;
`;

const Login: React.SFC<LoginProps> = ({ auth, isLoggedIn, login }) => (
  <Wrapper>
    {JSON.stringify(auth)}
    <Button onClick={login} primary>
      {isLoggedIn ? 'Logout' : 'Login'}
    </Button>
  </Wrapper>
);

export default withLogin(Login);
