import { withProps } from 'recompose';
import { featureCollection } from '@turf/helpers';
import { SourceOptionData } from 'react-mapbox-gl/lib/util/types'; // This type is very similar to FeatureCollection from @turf/helpers

import { WithFetchTerritoriesProps } from './withFetchTerritories';

export interface TerritoriesToGeojsonProps {
  geojson: SourceOptionData; // TODO find a good type here
}

/**
 * Convert territories from the backend to Geojson features.
 */
export default withProps<TerritoriesToGeojsonProps, WithFetchTerritoriesProps>(
  ({ territories }) => ({
    geojson: featureCollection(
      territories.map(territory => ({
        ...territory,
        properties: {},
        type: 'Feature' as 'Feature'
      }))
    )
  })
);
