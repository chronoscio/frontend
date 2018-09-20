import * as React from 'react';
import { Button } from 'semantic-ui-react';
import { subscribe } from 'react-contextual';

import { WithPageStoreProps } from '../../decorators/withPageStore';

const BackButton: React.SFC<WithPageStoreProps> = ({ goToDefault }) => (
  <Button content="Back" icon="left arrow" onClick={goToDefault} size="mini" />
);

export default subscribe('withPageStore')(BackButton);
