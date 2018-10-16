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
import { WithPageStoreProps } from '../../LeftPane/decorators/withPageStore';

interface TerritoriesProps
  extends ListProps,
    WithAuthProps,
    WithPageStoreProps,
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
  territories,
  goToAddTerritory
}) => (
  <List selection={true}>
    {territories ? (
      territories
        .filter(({ polentId }) => polentId === currentNation)
        .map(({ endDate: endDateFromData, geo, id, startDate }) => {
          // If no endDate is specified, we consider it today
          const endDate = endDateFromData ? endDateFromData : new Date();

          // Is current territory shown on map?
          const isActive = currentDate >= startDate && currentDate <= endDate;

          const Wrapper = isActive ? 'div' : Routes.Link;

          return (
            <Wrapper
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
            </Wrapper>
          );
        })
    ) : (
      <p>No territories to show.</p>
    )}
    {isLoggedIn && (
      <List.Item>
        <List.Header onClick={goToAddTerritory}>
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
