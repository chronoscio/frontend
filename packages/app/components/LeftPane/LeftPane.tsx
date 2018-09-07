import * as React from 'react';
import { Segment, Sidebar } from 'semantic-ui-react';
import styled from 'styled-components';

import CurrentDate from '../CurrentDate';
import Nation from '../Nation';
import withCurrentNation, {
  WithCurrentNationProps
} from '../Nation/decorators/withCurrentNation';
import Welcome from './Welcome';

const TopPart = styled.div`
  flex-grow: 1;
`;

const WhiteSegment = styled(Segment)`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  opacity: 0.95;
`;

const LeftPane: React.SFC<WithCurrentNationProps> = ({
  children,
  currentNation
}) => (
  <Sidebar.Pushable>
    <Sidebar
      animation="overlay"
      as={WhiteSegment}
      raised={true}
      visible={true}
      width="wide"
    >
      <TopPart>{currentNation ? <Nation /> : <Welcome />}</TopPart>
      <CurrentDate />
    </Sidebar>

    <Sidebar.Pusher>{children}</Sidebar.Pusher>
  </Sidebar.Pushable>
);

export default withCurrentNation(LeftPane);
