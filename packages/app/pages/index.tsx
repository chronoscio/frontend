import * as React from 'react';
import dynamic from 'next/dynamic';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'semantic-ui-css/semantic.min.css';

import Login from '../components/Login';

// Lazy-load the map on the client-side
// @TODO Figure how to dynamic import with TypeScript
// @ts-ignore
// @see https://github.com/zeit/next.js/issues/4515
const MainMap = dynamic(import('../components/MainMap'), { ssr: false });

const Index = () => (
  <div>
    <MainMap />
    <Login />
  </div>
);

export default Index;
