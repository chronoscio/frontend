import * as React from 'react';
import { Card, Statistic } from 'semantic-ui-react';

import withCurrentDate, {
  WithCurrentDateProps
} from '../../decorators/withCurrentDate';

const CurrentDate: React.SFC<WithCurrentDateProps> = ({ currentDate }) => (
  <Card fluid={true}>
    <Card.Content>
      <Card.Meta>Current year</Card.Meta>
      <Card.Description textAlign="center">
        <Statistic value={currentDate.getFullYear()} />
      </Card.Description>
    </Card.Content>
  </Card>
);

export default withCurrentDate(CurrentDate);
