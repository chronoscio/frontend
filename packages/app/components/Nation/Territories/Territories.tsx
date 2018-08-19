import * as React from 'react';
import { Icon, List, ListProps } from 'semantic-ui-react';
import { compose } from 'recompose';

import mockData from '../../mockData';
import Routes from '../../../routes';
import withCurrentDate, {
  WithCurrentDateProps
} from '../../decorators/withCurrentDate';
import withEditMode, { WithEditModeProps } from '../../decorators/withEditMode';

const Territories: React.SFC<
  ListProps & WithCurrentDateProps & WithEditModeProps
> = ({ currentDate: current, isEditMode }) => (
  <List selection={true}>
    {mockData.map(({ endDate, id, startDate }) => {
      const start = new Date(startDate);
      const end = endDate ? new Date(endDate) : new Date();

      // Convert `currentData` to yyyy/mm/dd format
      const url = startDate
        .split('-')
        .reverse()
        .join('/');

      const isActive = current >= start && current <= end;
      return (
        <Routes.Link key={id} route={`/map/${url}`}>
          <List.Item>
            <List.Header>
              {isActive && <Icon name="caret right" />}
              From {new Date(startDate).getFullYear()} to{' '}
              {endDate ? new Date(endDate).getFullYear() : 'today'}
            </List.Header>
            {isActive && (
              <List.Content>
                Currently {isEditMode ? 'editing' : 'shown on map'}
              </List.Content>
            )}
          </List.Item>
        </Routes.Link>
      );
    })}
  </List>
);

export default compose(
  withEditMode,
  withCurrentDate
)(Territories);
