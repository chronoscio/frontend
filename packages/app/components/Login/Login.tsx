import * as React from 'react';
import { Button, ButtonProps, Modal } from 'semantic-ui-react';
import { compose } from 'recompose';
import styled from 'styled-components';

import { Auth } from './types';
import EmailLogin from './EmailLogin';
import withAuth from './decorators/withAuth';
import withLogout from './decorators/withLogout';

/**
 * Center modal vertically on the screen.
 */
const CenteredModal = styled(Modal)`
  margin-top: -10% !important;
`;

/**
 * Wrapper to create a div on the top right corner.
 */
const Wrapper = styled.div`
  padding: 20px;
  position: absolute;
  right: 0;
  top: 0;
`;

interface LoginProps {
  auth: Auth;
  isLoggedIn: boolean;
  logout: (event: any, data: ButtonProps) => void;
}

const Login: React.SFC<LoginProps> = ({ isLoggedIn, logout }) => (
  <Wrapper>
    {!isLoggedIn ? (
      <Button onClick={logout}>Logout</Button>
    ) : (
      <CenteredModal size="tiny" trigger={<Button primary>Login</Button>}>
        <Modal.Content>
          <Modal.Description>
            <EmailLogin />
          </Modal.Description>
        </Modal.Content>
      </CenteredModal>
    )}
  </Wrapper>
);

export default compose(
  withAuth,
  withLogout
)(Login);
