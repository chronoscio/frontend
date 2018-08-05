import { compose } from 'recompose';

import handleAuthentication from './decorators/handleAuthentication';
import onlyClient from '../decorators/onlyClient';
import withLogin from '../Login/decorators/withLogin';

const Callback = (): JSX.Element => null;

export default compose(
  onlyClient,
  withLogin,
  handleAuthentication
)(Callback);
