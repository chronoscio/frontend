import { featureCollection } from '@turf/helpers';
import { SourceOptionData } from 'react-mapbox-gl/lib/util/types'; // This type is very similar to FeatureCollection from @turf/helpers
import { withPropsOnChange } from 'recompose';

import { WithFetchTerritoriesProps } from './withFetchTerritories';

export interface TerritoriesToGeojsonProps {
  geojson: SourceOptionData; // TODO find a good type here
}

/**
 * Convert territories from the backend to Geojson features.
 */
export default withPropsOnChange<
  TerritoriesToGeojsonProps,
  WithFetchTerritoriesProps
>(['territories'], ({ territories }) => ({
  geojson: territories
    ? featureCollection(
        territories.map(territory => ({
          ...territory,
          properties: { color: territory.color, nation: territory.nation },
          type: 'Feature' as 'Feature'
        }))
      )
    : null
}));
