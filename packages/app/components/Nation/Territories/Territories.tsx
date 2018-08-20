import * as React from 'react';
import { Icon, List, ListProps } from 'semantic-ui-react';
import { compose } from 'recompose';

import mockData from '../../mockData';
import Routes from '../../../routes';
import withCurrentDate, {
  WithCurrentDateProps
} from '../../decorators/withCurrentDate';
import withEditMode, { WithEditModeProps } from '../../decorators/withEditMode';

/**
 * Convert dd-mm-yyyy (or whatever is given back by the backend) to a Date
 * Object.
 * @param s - String to convert.
 */
const stringToDate = (s: string) => {
  const [year, month, day] = s
    .split('-')
    .reverse()
    .map(v => +v);

  return new Date(year, month, day);
};

const Territories: React.SFC<
  ListProps & WithCurrentDateProps & WithEditModeProps
> = ({ currentDate: current, isEditMode }) => (
  <List selection={true}>
    {mockData.map(({ endDate, id, startDate }) => {
      const start = stringToDate(startDate);
      const end = endDate ? stringToDate(endDate) : new Date();

      // Convert `currentDate` to yyyy/mm/dd format
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
              From {start.getFullYear()} to{' '}
              {endDate ? end.getFullYear() : 'today'}
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
