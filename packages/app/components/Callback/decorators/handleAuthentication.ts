import { lifecycle } from 'recompose';

interface Props {
  handleAuthentication: () => void;
}

export default lifecycle<Props, {}>({
  componentDidMount() {
    this.props.handleAuthentication();
  }
});
