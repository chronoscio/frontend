import { subscribe } from 'react-contextual';

import { Geojson } from '../../types';

export interface WithEditModeProps {
  closeEditMode(): void;
  editingGeojson: Geojson; //
  isEditMode: boolean;
  openEditMode(): void;
  updateGeojson(geojson: Geojson): void;
}

export const withEditModeStore: WithEditModeProps = {
  closeEditMode: () => ({ editingGeojson: false, isEditMode: false }),
  editingGeojson: null as Geojson,
  isEditMode: false,
  openEditMode: () => ({ isEditMode: true }),
  updateGeojson: (editingGeojson: Geojson) => ({ editingGeojson })
};

/**
 * HOC which globally subscribes to withEditMode, to see if we're currently in
 * edit mode or not, and what geojson we are editing.
 */
export default subscribe('withEditModeStore');
