import * as React from 'react';
import { compose } from 'recompose';
import { Dropdown, DropdownItemProps } from 'semantic-ui-react';

import Gravatar from './Gravatar';
import withLogin from '../decorators/withLogin';

interface LoggedInMenuProps {
  logout: (event: any, data: DropdownItemProps) => void;
}

const LoggedInMenu: React.SFC<LoggedInMenuProps> = ({ logout }) => (
  <Dropdown
    direction="left"
    icon={null}
    trigger={<Gravatar email="amaury.martiny@protonmail.com" />} // TODO Get email from backend
  >
    <Dropdown.Menu>
      <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
);

export default withLogin(LoggedInMenu);
