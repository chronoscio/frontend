import { compose, lifecycle } from 'recompose';
import axios, { AxiosResponse } from 'axios';

import withCurrentDate, {
  WithCurrentDateProps
} from '../../CurrentDate/decorators/withCurrentDate';
import { WithFetchTerritoriesProps } from './withFetchTerritories';

export interface Territory {
  color: string;
  end_date: Date;
  geo: any;
  id: number;
  nation: string;
  start_date: Date;
}

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
          url: `${process.env.BACKEND_API_URL}territories/`,
          params: {
            date: this.props.currentDate.toISOString().split('T')[0]
          }
        })
        .catch((err: any) => {
          console.error(err);
        })
        .then((resp: AxiosResponse) => {
          this.setState({ territories: resp.data });
        });
    },

    componentDidUpdate(prevProps) {
      if (prevProps.currentDate !== this.props.currentDate) {
        axios
          .request({
            method: 'get',
            url: `${process.env.BACKEND_API_URL}territories/`,
            params: {
              date: this.props.currentDate.toISOString().split('T')[0]
            }
          })
          .catch((err: any) => {
            console.error(err);
          })
          .then((resp: AxiosResponse) => {
            this.setState({ territories: resp.data });
          });
      }
    }
  })
);
