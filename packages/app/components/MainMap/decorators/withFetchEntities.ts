import { compose, mapProps, withProps, lifecycle, createEventHandlerWithConfig } from 'recompose';
import axios, { AxiosResponse } from 'axios';

import withCurrentNation, {
  WithCurrentNationProps
} from '../../Nation/decorators/withCurrentNation';
import { WithFetchTerritoriesProps } from './withFetchTerritories';
//import withAuth, { WithAuthProps } from '../../Login/decorators/withAuth';

export interface Entity {
  id: number;
  name: string;
  url_id: string;
  color: string;
  references: string[];
  aliases: string[];
  description: string;
  links: string[];
  control_type: string;
}

export interface WithFetchEntitiesProps {
  entity: Entity;
}


/**
 * Fetch Entities from the backend.
 */
export default compose(
  withCurrentNation,
  lifecycle<WithCurrentNationProps, {}>({
    componentDidMount() {
      axios
        .request({
          method: 'get',
          url: `${process.env.BACKEND_API_URL}nations/${this.props.currentNation}/`,
        })
        .catch((err: any) => {
          console.error(err);
        })
        .then((resp: AxiosResponse) => {
          console.log(resp.data);
          this.setState({ entity: resp.data });
        });
    }
  })
);
