import * as React from 'react';
import { Button } from 'semantic-ui-react';

import withHandleSubmit, {
  WithHandleSubmitProps
} from './decorators/withHandleSubmit';

const CloseButton: React.SFC<WithHandleSubmitProps> = ({ handleSubmit }) => (
  <Button
    content="Submit changes to server (check console)"
    icon="save"
    onClick={handleSubmit}
    primary={true}
  />
);

export default withHandleSubmit(CloseButton);
