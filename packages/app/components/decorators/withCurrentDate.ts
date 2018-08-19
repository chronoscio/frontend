import { compose, withProps } from 'recompose';
import { withRouter } from 'next/router';

export interface WithCurrentDateProps {
  currentDate: Date;
}

/**
 * HOC which takes the current date from the URL (/map/yyyy/mm/dd), and adds a
 * prop in the wrapped component called `currentDate`.
 */
export default compose(
  withRouter,
  withProps(({ router: { query: { day, month, year } } }) => ({
    currentDate: new Date(`${day}-${month}-${year}`)
  }))
);
