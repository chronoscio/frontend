import { SourceOptionData } from 'react-mapbox-gl/lib/util/types';
import { withHandlers } from 'recompose';

export default withHandlers({
  handleDrawUpdate: ({
    onUpdate
  }: {
    onUpdate: (geoJson: SourceOptionData) => void;
  }) => ({ features }: { features: SourceOptionData[] }) => {
    // The onDrawUpdate prop on the DrawControl gives back an object like
    // {
    //   features: [Feature1, Feature2, ...]
    //   type: "draw.update",
    // }
    // We select the 1st feature, and save it to github.
    if (!features || !features.length) {
      return;
    }
    onUpdate(features[0]);
  }
});
