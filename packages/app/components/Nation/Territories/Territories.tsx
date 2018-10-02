import * as React from 'react';
import { compose } from 'recompose';
import { Icon, List, ListProps } from 'semantic-ui-react';

import withAuth, { WithAuthProps } from '../../Login/decorators/withAuth';
import Routes from '../../../routes';
import withCurrentDate, {
  WithCurrentDateProps
} from '../../CurrentDate/decorators/withCurrentDate';
import withCurrentNation, {
  WithCurrentNationProps
} from '../../Nation/decorators/withCurrentNation';
import withTerritories, {
  WithTerritoriesProps
} from '../../MainMap/decorators/withTerritories';

const Territories: React.SFC<
  ListProps &
    WithAuthProps &
    WithCurrentDateProps &
    WithCurrentNationProps &
    WithTerritoriesProps
> = ({
  currentDate,
  currentDateAsUrl,
  currentNation,
  isLoggedIn,
  territories
}) => (
  <List selection={true}>
    {territories &&
      territories
        .filter(({ nationId }) => nationId === currentNation)
        .map(({ endDate: endDateFromData, id, startDate }) => {
          // If no endDate is specified, we consider it today
          const endDate = endDateFromData ? endDateFromData : new Date();

          // Get active territories
          const isActive = currentDate >= startDate && currentDate <= endDate;

          return (
            <Routes.Link
              key={id}
              route={`/map/${currentDateAsUrl}/${currentNation}`}
            >
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
                        route={`/map/${currentDateAsUrl}/${currentNation}/edit`}
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
  withTerritories
)(Territories);
