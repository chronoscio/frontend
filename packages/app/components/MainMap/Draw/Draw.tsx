import * as React from 'react';
import DrawControl from 'react-mapbox-gl-draw';
import { SourceOptionData } from 'react-mapbox-gl/lib/util/types';

import withDrawUpdate from './decorators/withDrawUpdate';

interface EditProps {
  geoJson: SourceOptionData;
  handleDrawUpdate: (drawObject: { features: SourceOptionData[] }) => void;
  isEditing: boolean;
  onUpdate: (geoJson: SourceOptionData) => void;
}

class Draw extends React.PureComponent<EditProps, {}> {
  private drawControl: React.RefObject<any>;

  componentDidUpdate(prevProps: EditProps) { 
    if (prevProps.isEditing !== this.props.isEditing && this.props.isEditing) {
      //@ts-ignore TODO Add typings to react-mapbox-gl-draw
      this.drawControl.draw.add(this.props.geoJson);
    }

    if (prevProps.isEditing !== this.props.isEditing && !this.props.isEditing) {
      //@ts-ignore TODO Add typings to react-mapbox-gl-draw
      this.drawControl.draw.deleteAll();
    }
  }

  handleRef = (ref: React.RefObject<any>) => (this.drawControl = ref);

  render() {
    return (
      <DrawControl
        displayControlsDefault={false}
        onDrawUpdate={this.props.handleDrawUpdate}
        ref={this.handleRef}
      />
    );
  }
}

export default withDrawUpdate(Draw);
