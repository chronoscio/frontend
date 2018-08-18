import { withProps } from 'recompose';

import mockData, { Territory } from '../../mockData';

export interface WithFetchTerritoriesProps {
  territories: Territory[];
}

export default withProps(() => ({
  territories: mockData
}));
