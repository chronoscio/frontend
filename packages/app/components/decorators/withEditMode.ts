import { subscribe } from 'react-contextual';

export interface withEditModeProps {
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
 * HOC which globally subscribed to withEditMode, to see if we're currently in
 * edit mode or not.
 */
export default subscribe('withEditModeStore');
