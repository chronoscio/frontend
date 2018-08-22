import * as React from 'react';
import { Button, ButtonProps } from 'semantic-ui-react';
import { compose } from 'recompose';
import styled from 'styled-components';

import LoggedInMenu from './LoggedInMenu';
import withAuth, { WithAuthProps } from './decorators/withAuth';
import withLogin, { WithLoginProps } from './decorators/withLogin';

/**
 * Wrapper to create a div on the top right corner.
 */
const Wrapper = styled.div`
  padding: 20px;
  position: absolute;
  right: 0;
  top: 0;
`;

interface LoginProps extends WithAuthProps, WithLoginProps {}

const Login: React.SFC<LoginProps> = ({ isLoggedIn, login }) => (
  <Wrapper>
    {isLoggedIn ? (
      <LoggedInMenu />
    ) : (
      <Button onClick={login} primary={true}>
        Login
      </Button>
    )}
  </Wrapper>
);

export default compose(
  withAuth,
  withLogin
)(Login);
