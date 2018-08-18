import { withProps } from 'recompose';

import { WithFetchTerritoriesProps } from './withFetchTerritories';

export interface TerritoriesToGeoJsonProps {
  geojson: any;
}

/**
 * Convert territories from the backend to GeoJson features.
 */
export default withProps<TerritoriesToGeoJsonProps, WithFetchTerritoriesProps>(
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
