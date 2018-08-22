import { withProps } from 'recompose';

import mockData, { Territory } from '../../mockData';

export interface WithFetchTerritoriesProps {
  territories: Territory[];
}

/**
 * Fetch territories from the backend. For now we are using mock data.
 */
export default withProps(() => ({
  territories: mockData
}));
