import { compose, lifecycle } from 'recompose';

import Routes from '../../../../routes';
import { WithLoginProps } from '../../decorators/withLogin';

export default compose(
  lifecycle<WithLoginProps, {}>({
    async componentDidMount() {
      try {
        await this.props.handleAuthentication();
        Routes.Router.pushRoute('/');
      } catch (err) {
        console.error(err);
        Routes.Router.pushRoute('/');
      }
    }
  })
);
