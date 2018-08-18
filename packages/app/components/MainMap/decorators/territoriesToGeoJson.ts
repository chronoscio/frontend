import { withProps } from 'recompose';

import { withFetchTerritoriesProps } from './withFetchTerritories';

export interface TerritoriesToGeoJsonProps {
  geojson: any;
}

/**
 * Convert territories from the backend to GeoJson features.
 */
export default withProps<TerritoriesToGeoJsonProps, withFetchTerritoriesProps>(
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
