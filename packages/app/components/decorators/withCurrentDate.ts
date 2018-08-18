import { compose, withProps } from 'recompose';
import { withRouter } from 'next/router';

export interface WithCurrentDateProps {
  currentDate: Date;
}

export default compose(
  withRouter,
  withProps(({ router: { query: { day, month, year } } }) => ({
    currentDate: new Date(`${day}-${month}-${year}`)
  }))
);
