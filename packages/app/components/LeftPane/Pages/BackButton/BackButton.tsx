import * as React from 'react';
import { BackButton as Button } from '@chronoscio/ui';
import { subscribe } from 'react-contextual';

import { WithPageStoreProps } from '../../decorators/withPageStore';

const BackButton: React.SFC<WithPageStoreProps> = ({ goToDefault }) => (
  <Button onClick={goToDefault} />
);

export default subscribe('withPageStore')(BackButton);
