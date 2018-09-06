import { compose, withHandlers } from 'recompose';
import { Feature } from '@turf/helpers';
import { subscribe } from 'react-contextual';

import { WithEditTerritoryStoreProps } from '../../decorators/withEditTerritoryStore';

export interface WithDrawUpdateProps {
  handleDrawUpdate: (drawObject: { features: Feature[] }) => void;
}

/**
 * Decorator to add a handler when we update the polygon we draw on the map.
 */
export default compose(
  subscribe('withEditTerritoryStore'),
  withHandlers<WithEditTerritoryStoreProps, WithDrawUpdateProps>({
    handleDrawUpdate: ({ addShapefile }) => ({
      features,
      type
    }: {
      features: Feature[];
      type: string;
    }) => {
      // The onDrawUpdate prop on the DrawControl gives back an object like
      // {
      //   features: [Feature1, Feature2, ...]
      //   type: "draw.update",
      // }
      if (!features || !features.length) {
        return;
      }
      // addShapefile(features[0]);
    }
  })
);
