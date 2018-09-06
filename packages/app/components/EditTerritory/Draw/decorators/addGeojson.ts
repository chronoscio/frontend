import { compose, lifecycle, withHandlers } from 'recompose';
import { subscribe } from 'react-contextual';

import { WithEditTerritoryStoreProps } from '../../decorators/withEditTerritoryStore';

interface DrawControlRef extends HTMLInputElement {
  draw: any; // TODO Find the correct for this in react-mapbox-gl-draw
}

export interface AddGeojsonProps {
  getDrawControl(): DrawControlRef;
  handleRef(ref: DrawControlRef): void;
}

/**
 * Decorator to add an editable geojson when the Draw control mounts.
 */
export default compose(
  subscribe('withEditTerritoryStore'),
  withHandlers(() => {
    let drawControl: DrawControlRef = null;

    return {
      handleRef: () => (ref: DrawControlRef) => (drawControl = ref),
      getDrawControl: () => () => drawControl
    };
  }),
  lifecycle<AddGeojsonProps & WithEditTerritoryStoreProps, {}, {}>({
    componentDidMount() {
      // Add the geojson on the Draw control to be edited
      const [featureId] = this.props
        .getDrawControl()
        .draw.add(this.props.shapefile.geojson);

      // Go into direct_select mode
      // https://github.com/mapbox/mapbox-gl-draw/blob/master/docs/API.md#modes
      this.props
        .getDrawControl()
        .draw.changeMode('direct_select', { featureId });
    }
  })
);
