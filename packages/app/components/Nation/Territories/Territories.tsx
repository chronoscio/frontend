import * as React from 'react';
import { Button, Icon, List, ListProps } from 'semantic-ui-react';
import { compose } from 'recompose';
import Routes from '../../../routes';
import { WithRouterProps } from 'next/router';

import mockData from '../../mockData';
import withCurrentDate from '../../decorators/withCurrentDate';
import withEditMode, { withEditModeProps } from '../../decorators/withEditMode';

const Territories: React.SFC<
  ListProps & withEditModeProps & WithRouterProps
> = ({ currentDate: current, isEditMode, openEditMode }) => (
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
            {isActive &&
              !isEditMode && (
                <List.Content floated="right">
                  <Button onClick={openEditMode} size="mini">
                    Edit
                  </Button>
                </List.Content>
              )}
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
