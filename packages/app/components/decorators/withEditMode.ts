import { compose, withPropsOnChange } from 'recompose';
import { subscribe } from 'react-contextual';

import { Geojson } from '../../types';

interface Store {
  editingGeojson: Geojson; // The current geojson we are editing
}

export interface WithEditModeProps extends Store {
  closeEditMode(): void;
  isEditMode: boolean;
  openEditMode(): void;
}

export const withEditModeStore = {
  closeEditMode: (): Store => ({
    editingGeojson: null
  }),
  editingGeojson: null as Geojson,
  isEditMode: false,
  openEditMode: (editingGeojson: Geojson): Store => ({
    editingGeojson
  })
};

/**
 * HOC which globally subscribes to withEditMode, to see if we're currently in
 * edit mode or not, and what geojson we are editing.
 */
export default compose(
  subscribe('withEditModeStore'),
  withPropsOnChange<{}, WithEditModeProps>(
    ['editingGeojson'],
    ({ editingGeojson }) => ({
      isEditMode: !!editingGeojson
    })
  )
);
