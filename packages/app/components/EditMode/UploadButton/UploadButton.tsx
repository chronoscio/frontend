import * as React from 'react';
import { Button } from 'semantic-ui-react';
import { compose } from 'recompose';

import withUploadShapefile from './decorators/withUploadShapefile';

const UploadButton: React.SFC<WithUploadShapefileProps> = ({
  handleUploadShapfile
}) => (
  <Button
    content="Upload Shapefile"
    icon="upload"
    onClick={handleUploadShapfile}
    secondary={true}
  />
);

export default compose(withUploadShapefile)(UploadButton);
