import { compose, lifecycle } from 'recompose';
import { withRouter, RouterProps } from 'next/router';

interface HandleAuthenticationProps {
  handleAuthentication: () => void;
  router: RouterProps;
}

export default compose(
  withRouter,
  lifecycle<HandleAuthenticationProps, {}>({
    async componentDidMount() {
      try {
        await this.props.handleAuthentication();
        this.props.router.push('/');
      } catch (err) {
        console.error(err);
        this.props.router.push('/');
      }
    }
  })
);
