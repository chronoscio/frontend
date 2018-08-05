import { branch, compose, lifecycle, renderNothing } from 'recompose';

export default compose(
  lifecycle({
    componentDidMount() {
      this.setState({ isSsrClient: true });
    }
  }),
  branch(({ isSsrClient }) => !isSsrClient, renderNothing)
);
