import { Feature } from 'geojson';

export const EXISTING_TERRITORY = Symbol('EXISTING_TERRITORY');
export const UPLOADED_TERRITORY = Symbol('UPLOADED_TERRITORY');
export const HANDDRAWN_TERRITORY = Symbol('HANDDRAWN_TERRITORY');

interface Shapefile {
  geojson: Feature;
  name?: string;
  size?: number;
  source: Symbol; // Is our current Shapefile being drawn, or uploaded?
}

interface Store {
  isDrawingTerritory: boolean; // Are we currently drawing a territory with DrawControl?
  shapefile: Shapefile; // The shapefile we are editing // TODO Maybe use a Territory model after we have answers from a backend
}

export interface WithEditTerritoryStoreProps extends Store {
  addShapefile(shapefile: Shapefile): void;
  openDraw(): void;
  closeDraw(): void;
  removeShapefile(): void;
}

export const withEditTerritoryStore = {
  addShapefile: (shapefile: Shapefile) => (store: Store): Store => ({
    ...store,
    shapefile
  }),
  closeDraw: () => (store: Store): Store => ({
    ...store,
    isDrawingTerritory: false
  }),
  openDraw: () => (store: Store): Store => ({
    ...store,
    isDrawingTerritory: true
  }),
  removeShapefile: () => (store: Store): Store => ({
    ...store,
    shapefile: null
  }),
  shapefile: null as Shapefile
};
