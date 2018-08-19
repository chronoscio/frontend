import { lifecycle } from 'recompose';

import { WithCurrentDateProps } from '../../decorators/withCurrentDate';
import { withEditModeProps } from '../../decorators/withEditMode';

export default lifecycle<withEditModeProps & WithCurrentDateProps, {}, {}>({
  componentDidUpdate(prevProps) {
    if (this.props.currentDate.getTime() !== prevProps.currentDate.getTime()) {
      this.props.closeEditMode();
    }
  }
});
