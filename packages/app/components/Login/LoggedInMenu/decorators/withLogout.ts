import { withHandlers } from 'recompose';
import * as localForage from 'localforage';

/**
 * Decorator to allow logout.
 */
export default withHandlers({
  logout: () => () => localForage.removeItem('auth')
});
