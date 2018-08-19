import { subscribe } from 'react-contextual';

export interface WithEditModeProps {
  closeEditMode(): void;
  isEditMode: boolean;
  openEditMode(): void;
}

export const withEditModeStore = {
  closeEditMode: () => () => ({ isEditMode: false }),
  isEditMode: false,
  openEditMode: () => () => ({ isEditMode: true })
};

/**
 * HOC which globally subscribes to withEditMode, to see if we're currently in
 * edit mode or not.
 */
export default subscribe('withEditModeStore');
