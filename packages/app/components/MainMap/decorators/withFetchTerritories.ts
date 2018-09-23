import { compose, mapProps, withProps, lifecycle } from 'recompose';
import axios, { AxiosResponse } from 'axios';

import { Territory } from '../../mockData';
import withCurrentDate, {
  WithCurrentDateProps
} from '../../CurrentDate/decorators/withCurrentDate';
import { WithFetchTerritoriesProps } from './withFetchTerritories';
//import withAuth, { WithAuthProps } from '../../Login/decorators/withAuth';

export interface WithFetchTerritoriesProps {
  territories: Territory[];
}

/**
 * Fetch territories from the backend.
 */
export default compose(
  withCurrentDate,
  //withAuth,
  lifecycle</*WithAuthProps & */ WithCurrentDateProps, {}>({
    componentDidMount() {
      axios
        .request({
          method: 'get',
          url: `${process.env.BACKEND_API_URL}/territories/`,
          params: {
            date: this.props.currentDate.toISOString().split('T')[0]
          }
          //          headers: { 'Authorization': 'bearer ' + this.props.auth }
        })
        .catch((err: any) => {
          console.error(err);
        })
        .then((resp: AxiosResponse) => {
          console.log(resp.data);
          this.setState({ territories: resp.data });
        });
    }
  })
);
