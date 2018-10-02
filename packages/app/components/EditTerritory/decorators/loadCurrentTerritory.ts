import { compose, lifecycle } from 'recompose';
import { subscribe } from 'react-contextual';

import onlyCurrentGeojson, {
  OnlyCurrentGeojsonProps
} from './onlyCurrentGeojson';
import {
  EXISTING_TERRITORY,
  WithEditTerritoryStoreProps
} from './withEditTerritoryStore';

export default compose(
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
