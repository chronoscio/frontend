import * as React from 'react';
import ReactMapboxGl from 'react-mapbox-gl';

const Map = ReactMapboxGl({
  accessToken: process.env.MAPBOX_ACCESS_TOKEN
});

const mapContainerStyle = {
  height: '100vh',
  width: '100vw'
};

export default () => (
  <Map
    style="mapbox://styles/mapbox/streets-v9" // eslint-disable-line
    containerStyle={mapContainerStyle}
  />
);
