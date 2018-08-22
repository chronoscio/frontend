import * as React from 'react';
import { Segment, Sidebar } from 'semantic-ui-react';
import styled from 'styled-components';

import Nation from '../Nation';

const WhiteSegment = styled(Segment)`
  background-color: #ffffff;
  opacity: 0.95;
`;

const LeftPane: React.SFC<{}> = ({ children }) => (
  <Sidebar.Pushable>
    <Sidebar
      animation="overlay"
      as={WhiteSegment}
      raised={true}
      visible={true}
      width="wide"
    >
      <Nation />
    </Sidebar>
    <Sidebar.Pusher>{children}</Sidebar.Pusher>
  </Sidebar.Pushable>
);

export default LeftPane;
