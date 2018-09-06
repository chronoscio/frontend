import * as React from 'react';
import { compose } from 'recompose';
import ReactMapboxGl, { GeoJSONLayer, ZoomControl } from 'react-mapbox-gl';
import styled from 'styled-components';

import EditTerritory from '../EditTerritory';
import Draw from '../EditTerritory/Draw';
import territoriesToGeojson, {
  TerritoriesToGeojsonProps
} from './decorators/territoriesToGeojson';
import withDrawTerritory, {
  WithDrawTerritoryProps
} from '../EditTerritory/decorators/withDrawTerritory';
import withEditTerritory, {
  WithEditTerritoryProps
} from '../EditTerritory/decorators/withEditTerritory';
import withFetchTerritories from './decorators/withFetchTerritories';
import withHandleTerritoryClick, {
  WithHandleTerritoryClickProps
} from './decorators/withHandleTerritoryClick';

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
    WithEditTerritoryProps &
    WithHandleTerritoryClickProps
> = ({ geojson, handleTerritoryClick, isEditingTerritory, shapefile }) => (
  <div>
    <StyledMap
      onClick={handleTerritoryClick}
      style="mapbox://styles/mapbox/streets-v9" // eslint-disable-line
      containerStyle={mapContainerStyle}
    >
      {/* {isDrawingTerritory && <Draw geojson={shapefile.geojson} />} */}

      {/* Add zoom controls */}
      <StyledZoomControl position="bottom-right" />

      {/* Add layer for the currently editing territory */}
      {isEditingTerritory &&
        shapefile &&
        shapefile.geojson && (
          <GeoJSONLayer
            data={shapefile.geojson}
            fillLayout={{ visibility: 'visible' }}
            fillPaint={{
              'fill-color': { type: 'identity', property: 'color' },
              'fill-opacity': 0.7
            }}
          />
        )}

      {/* Add layer all territories */}
      {!isEditingTerritory && (
        <GeoJSONLayer
          data={geojson}
          fillLayout={{ visibility: 'visible' }}
          fillPaint={{
            'fill-color': { type: 'identity', property: 'color' },
            'fill-opacity': 0.7
          }}
        />
      )}
    </StyledMap>
    {isEditingTerritory && <EditTerritory />}
  </div>
);

export default compose(
  withEditTerritory,
  withFetchTerritories,
  territoriesToGeojson,
  withHandleTerritoryClick
)(MainMap);
