import * as React from 'react';
import { compose } from 'recompose';
import { Card, Header } from 'semantic-ui-react';
import styled from 'styled-components';

import withFetchEntities, {
  WithFetchEntitiesProps
} from '../components/MainMap/decorators/withFetchEntities';

const NationHeader = styled(Header)`
  font-size: 2rem;
  margin-bottom: 0.5rem !important;
  margin-top: 0.5rem;
`;

const NationAliases = styled(Header)`
  font-style: italic;
  margin-top: 0 !important;
  color: rgba(0, 0, 0, 0.7) !important;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;

const Nation: React.SFC<WithFetchEntitiesProps> = ({ entity }) => (
  <Wrapper>
    <div>
      <NationHeader as="h1" size="huge">
        {entity && entity.name}
      </NationHeader>
      <NationAliases as="h3" size="medium">
        {entity && entity.aliases.map(alias => alias).join(', ')}
      </NationAliases>
      <Card fluid={true}>
        <Card.Content>
          <Card.Meta>Description</Card.Meta>
          <Card.Description>
            {entity && entity.description}
            <br />
            <br />
          </Card.Description>
          <Card.Meta>Further reading</Card.Meta>
          <Card.Description>
            {entity &&
              entity.links.map(link => (
                <div>
                  <a href={link} target="_blank" key={link}>
                    > {link.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i)[1]}
                  </a>
                  <br />
                </div>
              ))}
            <br />
          </Card.Description>
          <Card.Meta>References</Card.Meta>
          <Card.Description>
            {/* TODO: parse based on medium (links, etc.) when Reference model is created */}
            {entity && entity.references.map(ref => <p>{ref}</p>)}
          </Card.Description>
        </Card.Content>
      </Card>
    </div>
  </Wrapper>
);

export default compose(withFetchEntities)(Nation);
