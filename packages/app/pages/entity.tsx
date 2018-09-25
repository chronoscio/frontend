import * as React from 'react';
import dynamic from 'next/dynamic';
import { Provider } from 'react-contextual';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'semantic-ui-forest-themes/semantic.chubby.min.css';
import { Card, Header, Statistic } from 'semantic-ui-react';
import styled from 'styled-components';

import withCurrentDate from '../components/CurrentDate/decorators/withCurrentDate';
import withFetchEntities from '../components/MainMap/decorators/withFetchEntities';
import withCurrentNation from '../components/Nation/decorators/withCurrentNation';

// @ts-ignore
const Nation = dynamic(import('../components/Nation'), { ssr: false })


const Entity = () => (
  <Nation />
);

export default Entity;
