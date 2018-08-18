import * as React from 'react';
import ReactMapboxGl, { ZoomControl } from 'react-mapbox-gl';
import styled from 'styled-components';

import Draw from './Draw';

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

const MainMap: React.SFC<{}> = ({}) => (
  <StyledMap
    style="mapbox://styles/mapbox/streets-v9" // eslint-disable-line
    containerStyle={mapContainerStyle}
  >
    <Draw geoJson={{}} onUpdate={console.log} />
    <StyledZoomControl position="bottom-right" />

    {/* Once we fetch the GeoJson from the backend, we put it here */}
    {/* <GeoJSONLayer
        data={geoJson}
        fillLayout={{ visibility: 'visible' }}
        fillPaint={{
          'fill-color': '#4169E1',
          'fill-opacity': 0.7
        }}
      /> */}
  </StyledMap>
);

export default MainMap;
