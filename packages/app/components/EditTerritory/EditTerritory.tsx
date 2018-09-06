import * as React from 'react';
import { Button } from 'semantic-ui-react';
import { compose } from 'recompose';
import styled from 'styled-components';

import UploadButton from './UploadButton';
import loadCurrentTerritory from './decorators/loadCurrentTerritory';
import withHandleCancel, {
  WithHandleCancelProps
} from './decorators/withHandleCancel';

const Wrapper = styled.div`
  left: 400px;
  position: absolute;
  top: 20px;
`;

const EditTerritory: React.SFC<WithHandleCancelProps> = ({ handleCancel }) => (
  <Wrapper>
    <Button content="Close" icon="close" onClick={handleCancel} />
    <Button
      content="Edit on map (coming soon...)"
      disabled={true}
      icon="paint brush"
      secondary={true}
    />
    <UploadButton />
    <Button
      content="Submit changes to server (check console)"
      icon="save"
      primary={true}
    />
  </Wrapper>
);

export default compose(
  loadCurrentTerritory,
  withHandleCancel
)(EditTerritory);
