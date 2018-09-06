import { compose, lifecycle } from 'recompose';
import { subscribe } from 'react-contextual';

import onlyCurrentGeojson, {
  OnlyCurrentGeojsonProps
} from '../../MainMap/decorators/onlyCurrentGeojson';
import {
  EXISTING_TERRITORY,
  WithEditTerritoryStoreProps
} from './withEditTerritoryStore';
import withFetchTerritories from '../../MainMap/decorators/withFetchTerritories';

export default compose(
  withFetchTerritories,
  onlyCurrentGeojson,
  subscribe('withEditTerritoryStore'),
  lifecycle<WithEditTerritoryStoreProps & OnlyCurrentGeojsonProps, {}>({
    componentDidMount() {
      this.props.addShapefile({
        geojson: this.props.currentGeojson,
        source: EXISTING_TERRITORY
      });
    }
  })
);
