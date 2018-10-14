import * as React from 'react';
import { api, Entity } from '@chronoscio/api';
import { NextContext } from 'next';
import dynamic from 'next/dynamic';
import { Provider } from 'react-contextual';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'semantic-ui-css/semantic.min.css';

import LeftPane from '../components/LeftPane';
import Routes from '../routes';
import { withEditTerritoryStore } from '../components/EditTerritory/decorators/withEditTerritoryStore';
import { withErrorStore } from '../components/Errors/decorators/withErrorStore';

// Lazy-load the map on the client-side
// @TODO Figure how to dynamic import with TypeScript
// @ts-ignore
// @see https://github.com/zeit/next.js/issues/4515
const MainMap = dynamic(import('../components/MainMap'), { ssr: false });
// @ts-ignore
const Errors = dynamic(import('../components/Errors'), { ssr: false });
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
    <Provider id="withErrorStore" {...withErrorStore}>
      <LeftPane entity={entity}>
        <MainMap />
      </LeftPane>
      <Login />
      <Errors />
    </Provider>
  </Provider>
);

Map.getInitialProps = async (ctx: NextContext) => {
  const { day, entityId, month, year } = ctx.query;
  if (entityId) {
    try {
      const entity = await api.politicalEntities.get(entityId as string);
      return { entity };
    } catch (e) {
      // Fails when we don't have an entity, we redirect
      // https://github.com/zeit/next.js/wiki/Redirecting-in-%60getInitialProps%60
      if (ctx.res) {
        ctx.res.writeHead(302, {
          Location: `/map/${year}/${month}/${day}`
        });
        ctx.res.end();
      } else {
        Routes.Router.pushRoute(`/map/${year}/${month}/${day}`);
      }
    }
  } else {
    return {};
  }
};

export default Map;
