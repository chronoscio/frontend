import * as React from 'react';
import { compose } from 'recompose';
import DrawControl from 'react-mapbox-gl-draw';
import { SourceOptionData } from 'react-mapbox-gl/lib/util/types';

import addGeoJson, { AddGeojsonProps } from './decorators/addGeojson';
import withDrawUpdate, {
  WithDrawUpdateProps
} from './decorators/withDrawUpdate';

export interface DrawProps {
  geojson: SourceOptionData;
}

const Draw: React.SFC<DrawProps & AddGeojsonProps & WithDrawUpdateProps> = ({
  handleDrawUpdate,
  handleRef
}) => (
  <DrawControl
    controls={{
      polygon: true,
      trash: true
    }}
    displayControlsDefault={false}
    onDrawCreate={handleDrawUpdate}
    onDrawUpdate={handleDrawUpdate}
    position="top-left"
    ref={handleRef}
  />
);

export default compose<DrawProps, DrawProps>(
  withDrawUpdate,
  addGeoJson
)(Draw);
