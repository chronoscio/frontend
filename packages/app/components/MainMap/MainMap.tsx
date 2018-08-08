import * as React from 'react';
import ReactMapboxGl from 'react-mapbox-gl';

import Draw from './Draw';

const Map = ReactMapboxGl({
  accessToken: process.env.MAPBOX_ACCESS_TOKEN
});

const mapContainerStyle = {
  height: '100vh',
  width: '100vw'
};

const MainMap: React.SFC<{}> = ({}) => (
  <div>
    <Map
      style="mapbox://styles/mapbox/streets-v9" // eslint-disable-line
      containerStyle={mapContainerStyle}
    >
      <Draw geoJson={{}} onUpdate={console.log} />

      {/* Once we fetch the GeoJson from the backend, we put it here */}
      {/* <GeoJSONLayer
        data={geoJson}
        fillLayout={{ visibility: 'visible' }}
        fillPaint={{
          'fill-color': '#4169E1',
          'fill-opacity': 0.7
        }}
      /> */}
    </Map>
  </div>
);

export default MainMap;
