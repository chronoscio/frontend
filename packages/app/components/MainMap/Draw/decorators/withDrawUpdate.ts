import { withHandlers } from 'recompose';

import { DrawProps } from '../Draw';
import { Geojson } from '../../../../types';

export interface WithDrawUpdateProps {
  handleDrawUpdate: (drawObject: { features: Geojson[] }) => void;
}

/**
 * Decorator to add a handler when we update the polygon we draw on the map.
 */
export default withHandlers<DrawProps, WithDrawUpdateProps>({
  handleDrawUpdate: ({ onUpdate }) => ({
    features
  }: {
    features: Geojson[];
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
