import * as React from 'react';
import { compose } from 'recompose';
import ReactMapboxGl, { GeoJSONLayer, ZoomControl } from 'react-mapbox-gl';
import styled from 'styled-components';

import Draw from '../EditTerritory/Draw';
import onlyCurrentTerritories from './decorators/onlyCurrentTerritories';
import territoriesToGeojson, {
  TerritoriesToGeojsonProps
} from './decorators/territoriesToGeojson';
import withFetchTerritories from './decorators/withFetchTerritories';
import withEditTerritory, {
  WithEditTerritoryProps
} from '../EditTerritory/decorators/withEditTerritory';
import withCurrentDate from '../CurrentDate/decorators/withCurrentDate';

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

const MainMap: React.SFC<
  TerritoriesToGeojsonProps & WithEditTerritoryProps
> = ({ isEditingTerritory, geojson, shapefile }) => (
  <StyledMap
    style="mapbox://styles/mapbox/streets-v9" // eslint-disable-line
    containerStyle={mapContainerStyle}
  >
    {isEditingTerritory && <Draw geojson={shapefile.geojson} />}
    <StyledZoomControl position="bottom-right" />
    <GeoJSONLayer
      data={geojson}
      fillLayout={{ visibility: 'visible' }}
      fillOnClick={console.log}
      fillPaint={{
        'fill-color': '#4169E1',
        'fill-opacity': 0.7
      }}
    />
  </StyledMap>
);

export default compose(
  withCurrentDate,
  withEditTerritory,
  withFetchTerritories,
  onlyCurrentTerritories,
  territoriesToGeojson
)(MainMap);
