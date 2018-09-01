import * as React from 'react';
import { compose } from 'recompose';
import ReactMapboxGl, { GeoJSONLayer, ZoomControl } from 'react-mapbox-gl';
import styled from 'styled-components';

import closeEditMode from './decorators/closeEditMode';
import Draw from '../EditMode/Draw';
import onlyCurrentTerritories from './decorators/onlyCurrentTerritories';
import territoriesToGeojson, {
  TerritoriesToGeojsonProps
} from './decorators/territoriesToGeojson';
import withEditMode, { WithEditModeProps } from '../decorators/withEditMode';
import withFetchTerritories from './decorators/withFetchTerritories';
import withCurrentDate from '../decorators/withCurrentDate';

const Map = ReactMapboxGl({
  accessToken: process.env.MAPBOX_ACCESS_TOKEN
});

// @ts-ignore TODO Understand why styled don't take this as a React component
const StyledMap = styled(Map)`
  .mapboxgl-ctrl-top-left {
    margin-left: 350px;
  }
`;

// @ts-ignore TODO Understand why styled don't take this as a React component
const StyledZoomControl = styled(ZoomControl)`
  margin-bottom: 1rem;
`;

const mapContainerStyle = {
  height: '100vh',
  width: '100vw'
};

const MainMap: React.SFC<TerritoriesToGeojsonProps & WithEditModeProps> = ({
  editingGeojson,
  isEditMode,
  geojson
}) => (
  <StyledMap
    style="mapbox://styles/mapbox/streets-v9" // eslint-disable-line
    containerStyle={mapContainerStyle}
  >
    {isEditMode && <Draw geojson={editingGeojson} />}
    <StyledZoomControl position="bottom-right" />
    <GeoJSONLayer
      data={geojson}
      fillLayout={{ visibility: 'visible' }}
      fillPaint={{
        'fill-color': '#4169E1',
        'fill-opacity': 0.7
      }}
    />
  </StyledMap>
);

export default compose(
  withCurrentDate,
  withEditMode,
  closeEditMode,
  withFetchTerritories,
  onlyCurrentTerritories,
  territoriesToGeojson
)(MainMap);
