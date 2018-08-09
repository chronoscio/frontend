import { withHandlers } from 'recompose';
import * as localForage from 'localforage';

import '../../decorators/withAuth';

export default withHandlers({
  logout: () => () => localForage.removeItem('auth')
});
