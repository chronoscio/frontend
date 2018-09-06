import { compose, mapProps, withProps } from 'recompose';

import mockData, { Territory } from '../../mockData';
import withCurrentDate, {
  WithCurrentDateProps
} from '../../CurrentDate/decorators/withCurrentDate';
import { WithFetchTerritoriesProps } from './withFetchTerritories';

export interface WithFetchTerritoriesProps {
  territories: Territory[];
}

/**
 * Fetch territories from the backend. For now we are using mock data.
 */
export default compose(
  withProps(() => ({
    territories: mockData
  })),
  withCurrentDate,
  mapProps<{}, WithCurrentDateProps & WithFetchTerritoriesProps>(
    ({ currentDate, territories, ...otherProps }) => ({
      ...otherProps,
      territories: territories.filter(
        ({ endDate, startDate }) =>
          currentDate >= startDate && currentDate <= (endDate || new Date())
      )
    })
  )
);
