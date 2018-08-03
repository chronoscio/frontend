import * as React from 'react';
import { Button } from 'semantic-ui-react';
import { SourceOptionData } from 'react-mapbox-gl/lib/util/types';
import styled from 'styled-components';

interface SaveToGithubProps {
  geoJson: SourceOptionData;
  isEditing: boolean;
  onClick: Function;
}

const Wrapper = styled.div`
  padding: 20px;
  position: absolute;
  right: 0;
  bottom: 0;
`;

const SaveToGithub: React.SFC<SaveToGithubProps> = ({ isEditing }) => (
  <Wrapper>
    <Button disabled={!isEditing} primary>
      Save to Github
    </Button>
  </Wrapper>
);

export default SaveToGithub;
