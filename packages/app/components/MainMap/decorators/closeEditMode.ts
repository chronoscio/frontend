import { lifecycle } from 'recompose';

import { WithCurrentDateProps } from '../../decorators/withCurrentDate';
import { WithEditModeProps } from '../../decorators/withEditMode';

/**
 * Close edit mode when we change date.
 * TODO Add a confirmation message "Are you sure you want to quit Edit mode?"
 */
export default lifecycle<WithEditModeProps & WithCurrentDateProps, {}, {}>({
  componentDidUpdate(prevProps) {
    if (this.props.currentDate.getTime() !== prevProps.currentDate.getTime()) {
      this.props.closeEditMode();
    }
  }
});
