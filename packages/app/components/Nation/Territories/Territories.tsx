import * as React from 'react';
import { compose } from 'recompose';
import { Icon, List, ListProps } from 'semantic-ui-react';
import { withRouter, WithRouterProps } from 'next/router';

import withAuth, { WithAuthProps } from '../../Login/decorators/withAuth';
import mockData from '../../mockData';
import Routes from '../../../routes';
import withCurrentDate, {
  WithCurrentDateProps
} from '../../CurrentDate/decorators/withCurrentDate';
import withCurrentNation, {
  WithCurrentNationProps
} from '../../Nation/decorators/withCurrentNation';

const Territories: React.SFC<
  ListProps &
    WithAuthProps &
    WithCurrentDateProps &
    WithCurrentNationProps &
    WithRouterProps
> = ({
  currentDate,
  currentNation,
  isLoggedIn,
  router: {
    query: { day, month, year }
  }
}) => (
  <List selection={true}>
    {mockData
      .filter(({ nation }) => nation === currentNation)
      .map(({ endDate: endDateFromData, id, startDate }) => {
        // If no endDate is specified, we consider it today
        const endDate = endDateFromData ? endDateFromData : new Date();

        // Convert `startDate` to yyyy/mm/dd format
        const url = startDate
          .toISOString()
          .split('T')[0]
          .split('-')
          .join('/');

        const isActive = currentDate >= startDate && currentDate <= endDate;

        return (
          <Routes.Link key={id} route={`/map/${url}/${currentNation}`}>
            <List.Item>
              <List.Header>
                {isActive && <Icon name="caret right" />}
                From {startDate.getFullYear()} to{' '}
                {endDateFromData ? endDate.getFullYear() : 'today'}
              </List.Header>
              {isActive && (
                <List.Content>
                  Currently shown on map.{' '}
                  {isLoggedIn && (
                    <Routes.Link
                      route={`/map/${year}/${month}/${day}/${currentNation}/edit`}
                    >
                      <a>Edit</a>
                    </Routes.Link>
                  )}
                </List.Content>
              )}
            </List.Item>
          </Routes.Link>
        );
      })}
    {isLoggedIn && (
      <List.Item>
        <List.Header>
          <Icon name="plus" />
          Add a new territory
        </List.Header>
      </List.Item>
    )}
  </List>
);

export default compose(
  withAuth,
  withCurrentDate,
  withCurrentNation,
  withRouter
)(Territories);
