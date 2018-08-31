import * as React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { compose } from 'recompose';
import styled from 'styled-components';

import withUploadShapefile, {
  WithUploadShapefileProps
} from './decorators/withUploadShapefile';

const InvisibleInput = styled.input`
  display: none;
`;

const UploadButton: React.SFC<WithUploadShapefileProps> = ({
  handleUploadShapefile
}) => (
  <span>
    <Button as="label" htmlFor="shapefile" secondary={true}>
      <Icon name="upload" />
      Upload Shapefile
    </Button>
    <InvisibleInput
      id="shapefile"
      onChange={handleUploadShapefile}
      type="file"
    />
  </span>
);

export default compose(withUploadShapefile)(UploadButton);
