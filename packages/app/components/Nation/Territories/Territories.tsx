import * as React from 'react';
import { Icon, List, ListProps } from 'semantic-ui-react';
import { compose } from 'recompose';

import { Territory } from '../../mockData';
import Routes from '../../../routes';
import withCurrentDate, {
  WithCurrentDateProps
} from '../../decorators/withCurrentDate';
import withEditMode, { WithEditModeProps } from '../../decorators/withEditMode';
import withTerritoryRequest, {
  WithTerritoryRequestProps
} from '../../decorators/withTerritoryRequest';

interface ServerResponse {
  data: TerritoryData[];
}

interface TerritoryData {
  endDate?: Date;
  geometry: any;
  id: number;
  startDate: Date;
}

const Territories: React.SFC<
  ListProps &
    WithCurrentDateProps &
    WithEditModeProps &
    WithTerritoryRequestProps
> = ({ currentDate, isEditMode, data }) => <List selection={true}>{data}</List>;

export default compose(
  withEditMode,
  withCurrentDate,
  withTerritoryRequest
)(Territories);
