import { subscribe } from 'react-contextual';

interface Store {
  isDrawingTerritory: boolean; // Are we currently editing a territory with DrawControl?
}

export interface WithDrawTerritoryProps extends Store {
  closeDrawTerritory(): void;
  openDrawTerritory(): void;
}

export const withDrawTerritoryStore = {
  addShapefile: () => (store: Store): Store => ({
    ...store
  }),
  closeDrawTerritory: () => (): Store => ({
    isDrawingTerritory: false
  }),
  isDrawingTerritory: false,
  openDrawTerritory: () => (): Store => ({
    isDrawingTerritory: false
  })
};

/**
 * HOC which globally subscribes to withDrawTerritory, to see if we're currently in
 * Draw mode or not, and what geojson we are Drawing.
 */
export default subscribe('withDrawTerritoryStore');
