import { withProps } from 'recompose';

import mockData, { Territory } from '../../mockData';

export interface withFetchTerritoriesProps {
  territories: Territory[];
}

export default withProps(() => ({
  territories: mockData
}));
