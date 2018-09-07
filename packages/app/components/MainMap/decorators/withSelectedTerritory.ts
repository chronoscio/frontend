import { GeoJSONObject } from '@turf/helpers';
import { withState } from 'recompose';

export interface WithSelectedTerritoryProps {
  selectedTerritory: GeoJSONObject;
  setSelectedTerritory(territory: GeoJSONObject): void;
}

export default withState('selectedTerritory', 'setSelectedTerritory', null);
