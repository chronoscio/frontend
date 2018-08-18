import * as React from 'react';
import { Card, Header } from 'semantic-ui-react';
import styled from 'styled-components';

const NationHeader = styled(Header)`
  font-size: 2rem;
  margin-bottom: 0.5rem !important;
  margin-top: 0.5rem;
`;

const Mation: React.SFC<{}> = () => (
  <div>
    <NationHeader as="h1" size="huge">
      The Byzantine Empire n{Math.round(Math.random() * 100)}
    </NationHeader>
    <Card fluid={true}>
      <Card.Content>
        <Card.Meta>Description</Card.Meta>
        <Card.Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          <br />
          <br />
          <a
            href="https://en.wikipedia.org/wiki/Byzantine_Empire"
            target="_blank"
          >
            > Read more on Wikipedia
          </a>
        </Card.Description>
      </Card.Content>
    </Card>

    <Card fluid={true}>
      <Card.Content>
        <Card.Meta>Description</Card.Meta>
        <Card.Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Card.Description>
      </Card.Content>
    </Card>
  </div>
);

export default Mation;
