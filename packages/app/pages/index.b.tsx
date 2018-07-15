import * as React from 'react';
import dynamic from 'next/dynamic';

// TODO Figure how to dynamic import with TypeScript
// @ts-ignore
const MainMap = dynamic(import('../components/MainMap'));

const Index = () => (
  <div>
    <MainMap />
  </div>
);

export default Index;
