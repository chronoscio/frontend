import * as React from 'react';
import { compose } from 'recompose';
import { List } from 'semantic-ui-react';

import withAuth, { WithAuthProps } from '../../../Login/decorators/withAuth';
import withLogin, { WithLoginProps } from '../../../Login/decorators/withLogin';

const WelcomeList: React.SFC<WithAuthProps & WithLoginProps> = ({
  isLoggedIn,
  login
}) => (
  <List bulleted={true}>
    <List.Item>click on a political entity to learn more about it.</List.Item>
    <List.Item>
      add a new political entity on the map.{' '}
      {!isLoggedIn && <a onClick={login}>Login first.</a>}
    </List.Item>
    <List.Item disabled={true}>
      add a new event on the map (coming soon).
    </List.Item>
    <List.Item disabled={true}>
      add a new person on the map (coming soon).
    </List.Item>
  </List>
);

export default compose(
  withAuth,
  withLogin
)(WelcomeList);
