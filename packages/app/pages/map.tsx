import * as React from 'react';
import dynamic from 'next/dynamic';
import { Provider } from 'react-contextual';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'rc-slider/assets/index.css';
import 'semantic-ui-forest-themes/semantic.chubby.min.css';

import LeftPane from '../components/LeftPane';
import { withEditModeStore } from '../components/decorators/withEditMode';

// Lazy-load the map on the client-side
// @TODO Figure how to dynamic import with TypeScript
// @ts-ignore
// @see https://github.com/zeit/next.js/issues/4515
const MainMap = dynamic(import('../components/MainMap'), { ssr: false });
// @ts-ignore
const Edit = dynamic(import('../components/MainMap/Edit'), { ssr: false });
// @ts-ignore
const Login = dynamic(import('../components/Login'), { ssr: false });
// @ts-ignore
const YearSlider = dynamic(import('../components/YearSlider'), { ssr: false });

const Map = () => (
  <Provider id="withEditModeStore" {...withEditModeStore}>
    <LeftPane>
      <MainMap />
    </LeftPane>
    <Edit />
    <YearSlider />
    <Login />
  </Provider>
);

export default Map;
