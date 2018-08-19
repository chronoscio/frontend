import { compose, mapProps } from 'recompose';

import withCurrentDate, {
  WithCurrentDateProps
} from '../../decorators/withCurrentDate';
import { WithFetchTerritoriesProps } from './withFetchTerritories';

/**
 * Filter the territories to only show those that are active given the date in
 * the URL.
 */
export default compose(
  withCurrentDate,
  mapProps<{}, WithCurrentDateProps & WithFetchTerritoriesProps>(
    ({ currentDate, territories, ...otherProps }) => ({
      ...otherProps,
      territories: territories.filter(({ endDate, startDate }) => {
        const start = new Date(startDate);
        const end = endDate ? new Date(endDate) : new Date();

        return currentDate >= start && currentDate <= end;
      })
    })
  )
);
