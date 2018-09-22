import * as React from 'react';
import { Button, ButtonProps } from 'semantic-ui-react';

export const BackButton: React.SFC<ButtonProps> = props => (
  <Button content="Back" icon="left arrow" size="mini" {...props} />
);
