import { Map } from 'mapbox-gl';
import { withHandlers } from 'recompose';

import Routes from '../../../routes';

export interface WithHandleTerritoryClickProps {
  handleTerritoryClick(): void;
}

export default withHandlers({
  handleTerritoryClick: () => (map: Map, event: any) => {
    const features = map.queryRenderedFeatures(event.point);

    // If there's no feature where we clicked, then pass
    if (!features || !features.length) {
      return;
    }

    // If the feature we clicked doesn't have a nation
    if (!features[0].properties.nation) {
      return;
    }

    // Navigate to the correct URL
    const { day, month, year } = Routes.Router.router.query;
    Routes.Router.pushRoute(
      `/map/${year}/${month}/${day}/${features[0].properties.nation}`
    );
  }
});
