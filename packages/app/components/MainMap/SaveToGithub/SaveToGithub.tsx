import * as React from 'react';
import { Button, ButtonProps } from 'semantic-ui-react';
import { SourceOptionData } from 'react-mapbox-gl/lib/util/types';

import withUpdateGithub from './decorators/withUpdateGithub';

interface SaveToGithubProps {
  disabled: boolean; // TODO Take this from ButtonProps
  geoJson: SourceOptionData;
  onClick: (event: any, data: ButtonProps) => void;
  updateGithub: (event: any, data: ButtonProps) => void;
}

const SaveToGithub: React.SFC<SaveToGithubProps> = ({
  updateGithub,
  ...otherProps
}) => (
  <Button onClick={updateGithub} primary {...otherProps}>
    Save to Github
  </Button>
);

export default withUpdateGithub(SaveToGithub);
