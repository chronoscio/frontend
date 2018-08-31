import { withProps } from 'recompose';

import { WithFetchTerritoriesProps } from './withFetchTerritories';

export interface TerritoriesToGeojsonProps {
  geojson: any; // TODO find a good type here
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
        type: 'Feature'
      }))
    }
  })
);
