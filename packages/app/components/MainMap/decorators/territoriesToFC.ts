import { featureCollection } from '@turf/helpers';
import { FeatureCollection } from 'geojson';
import { withPropsOnChange } from 'recompose';

import { WithTerritoriesProps } from './withTerritories';

export interface TerritoriesToFCProps {
  featureCollection: FeatureCollection; // TODO find a good type here
}

/**
 * Convert territories from the backend to a FeatureCollection.
 */
export default withPropsOnChange<TerritoriesToFCProps, WithTerritoriesProps>(
  ['territories'],
  ({ territories }) => ({
    featureCollection: territories
      ? featureCollection(
          territories.map(territory => ({
            geometry: territory.geo,
            properties: { polentId: territory.polentId },
            type: 'Feature' as 'Feature'
          }))
        )
      : null
  })
);
