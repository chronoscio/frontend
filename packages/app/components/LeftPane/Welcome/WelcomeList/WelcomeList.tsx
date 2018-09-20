import * as React from 'react';
import { List } from 'semantic-ui-react';
import { compose } from 'recompose';
import { subscribe } from 'react-contextual';

import { WithPageStoreProps } from '../../decorators/withPageStore';
import withAuth, { WithAuthProps } from '../../../Login/decorators/withAuth';
import withLogin, { WithLoginProps } from '../../../Login/decorators/withLogin';

const WelcomeList: React.SFC<
  WithAuthProps & WithPageStoreProps & WithLoginProps
> = ({ goToAddNation, isLoggedIn, login }) => (
  <List bulleted={true}>
    <List.Item>click on a political entity to learn more about it.</List.Item>
    <List.Item>
      {isLoggedIn ? (
        <a onClick={goToAddNation}>Add a new political entity</a>
      ) : (
        'Add a new political entity'
      )}{' '}
      on the map. {!isLoggedIn && <a onClick={login}>Login first.</a>}
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
  subscribe('withPageStore'),
  withAuth,
  withLogin
)(WelcomeList);
