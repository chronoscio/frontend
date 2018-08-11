import * as React from 'react';
import { Dropdown } from 'semantic-ui-react';

import Avatar from './Avatar';
import withLogin, { WithLoginProps } from '../decorators/withLogin';

const LoggedInMenu: React.SFC<WithLoginProps> = ({ logout }) => (
  <Dropdown direction="left" icon={null} trigger={<Avatar />}>
    <Dropdown.Menu>
      <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
);

export default withLogin(LoggedInMenu);
