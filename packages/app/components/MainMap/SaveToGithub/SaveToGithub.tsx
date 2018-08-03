import * as React from 'react';
import { Button } from 'semantic-ui-react';
import { SourceOptionData } from 'react-mapbox-gl/lib/util/types';
import styled from 'styled-components';

import logGeoJson from './decorators/logGeoJson.decorator';

interface SaveToGithubProps {
  geoJson: SourceOptionData;
  log(): void;
}

const Wrapper = styled.div`
  padding: 20px;
  position: absolute;
  right: 0;
  bottom: 0;
`;

const SaveToGithub: React.SFC<SaveToGithubProps> = ({ geoJson, log }) => (
  <Wrapper>
    <Button disabled={!geoJson} onClick={log} primary>
      Save to Github
    </Button>
  </Wrapper>
);

export default logGeoJson(SaveToGithub);
