import { Map } from 'mapbox-gl';
import { withHandlers } from 'recompose';

import Routes from '../../../routes';
import { WithEditingTerritoryProps } from '../../EditTerritory/decorators/withEditingTerritory';

export interface WithHandleTerritoryClickProps {
  handleTerritoryClick(): void;
}

export default withHandlers<WithEditingTerritoryProps, {}>({
  handleTerritoryClick: ({ isEditingTerritory }) => (map: Map, event: any) => {
    const features = map.queryRenderedFeatures(event.point);

    // If there's no feature where we clicked, then pass
    if (!features || !features.length) {
      return;
    }

    // If we're in editing mode, clicking on a territory does nothing
    if (isEditingTerritory) {
      return;
    }

    // If the feature we clicked doesn't have a nation
    if (!features[0].properties.nation) {
      return;
    }

    const { day, month, year } = Routes.Router.router.query;
    Routes.Router.pushRoute(
      `/map/${year}/${month}/${day}/${features[0].properties.nation}`
    );

    // Navigate to the correct URL
  }
});
