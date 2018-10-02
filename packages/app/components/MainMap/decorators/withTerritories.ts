import { api, Territory } from '@chronoscio/api';
import { compose, lifecycle } from 'recompose';

import withCurrentDate, {
  WithCurrentDateProps
} from '../../CurrentDate/decorators/withCurrentDate';

export interface WithTerritoriesProps {
  territories: Territory[];
}

/**
 * Fetch territories from the backend.
 */
export default compose(
  withCurrentDate,
  lifecycle<WithCurrentDateProps, {}>({
    async componentDidMount() {
      const territories = await api.territories.list({
        params: {
          date: this.props.currentDate.toISOString().split('T')[0]
        }
      });
      this.setState({ territories });
    },

    async componentDidUpdate(prevProps) {
      if (prevProps.currentDate === this.props.currentDate) {
        return;
      }

      const territories = await api.territories.list({
        params: {
          date: this.props.currentDate.toISOString().split('T')[0]
        }
      });
      this.setState({ territories });
    }
  })
);
