import * as React from 'react';
import { Card } from 'semantic-ui-react';

import Routes from '../../routes';
import withCurrentDate, {
  WithCurrentDateProps
} from './decorators/withCurrentDate';

interface CurrentDateState {
  date: string;
}

const today = new Date().toISOString().split('T')[0];

class CurrentDate extends React.PureComponent<
  WithCurrentDateProps,
  CurrentDateState
> {
  state = { date: '' };

  static getDerivedStateFromProps({ currentDate }: WithCurrentDateProps) {
    return {
      date: currentDate.toISOString().split('T')[0]
    };
  }

  handleChangeDate = ({
    target: { value }
  }: React.ChangeEvent<HTMLInputElement>) => {
    if (value) {
      Routes.Router.pushRoute(`/map/${value.replace(/-/g, '/')}`); // Value will be a date in yyyy-mm-dd format
      return;
    }
    this.setState({ date: value });
  };

  render() {
    const { date } = this.state;
    return (
      <Card fluid={true}>
        <Card.Content>
          <Card.Meta>Current year</Card.Meta>
          <Card.Description textAlign="center">
            <input
              max={today}
              min="01-01-0000"
              onChange={this.handleChangeDate}
              required={true}
              type="date"
              value={date}
            />
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

export default withCurrentDate(CurrentDate);
