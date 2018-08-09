import * as React from 'react';
import { Dropdown, DropdownItemProps, Menu } from 'semantic-ui-react';

import Gravatar from './Gravatar';
import withLogout from './decorators/withLogout';

interface LoggedInMenuProps {
  logout: (event: any, data: DropdownItemProps) => void;
}

const LoggedInMenu = ({ logout }: LoggedInMenuProps) => (
  <Menu>
    <Dropdown
      direction="left"
      icon={null}
      trigger={<Gravatar email="amaury.martiny@protonmail.com" />}
    >
      <Dropdown.Menu>
        <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </Menu>
);

export default withLogout(LoggedInMenu);
