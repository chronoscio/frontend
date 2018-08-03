import * as React from 'react';
import { Button } from 'semantic-ui-react';
import { compose } from 'recompose';
import ReactMapboxGl, { GeoJSONLayer } from 'react-mapbox-gl';
import { SourceOptionData } from 'react-mapbox-gl/lib/util/types';
import styled from 'styled-components';

import Draw from './Draw';
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

const Wrapper = styled.div`
  padding: 20px;
  position: absolute;
  right: 0;
  bottom: 0;
`;

const MainMap: React.SFC<EnhancedMainMapProps> = ({
  closeIsEditing,
  geoJson,
  isEditing,
  openIsEditing,
  updateGeoJson
}) => (
  <div>
    <Map
      style="mapbox://styles/mapbox/streets-v9" // eslint-disable-line
      containerStyle={mapContainerStyle}
    >
      <Draw geoJson={geoJson} isEditing={isEditing} onUpdate={updateGeoJson} />

      {/* Show the GeoJSONLayer when there's a geoJson, and when we're not in editing mode*/}
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
    <Wrapper>
      <SaveToGithub
        geoJson={geoJson}
        disabled={!isEditing}
        onClick={closeIsEditing}
      />
      <Button disabled={!isEditing} onClick={closeIsEditing}>
        Cancel
      </Button>
    </Wrapper>
  </div>
);

export default compose(
  withGeoJson,
  fetchFromGithub,
  isEditing
)(MainMap);
