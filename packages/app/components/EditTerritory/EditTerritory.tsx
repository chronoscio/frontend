import * as React from 'react';
import { Button } from 'semantic-ui-react';
import { compose } from 'recompose';
import styled from 'styled-components';

import UploadButton from './UploadButton';
import withEditTerritory, {
  WithEditTerritoryProps
} from './decorators/withEditTerritory';

const Wrapper = styled.div`
  left: 400px;
  position: absolute;
  top: 20px;
`;

const Edit: React.SFC<WithEditTerritoryProps> = ({ isEditingTerritory }) => (
  <Wrapper>
    {isEditingTerritory ? (
      <span>
        <Button content="Cancel" />
        <Button primary={true}>Save local Changes</Button>
      </span>
    ) : (
      <span>
        <Button content="Close" icon="close" />
        <Button content="Edit on map" icon="save" secondary={true} />
        <UploadButton />
        <Button content="Submit changes to server" icon="save" primary={true} />
      </span>
    )}
  </Wrapper>
);

export default compose(withEditTerritory)(Edit);
