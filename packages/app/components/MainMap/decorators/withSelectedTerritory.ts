import { Feature } from 'geojson';
import { withState } from 'recompose';

export interface WithSelectedTerritoryProps {
  selectedTerritory: Feature;
  setSelectedTerritory(territory: Feature): void;
}

export default withState('selectedTerritory', 'setSelectedTerritory', null);
