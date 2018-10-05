import * as React from 'react';
import { compose } from 'recompose';
import ReactMapboxGl, { GeoJSONLayer, ZoomControl } from 'react-mapbox-gl';
import styled from 'styled-components';
import { subscribe } from 'react-contextual';

import EditTerritory from '../EditTerritory';
import territoriesToGeojson, {
  TerritoriesToGeojsonProps
} from './decorators/territoriesToGeojson';
import withEditingTerritory, {
  WithEditingTerritoryProps
} from '../EditTerritory/decorators/withEditingTerritory';
import { WithEditTerritoryStoreProps } from '../EditTerritory/decorators/withEditTerritoryStore';
import withFetchTerritories from './decorators/withFetchTerritories';
import withHandleTerritoryClick, {
  WithHandleTerritoryClickProps
} from './decorators/withHandleTerritoryClick';
import withSelectedTerritory, {
  WithSelectedTerritoryProps
} from './decorators/withSelectedTerritory';

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
  TerritoriesToGeojsonProps &
    WithEditingTerritoryProps &
    WithEditTerritoryStoreProps &
    WithHandleTerritoryClickProps &
    WithSelectedTerritoryProps
> = ({ geojson, handleTerritoryClick, isEditingTerritory, shapefile }) => (
  <div>
    <StyledMap
      onClick={handleTerritoryClick}
      style="mapbox://styles/mapbox/streets-v9" // eslint-disable-line
      containerStyle={mapContainerStyle}
    >
      {/* TODO: Add Draw later */}
      {/* {isDrawingTerritory && <Draw geojson={shapefile.geojson} />} */}

      {/* Add zoom controls */}
      <StyledZoomControl position="bottom-right" />

      {/* Add layer for the currently editing territory */}
      {isEditingTerritory &&
        shapefile && (
          <GeoJSONLayer
            data={shapefile.geojson}
            fillLayout={{ visibility: 'visible' }}
            fillPaint={{
              'fill-color': 'black',
              'fill-opacity': 0.7
            }}
          />
        )}

      {/* Add layer all territories. */}
      <GeoJSONLayer
        data={geojson}
        fillLayout={{ visibility: 'visible' }}
        fillPaint={{
          'fill-color': { type: 'identity', property: 'color' },
          'fill-opacity': isEditingTerritory ? 0.2 : 0.7
        }}
      />
    </StyledMap>
    {isEditingTerritory && <EditTerritory />}
  </div>
);

export default compose(
  withEditingTerritory,
  subscribe('withEditTerritoryStore'),
  withFetchTerritories,
  territoriesToGeojson,
  withSelectedTerritory,
  withHandleTerritoryClick
)(MainMap);
