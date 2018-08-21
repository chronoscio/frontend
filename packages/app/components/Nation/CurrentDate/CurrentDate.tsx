import * as React from 'react';
import { Card } from 'semantic-ui-react';

import Routes from '../../../routes';
import withCurrentDate, {
  WithCurrentDateProps
} from '../../decorators/withCurrentDate';

const today = new Date().toISOString().split('T')[0];

const handleChangeDate = ({
  target: { value }
}: React.ChangeEvent<HTMLInputElement>) => {
  Routes.Router.pushRoute(`/map/${value.replace(/-/g, '/')}`); // Value will be a date in yyyy-mm-dd format
};

const CurrentDate: React.SFC<WithCurrentDateProps> = ({ currentDate }) => (
  <Card fluid={true}>
    <Card.Content>
      <Card.Meta>Current year</Card.Meta>
      <Card.Description textAlign="center">
        <input
          max={today}
          min="01-01-0000"
          onChange={handleChangeDate}
          required
          type="date"
          value={currentDate.toISOString().split('T')[0]}
        />
      </Card.Description>
    </Card.Content>
  </Card>
);

export default withCurrentDate(CurrentDate);
