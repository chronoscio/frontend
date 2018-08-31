import { Feature } from 'react-mapbox-gl/lib/util/types';
import { withHandlers } from 'recompose';

import { DrawProps } from '../Draw';

export interface WithDrawUpdateProps {
  handleDrawUpdate: (drawObject: { features: Feature[] }) => void;
}

/**
 * Decorator to add a handler when we update the polygon we draw on the map.
 */
export default withHandlers<DrawProps, WithDrawUpdateProps>({
  handleDrawUpdate: ({ onUpdate }) => ({
    features
  }: {
    features: Feature[];
  }) => {
    // The onDrawUpdate prop on the DrawControl gives back an object like
    // {
    //   features: [Feature1, Feature2, ...]
    //   type: "draw.update",
    // }
    if (!features || !features.length) {
      return;
    }
    onUpdate(features);
  }
});
