import * as React from 'react';
import { compose } from 'recompose';
import { Card, Header } from 'semantic-ui-react';
import styled from 'styled-components';

import Territories from './Territories';
import withFetchEntities, {
  WithFetchEntitiesProps
} from '../MainMap/decorators/withFetchEntities';

const NationHeader = styled(Header)`
  font-size: 2rem;
  margin-bottom: 0.5rem !important;
  margin-top: 0.5rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;

const Nation: React.SFC<WithFetchEntitiesProps> = ({ entity }) => (
  <Wrapper>
    <Card fluid={true}>
      <Card.Content>
        <Card.Meta>Territory evolution</Card.Meta>
        <Card.Description>
          <Territories />
        </Card.Description>
      </Card.Content>
    </Card>
  </Wrapper>
);

export default compose(withFetchEntities)(Nation);
