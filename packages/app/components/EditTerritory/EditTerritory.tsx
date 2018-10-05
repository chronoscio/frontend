import * as React from 'react';
import { Button } from 'semantic-ui-react';
import styled from 'styled-components';

import CloseButton from './CloseButton';
import UploadButton from './UploadButton';
import loadCurrentTerritory from './decorators/loadCurrentTerritory';
import SubmitButton from './SubmitButton';

const Wrapper = styled.div`
  left: 400px;
  position: absolute;
  top: 20px;
`;

const EditTerritory: React.SFC = () => (
  <Wrapper>
    <CloseButton />
    <Button
      content="Edit on map (coming soon...)"
      disabled={true}
      icon="paint brush"
      secondary={true}
    />
    <UploadButton />
    <SubmitButton />
  </Wrapper>
);

export default loadCurrentTerritory(EditTerritory);
