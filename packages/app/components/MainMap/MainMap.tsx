import * as React from 'react';
import DrawControl from 'react-mapbox-gl-draw';
import ReactMapboxGl, { GeoJSONLayer } from 'react-mapbox-gl';
import { SourceOptionData } from 'react-mapbox-gl/lib/util/types';

import SaveToGithub from './SaveToGithub';
import withGeoJson, {
  WithGeoJsonStateProps,
  WithGeoJsonStateHandlerProps
} from './decorators/withGeoJson.decorator';

interface MainMapProps {
  geoJson: SourceOptionData;
  updateGeoJson(geoJson: SourceOptionData): void;
}

type EnhancedMainMapProps = MainMapProps &
  WithGeoJsonStateProps &
  WithGeoJsonStateHandlerProps;

const Map = ReactMapboxGl({
  accessToken: process.env.MAPBOX_ACCESS_TOKEN
});

const mapContainerStyle = {
  height: '100vh',
  width: '100vw'
};

const MainMap: React.SFC<EnhancedMainMapProps> = ({
  geoJson,
  updateGeoJson
}) => (
  <div>
    <Map
      style="mapbox://styles/mapbox/streets-v9" // eslint-disable-line
      containerStyle={mapContainerStyle}
    >
      <DrawControl
        controls={{
          combine_features: false,
          line_string: false,
          point: false,
          uncombine_features: false
        }}
        onDrawCreate={updateGeoJson}
      />

      <GeoJSONLayer
        data="https://raw.githubusercontent.com/amaurymartiny/interactivemap/master/territory.json"
        fillLayout={{ visibility: 'visible' }}
        fillPaint={{
          'fill-color': '#4169E1',
          'fill-opacity': 0.7
        }}
      />
    </Map>
    <SaveToGithub geoJson={geoJson} />
  </div>
);

export default withGeoJson(MainMap);
