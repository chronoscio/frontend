import { compose, mapProps } from 'recompose';
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
  mapProps(({ router: { query: { day, month, year } }, ...otherProps }) => ({
    ...otherProps,
    currentDate: new Date(year, month - 1, day, 1) // Months start at 0
  }))
);
