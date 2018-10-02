import * as React from 'react';
import { api, Entity } from '@chronoscio/api';
import dynamic from 'next/dynamic';
import { Provider } from 'react-contextual';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'semantic-ui-css/semantic.min.css';

import LeftPane from '../components/LeftPane';
import { withEditTerritoryStore } from '../components/EditTerritory/decorators/withEditTerritoryStore';

// Lazy-load the map on the client-side
// @TODO Figure how to dynamic import with TypeScript
// @ts-ignore
// @see https://github.com/zeit/next.js/issues/4515
const MainMap = dynamic(import('../components/MainMap'), { ssr: false });
// @ts-ignore
const Login = dynamic(import('../components/Login'), { ssr: false });

interface StatelessPage<P = {}> extends React.SFC<P> {
  getInitialProps?: (ctx: any) => Promise<P>;
}

export interface MapProps {
  entity?: Entity;
}

const Map: StatelessPage<MapProps> = ({ entity }) => (
  <Provider id="withEditTerritoryStore" {...withEditTerritoryStore}>
    <LeftPane entity={entity}>
      <MainMap />
    </LeftPane>
    <Login />
  </Provider>
);

Map.getInitialProps = async ctx => {
  const entityId = ctx.query.entityId;
  if (entityId) {
    const entity = await api.politicalEntities.get(entityId);
    return { entity };
  } else {
    return {};
  }
};

export default Map;
