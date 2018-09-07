import * as React from 'react';
import { Header } from 'semantic-ui-react';

const Welcome: React.SFC<{}> = () => (
  <div>
    <Header as="h1">Welcome to Chronoscio - an Open Historical Atlas</Header>

    <p>
      ChronoScio is an open-source project which aims to gather all historical
      data of humanity, and present it as a map.{' '}
    </p>
  </div>
);

export default Welcome;
