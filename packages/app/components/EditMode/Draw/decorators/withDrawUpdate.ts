import { compose, withHandlers } from 'recompose';
import { Feature } from 'react-mapbox-gl/lib/util/types';

import withEditMode, {
  WithEditModeProps
} from '../../../decorators/withEditMode';

export interface WithDrawUpdateProps {
  handleDrawUpdate: (drawObject: { features: Feature[] }) => void;
}

/**
 * Decorator to add a handler when we update the polygon we draw on the map.
 */
export default compose(
  withEditMode,
  withHandlers<WithEditModeProps, WithDrawUpdateProps>({
    handleDrawUpdate: ({ updateGeojson }) => ({
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
      console.log(type, features);
    }
  })
);
