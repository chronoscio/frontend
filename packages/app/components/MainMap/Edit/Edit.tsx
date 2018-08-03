import * as React from 'react';
import DrawControl from 'react-mapbox-gl-draw';
import { SourceOptionData } from 'react-mapbox-gl/lib/util/types';

interface EditProps {
  geoJson: SourceOptionData;
  isEditing: boolean;
}

class Edit extends React.PureComponent<EditProps, {}> {
  private drawControl: React.RefObject<any>;

  componentDidUpdate(prevProps: EditProps) {
    if (prevProps.isEditing !== this.props.isEditing && this.props.isEditing) {
      console.log(this.props.geoJson);
      //@ts-ignore TODO Add typings to react-mapbox-gl-draw
      this.drawControl.draw.add(this.props.geoJson);
    }
  }

  handleRef = (ref: React.RefObject<any>) => (this.drawControl = ref);

  render() {
    return (
      <DrawControl
        controls={{
          combine_features: false,
          line_string: false,
          point: false,
          uncombine_features: false
        }}
        ref={this.handleRef}
      />
    );
  }
}

export default Edit;
