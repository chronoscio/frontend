import * as React from 'react';
import { compose } from 'recompose';
import ReactMapboxGl, { GeoJSONLayer, ZoomControl } from 'react-mapbox-gl';
import styled from 'styled-components';

import Draw from './Draw';
import onlyCurrentTerritories from './decorators/onlyCurrentTerritories';
import territoriesToGeoJson, {
  TerritoriesToGeoJsonProps
} from './decorators/territoriesToGeoJson';
import withFetchTerritories from './decorators/withFetchTerritories';

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

const MainMap: React.SFC<TerritoriesToGeoJsonProps> = ({ geojson }) => (
  <StyledMap
    style="mapbox://styles/mapbox/streets-v9" // eslint-disable-line
    containerStyle={mapContainerStyle}
  >
    <Draw geoJson={{}} onUpdate={console.log} />
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
  withFetchTerritories,
  onlyCurrentTerritories,
  territoriesToGeoJson
)(MainMap);
