import { lifecycle, compose, withProps } from 'recompose';
import axios, { AxiosResponse } from 'axios';
import withCurrentDate from '../decorators/withCurrentDate';

export interface WithTerritoryRequestProps {
  data: Object;
}

export default compose(
  lifecycle({
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
          this.setState({ data: resp.data });
        });
    }
  })
);
