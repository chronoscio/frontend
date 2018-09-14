import { compose, mapProps, withProps, lifecycle } from 'recompose';
import axios, { AxiosResponse } from 'axios';

import mockData, { Territory } from '../../mockData';
import withCurrentDate, {
  WithCurrentDateProps
} from '../../CurrentDate/decorators/withCurrentDate';
import { WithFetchTerritoriesProps } from './withFetchTerritories';

export interface WithFetchTerritoriesProps {
  territories: Territory[];
}

/**
 * Fetch territories from the backend.
 */
export default compose(
  withCurrentDate,
  lifecycle<WithCurrentDateProps, {}>({
    componentDidMount() {
      axios
        .request({
          method: 'get',
          url: 'http://localhost/api/territories/',
          params: {
            date: this.props.currentDate.toISOString().split('T')[0]
          }
        })
        .catch((err: any) => {
          console.error(err);
        })
        .then((resp: AxiosResponse) => {
          this.setState({territories: resp.data})
        });
    }
  })
);
