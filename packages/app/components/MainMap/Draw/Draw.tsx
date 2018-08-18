import * as React from 'react';
import DrawControl from 'react-mapbox-gl-draw';
import { SourceOptionData } from 'react-mapbox-gl/lib/util/types';

import withDrawUpdate, { DrawUpdateProps } from './decorators/withDrawUpdate';

interface DrawProps {
  geoJson: SourceOptionData;
  handleDrawUpdate: (drawObject: { features: SourceOptionData[] }) => void;
}

const Draw = ({ handleDrawUpdate }: DrawProps & DrawUpdateProps) => (
  <DrawControl
    controls={{ line_string: false, point: false }}
    onDrawCreate={handleDrawUpdate}
    onDrawUpdate={handleDrawUpdate}
    position="top-right"
  />
);

export default withDrawUpdate(Draw);
