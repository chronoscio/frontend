import { PureComponent } from 'react';

import withLogin from '../components/Login/withLogin.decorator';

interface CallbackProps {
  handleAuthentication: Function;
}

class Callback extends PureComponent<CallbackProps> {
  componentDidMount() {
    // componentDidMount not called on server-side
    this.props.handleAuthentication();
  }

  render() {
    console.log(this.props);
    return <div />;
  }
}

export default withLogin(Callback);
