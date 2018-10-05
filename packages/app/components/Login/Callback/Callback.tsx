import * as React from 'react';
import { compose } from 'recompose';

import handleAuthentication from './decorators/handleAuthentication';
import withLogin from '../decorators/withLogin';

const Callback: React.SFC = () => null;

export default compose(
  withLogin,
  handleAuthentication
)(Callback);
