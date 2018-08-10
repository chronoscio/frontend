import * as React from 'react';
import { Dropdown, DropdownItemProps } from 'semantic-ui-react';

import Gravatar from './Gravatar';
import withLogout from './decorators/withLogout';

interface LoggedInMenuProps {
  logout: (event: any, data: DropdownItemProps) => void;
}

const LoggedInMenu = ({ logout }: LoggedInMenuProps) => (
  <Dropdown
    direction="left"
    icon={null}
    trigger={<Gravatar email="amaury.martiny@protonmail.com" />}
  >
    <Dropdown.Menu>
      <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
);

export default withLogout(LoggedInMenu);
