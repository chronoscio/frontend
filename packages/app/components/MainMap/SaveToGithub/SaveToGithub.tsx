import * as React from 'react';
import { Button, ButtonProps } from 'semantic-ui-react';
import { SourceOptionData } from 'react-mapbox-gl/lib/util/types';

import withUpdateGithub from './decorators/withUpdateGithub';

interface SaveToGithubProps {
  disabled: boolean; // TODO Take this from ButtonProps
  geoJson: SourceOptionData;
  isLoggedIn: boolean;
  onClick: (event: any, data: ButtonProps) => void;
  updateGithub: (event: any, data: ButtonProps) => Promise<void>;
}

const SaveToGithub: React.SFC<SaveToGithubProps> = ({
  geoJson,
  isLoggedIn,
  onClick,
  updateGithub,
  ...otherProps
}) => (
  <Button onClick={updateGithub} primary {...otherProps}>
    Save to Github
  </Button>
);

export default withUpdateGithub(SaveToGithub);
