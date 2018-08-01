import * as React from 'react';
import { Button } from 'semantic-ui-react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 20px;
  position: absolute;
  right: 0;
  top: 0;
`;

export default () => (
  <Wrapper>
    <Button primary>Login</Button>
  </Wrapper>
);
