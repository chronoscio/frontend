import * as React from 'react';
import { compose } from 'recompose';
import ReactMapboxGl, { GeoJSONLayer } from 'react-mapbox-gl';
import { SourceOptionData } from 'react-mapbox-gl/lib/util/types';

import Edit from './Edit';
import fetchFromGithub from './decorators/fetchFromGithub';
import isEditing, {
  IsEditingStateHandlerProps,
  IsEditingStateProps
} from './decorators/isEditing';
import SaveToGithub from './SaveToGithub';
import withGeoJson, {
  WithGeoJsonStateProps,
  WithGeoJsonStateHandlerProps
} from './decorators/withGeoJson';

interface MainMapProps {
  geoJson: SourceOptionData;
  updateGeoJson(geoJson: SourceOptionData): void;
}

type EnhancedMainMapProps = MainMapProps &
  IsEditingStateHandlerProps &
  IsEditingStateProps &
  WithGeoJsonStateHandlerProps &
  WithGeoJsonStateProps;

const Map = ReactMapboxGl({
  accessToken: process.env.MAPBOX_ACCESS_TOKEN
});

const mapContainerStyle = {
  height: '100vh',
  width: '100vw'
};

const MainMap: React.SFC<EnhancedMainMapProps> = ({
  closeIsEditing,
  geoJson,
  isEditing,
  openIsEditing
}) => (
  <div>
    <Map
      style="mapbox://styles/mapbox/streets-v9" // eslint-disable-line
      containerStyle={mapContainerStyle}
    >
      <Edit geoJson={geoJson} isEditing={isEditing} />

      {geoJson &&
        !isEditing && (
          <GeoJSONLayer
            data={geoJson}
            fillLayout={{ visibility: 'visible' }}
            fillOnClick={openIsEditing}
            fillPaint={{
              'fill-color': '#4169E1',
              'fill-opacity': 0.7
            }}
          />
        )}
    </Map>
    <SaveToGithub
      geoJson={geoJson}
      isEditing={isEditing}
      onClick={closeIsEditing}
    />
  </div>
);

export default compose(
  withGeoJson,
  fetchFromGithub,
  isEditing
)(MainMap);
