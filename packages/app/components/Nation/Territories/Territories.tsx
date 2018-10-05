import * as React from 'react';
import { compose } from 'recompose';
import { feature, featureCollection } from '@turf/helpers';
import { Icon, List, ListProps } from 'semantic-ui-react';
import { subscribe } from 'react-contextual';

import {
  EXISTING_TERRITORY,
  WithEditTerritoryStoreProps
} from '../../EditTerritory/decorators/withEditTerritoryStore';
import Routes from '../../../routes';
import withAuth, { WithAuthProps } from '../../Login/decorators/withAuth';
import withCurrentDate, {
  WithCurrentDateProps
} from '../../CurrentDate/decorators/withCurrentDate';
import withCurrentNation, {
  WithCurrentNationProps
} from '../../Nation/decorators/withCurrentNation';
import withTerritories, {
  WithTerritoriesProps
} from '../../MainMap/decorators/withTerritories';

interface TerritoriesProps
  extends ListProps,
    WithAuthProps,
    WithCurrentDateProps,
    WithCurrentNationProps,
    WithEditTerritoryStoreProps,
    WithTerritoriesProps {}

const Territories: React.SFC<TerritoriesProps> = ({
  addShapefile,
  currentDate,
  currentDateAsUrl,
  currentNation,
  isLoggedIn,
  territories
}) => (
  <List selection={true}>
    {territories ? (
      territories
        .filter(({ nationId }) => nationId === currentNation)
        .map(({ endDate: endDateFromData, geo, id, startDate }) => {
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
                      <a
                        onClick={() => {
                          addShapefile({
                            geojson: feature(geo),
                            source: EXISTING_TERRITORY
                          });
                          Routes.Router.pushRoute(
                            `/map/${currentDateAsUrl}/${currentNation}/edit`
                          );
                        }}
                      >
                        Edit
                      </a>
                    )}
                  </List.Content>
                )}
              </List.Item>
            </Routes.Link>
          );
        })
    ) : (
      <p>No territories to show.</p>
    )}
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
  withTerritories,
  subscribe('withEditTerritoryStore')
)(Territories);
