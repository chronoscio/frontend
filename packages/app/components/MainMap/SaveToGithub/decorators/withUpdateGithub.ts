import { ButtonProps } from 'semantic-ui-react';
import { withHandlers } from 'recompose';

export default withHandlers({
  updateGithub: ({ geoJson, onClick }) => (event: any, data: ButtonProps) => {
    console.log('Updating to github', geoJson);
    onClick();
  }
});
