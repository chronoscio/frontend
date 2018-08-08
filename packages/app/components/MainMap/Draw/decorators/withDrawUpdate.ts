import { SourceOptionData } from 'react-mapbox-gl/lib/util/types';
import { withHandlers } from 'recompose';

export interface DrawUpdateProps {
  onUpdate: (geoJson: SourceOptionData) => void;
}

export default withHandlers({
  handleDrawUpdate: ({ onUpdate }: DrawUpdateProps) => ({
    features
  }: {
    features: SourceOptionData[];
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
