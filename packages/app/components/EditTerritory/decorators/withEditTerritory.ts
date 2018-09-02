import { subscribe } from 'react-contextual';
import { GeoJSONObject } from '@turf/helpers';

export const UPLOADED_TERRITORY = Symbol('UPLOAD');
export const HANDDRAWN_TERRITORY = Symbol('HANDDRAWN_TERRITORY');

type EditTerritorySource = Symbol;

interface Shapefile {
  geojson: GeoJSONObject;
  name?: string;
  size?: number;
  source: EditTerritorySource; // Is our current Shapefile being drawn, or uploaded?
}

interface Store {
  isEditingTerritory: boolean; // Are we currently editing a territory with DrawControl?
  shapefile: Shapefile;
}

export interface WithEditTerritoryProps extends Store {
  addShapefile(shapefile: Shapefile): void;
  closeEditTerritory(): void;
  openEditTerritory(): void;
  removeShapefile(): void;
}

export const withEditTerritoryStore = {
  addShapefile: (shapefile: Shapefile) => (store: Store): Store => ({
    ...store,
    shapefile
  }),
  closeEditTerritory: () => (): Store => ({
    isEditingTerritory: false,
    shapefile: null
  }),
  isEditingTerritory: false,
  isEditTerritoryOpen: false,
  openEditTerritory: () => (): Store => ({
    isEditingTerritory: false,
    shapefile: null
  }),
  removeShapefile: () => (store: Store): Store => ({
    ...store,
    shapefile: null
  }),
  shapefile: null as Shapefile
};

/**
 * HOC which globally subscribes to withEditTerritory, to see if we're currently in
 * edit mode or not, and what geojson we are editing.
 */
export default subscribe('withEditTerritoryStore');
