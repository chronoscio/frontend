import * as React from 'react';
import { BackButton } from '@chronoscio/ui';
import { Card, Header } from 'semantic-ui-react';
import styled from 'styled-components';

import Territories from './Territories';
import withGoToWelcome, {
  WithGoToWelcomeProps
} from './decorators/withGoToWelcome';
import { MapProps } from '../../pages/map';

const NationHeader = styled(Header)`
  font-size: 2rem;
  margin-bottom: 0.5rem !important;
  margin-top: 0.5rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;

const MetadataSection = styled.div`
  .description:not(:last-child) {
    margin-bottom: 1em;
  }
`;

interface NationProps extends WithGoToWelcomeProps, MapProps {}

const Nation: React.SFC<NationProps> = ({ goToWelcome, entity }) => (
  <div>
    <BackButton onClick={goToWelcome} />
    <Wrapper>
      <div>
        <NationHeader as="h1" size="huge">
          {entity && entity.name}
        </NationHeader>
        <Card fluid={true}>
          <Card.Content>
            <MetadataSection>
              <Card.Meta>Description</Card.Meta>
              <Card.Description>
                {entity && entity.description}
              </Card.Description>
              <Card.Meta>Further reading</Card.Meta>
              <Card.Description>
                {entity &&
                  entity.links.map(link => (
                    <a href={link} key={link} target="_blank">
                      > {link.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i)[1]}
                    </a>
                  ))}
              </Card.Description>
            </MetadataSection>
          </Card.Content>
        </Card>

        <Card fluid={true}>
          <Card.Content>
            <Card.Meta>Territory evolution</Card.Meta>
            <Card.Description>
              <Territories />
            </Card.Description>
          </Card.Content>
        </Card>
      </div>
    </Wrapper>
  </div>
);

export default withGoToWelcome(Nation);
