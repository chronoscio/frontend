import * as React from 'react';
import dynamic from 'next/dynamic';
import { Provider } from 'react-contextual';
import axios, { AxiosResponse } from 'axios';
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

export interface Entity {
  id: umber;
  name: string;
  url_id: string;
  color: string;
  references: string[];
  aliases: string[];
  description: string;
  links: string[];
  control_type: string;
}

export interface MapProps {
  entity?: Entity;
}

const Map: StatelessPage<MapProps> = ({ entity }) => (
  <Provider {...entity}>
    <Provider id="withEditTerritoryStore" {...withEditTerritoryStore}>
      <LeftPane>
        <MainMap />
      </LeftPane>
      <Login />
    </Provider>
  </Provider>
);

Map.getInitialProps = async ctx => {
  const nation = ctx.query.nation;
  if (nation) {
    const res = await axios
      .request({
        method: 'get',
        url: `${process.env.BACKEND_API_URL}/nations/${nation}/`
      })
      .catch((err: any) => {
        console.error(err);
      })
      .then((resp: AxiosResponse) => {
        return { entity: resp.data };
      });
    return { entity: res.entity };
  } else {
    return {};
  }
};

export default Map;
