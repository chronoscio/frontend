import { withHandlers } from 'recompose';
import * as localForage from 'localforage';

export default withHandlers({
  logout: () => () => localForage.removeItem('auth')
});
