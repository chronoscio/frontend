import * as React from 'react';
import { Button, Icon, List, ListProps } from 'semantic-ui-react';
import { withRouter, WithRouterProps } from 'next/router';

import mockData from '../../mockData';

const Territories: React.SFC<ListProps & WithRouterProps> = ({
  router: {
    query: { day, month, year }
  }
}) => (
  <List selection={true}>
    {mockData.map(({ endDate, id, startDate }) => {
      const start = new Date(startDate);
      const end = endDate ? new Date(endDate) : new Date();
      const currentDate = new Date(`${year}-${month}-${day}`);

      const isActive = currentDate >= start && currentDate <= end;
      return (
        <List.Item key={id}>
          {isActive && (
            <List.Content floated="right">
              <Button size="mini">Edit</Button>
            </List.Content>
          )}
          <List.Header>
            {isActive && <Icon name="caret right" />}
            From {new Date(startDate).getFullYear()} to{' '}
            {endDate ? new Date(endDate).getFullYear() : 'today'}
          </List.Header>
          {isActive && <List.Content>Shown on map</List.Content>}
        </List.Item>
      );
    })}
  </List>
);

export default withRouter(Territories);
