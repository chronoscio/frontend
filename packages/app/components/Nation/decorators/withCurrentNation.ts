import { compose, mapProps } from 'recompose';
import { withRouter } from 'next/router';

export interface WithCurrentNationProps {
  currentNation: string;
}

/**
 * HOC which takes the current date from the URL (/map/yyyy/mm/dd/nation_id), and adds a
 * prop in the wrapped component called `nation`.
 */
export default compose(
  withRouter,
  mapProps(({ router: { query: { entityId } }, ...otherProps }) => ({
    ...otherProps,
    currentNation: entityId
  }))
);
