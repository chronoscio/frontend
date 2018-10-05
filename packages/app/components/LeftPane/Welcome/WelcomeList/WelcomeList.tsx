import * as React from 'react';
import { List } from 'semantic-ui-react';
import { compose } from 'recompose';
import { subscribe } from 'react-contextual';

import { WithPageStoreProps } from '../../decorators/withPageStore';
import withAuth, { WithAuthProps } from '../../../Login/decorators/withAuth';
import withLogin, { WithLoginProps } from '../../../Login/decorators/withLogin';

interface WelcomeListProps
  extends WithAuthProps,
    WithPageStoreProps,
    WithLoginProps {}

const WelcomeList: React.SFC<WelcomeListProps> = ({
  goToAddNation,
  isLoggedIn,
  login
}) => (
  <List bulleted={true}>
    <List.Item>Click on a political entity to learn more about it.</List.Item>
    <List.Item>
      {isLoggedIn ? (
        <a onClick={goToAddNation}>Add a new political entity</a>
      ) : (
        'Add a new political entity'
      )}{' '}
      on the map. {!isLoggedIn && <a onClick={login}>Login first.</a>}
    </List.Item>
    <List.Item disabled={true}>
      Add a new event on the map (coming soon).
    </List.Item>
    <List.Item disabled={true}>
      Add a new person on the map (coming soon).
    </List.Item>
  </List>
);

export default compose(
  subscribe('withPageStore'),
  withAuth,
  withLogin
)(WelcomeList);
