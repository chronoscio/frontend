import { subscribe } from 'react-contextual';

import { Geojson } from '../../types';

interface Shapefile {
  geojson: Geojson;
  name?: string;
  size?: number;
}

interface Store {
  shapefile: Shapefile;
}

export interface WithShapefileProps extends Store {
  addShapefile(shapefile: Shapefile): void;
  removeShapefile(): void;
}

export const withShapefileStore = {
  addShapefile: (shapefile: Shapefile) => () => ({
    shapefile
  }),
  shapefile: null as Shapefile,
  removeShapefile: () => (): Store => ({
    shapefile: null
  })
};

/**
 * HOC which globally subscribes to withEditMode, to see if we're currently in
 * edit mode or not, and what geojson we are editing.
 */
export default subscribe('withShapefileStore');
