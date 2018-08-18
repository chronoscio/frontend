import { compose, mapProps } from 'recompose';
import { withRouter, WithRouterProps } from 'next/router';

import { WithFetchTerritoriesProps } from './withFetchTerritories';

/**
 * Filter the territories to only show those that are active given the date in
 * the URL.
 */
export default compose(
  withRouter,
  mapProps<{}, WithRouterProps & WithFetchTerritoriesProps>(
    ({
      router: {
        query: { day, month, year }
      },
      territories,
      ...otherProps
    }) => ({
      ...otherProps,
      territories: territories.filter(({ endDate, startDate }) => {
        const start = new Date(startDate);
        const end = endDate ? new Date(endDate) : new Date();
        const current = new Date(`${day}-${month}-${year}`);

        return current >= start && current <= end;
      })
    })
  )
);
