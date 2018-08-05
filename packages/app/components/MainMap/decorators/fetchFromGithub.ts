import { lifecycle } from 'recompose';

import {
  WithGeoJsonStateProps,
  WithGeoJsonStateHandlerProps
} from './withGeoJson';

export default lifecycle<
  WithGeoJsonStateProps & WithGeoJsonStateHandlerProps,
  void
>({
  componentDidMount() {
    // TODO use fetch from github here for a POC. The real version should fetch from our own database.
    fetch(
      'https://raw.githubusercontent.com/amaurymartiny/interactivemap/master/territory.json'
    )
      .then(response => response.json())
      .then(this.props.updateGeoJson);
  }
});
