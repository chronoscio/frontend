import * as React from 'react';
import { Button } from 'semantic-ui-react';
import { compose } from 'recompose';

const UploadButton: React.SFC<{}> = ({}) => (
  <Button content="Upload Shapefile" icon="upload" secondary={true} />
);

export default compose()(UploadButton);
