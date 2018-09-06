import { compose, mapProps } from 'recompose';
import { SourceOptionData } from 'react-mapbox-gl/lib/util/types'; // This type is very similar to FeatureCollection from @turf/helpers
import { subscribe } from 'react-contextual';
import { withRouter } from 'next/router';

export const EXISTING_TERRITORY = Symbol('EXISTING_TERRITORY');
export const UPLOADED_TERRITORY = Symbol('UPLOADED_TERRITORY');
export const HANDDRAWN_TERRITORY = Symbol('HANDDRAWN_TERRITORY');

interface Shapefile {
  geojson: SourceOptionData;
  name?: string;
  size?: number;
  source: Symbol; // Is our current Shapefile being drawn, or uploaded?
}

interface Store {
  isEditingTerritory: boolean; // Are we currently editing a territory with DrawControl?
  shapefile: Shapefile; // The shapefile we are editing
}

export interface WithEditTerritoryProps extends Store {
  addShapefile(shapefile: Shapefile): void;
  removeShapefile(): void;
}

export const withEditTerritoryStore = {
  addShapefile: (shapefile: Shapefile) => (store: Store): Store => ({
    ...store,
    shapefile
  }),
  removeShapefile: () => (store: Store): Store => ({
    ...store,
    shapefile: null
  }),
  shapefile: null as Shapefile
};

/**
 * HOC which looks in the current URL if we are editing a territory.
 */
export default compose(
  withRouter,
  mapProps(({ router: { query: { edit } }, ...otherProps }) => ({
    ...otherProps,
    isEditingTerritory: edit === 'edit'
  })),
  subscribe('withEditTerritoryStore')
);
