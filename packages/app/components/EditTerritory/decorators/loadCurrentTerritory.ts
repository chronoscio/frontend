import { compose, lifecycle } from 'recompose';

import onlyCurrentGeojson, {
  OnlyCurrentGeojsonProps
} from '../../MainMap/decorators/onlyCurrentGeojson';
import withEditTerritory, {
  EXISTING_TERRITORY,
  WithEditTerritoryProps
} from './withEditTerritory';
import withFetchTerritories from '../../MainMap/decorators/withFetchTerritories';

export default compose(
  withFetchTerritories,
  onlyCurrentGeojson,
  withEditTerritory,
  lifecycle<WithEditTerritoryProps & OnlyCurrentGeojsonProps, {}>({
    componentDidMount() {
      console.log('componentDidMount', this.props.currentGeojson);
      this.props.addShapefile({
        geojson: this.props.currentGeojson,
        source: EXISTING_TERRITORY
      });
    }
  })
);
