import { withProps } from 'recompose';
import { featureCollection, FeatureCollection } from '@turf/helpers';

import { WithFetchTerritoriesProps } from './withFetchTerritories';

export interface TerritoriesToGeojsonProps {
  geojson: FeatureCollection; // TODO find a good type here
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
