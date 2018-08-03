import { PureComponent } from 'react';

import withLogin from '../components/Login/decorators/withLogin';

interface CallbackProps {
  handleAuthentication: Function;
}

class Callback extends PureComponent<CallbackProps> {
  componentDidMount() {
    // componentDidMount not called on server-side
    this.props.handleAuthentication();
  }

  render() {
    return <div />;
  }
}

export default withLogin(Callback);
