import { withProps } from 'recompose';

import { Geojson } from '../../../types';
import { WithFetchTerritoriesProps } from './withFetchTerritories';

export interface TerritoriesToGeojsonProps {
  geojson: Geojson; // TODO find a good type here
}

/**
 * Convert territories from the backend to Geojson features.
 */
export default withProps<TerritoriesToGeojsonProps, WithFetchTerritoriesProps>(
  ({ territories }) => ({
    geojson: {
      type: 'FeatureCollection',
      features: territories.map(territory => ({
        ...territory,
        properties: {},
        type: 'Feature' as 'Feature' // Geojson type has type "Feature" here, not string
      }))
    }
  })
);
