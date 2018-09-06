import * as React from 'react';
import { Button } from 'semantic-ui-react';
import { compose } from 'recompose';
import styled from 'styled-components';

import UploadButton from './UploadButton';
import withDrawTerritory, {
  WithDrawTerritoryProps
} from './decorators/withDrawTerritory';
import loadCurrentTerritory from './decorators/loadCurrentTerritory';

const Wrapper = styled.div`
  left: 400px;
  position: absolute;
  top: 20px;
`;

const EditTerritory: React.SFC<WithDrawTerritoryProps> = ({
  isDrawingTerritory
}) => (
  <Wrapper>
    {isDrawingTerritory ? (
      <span>
        <Button content="Cancel" />
        <Button primary={true}>Save local Changes</Button>
      </span>
    ) : (
      <span>
        <Button content="Close" icon="close" />
        <Button content="Draw on map" icon="paint brush" secondary={true} />
        <UploadButton />
        <Button
          content="Submit changes to server (check console)"
          icon="save"
          primary={true}
        />
      </span>
    )}
  </Wrapper>
);

export default compose(
  loadCurrentTerritory,
  withDrawTerritory
)(EditTerritory);
