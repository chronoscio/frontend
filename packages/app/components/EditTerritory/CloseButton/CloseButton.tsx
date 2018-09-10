import * as React from 'react';
import { Button } from 'semantic-ui-react';

import withHandleClose, {
  WithHandleCloseProps
} from './decorators/withHandleClose';

const CloseButton: React.SFC<WithHandleCloseProps> = ({ handleClose }) => (
  <Button content="Close" icon="close" onClick={handleClose} />
);

export default withHandleClose(CloseButton);
