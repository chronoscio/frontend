import * as React from 'react';
import { compose } from 'recompose';
import { Card, Header } from 'semantic-ui-react';
import styled from 'styled-components';

import Territories from './Territories';
import withFetchEntities, { WithFetchEntitiesProps } from '../MainMap/decorators/withFetchEntities';

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

const Nation: React.SFC<
  WithFetchEntitiesProps
  > = ({
  entity
}) => (
  <Wrapper>
    <div>
      <NationHeader as="h1" size="huge">
            {entity &&
              entity.name
            }
      </NationHeader>
      <Card fluid={true}>
        <Card.Content>
          <Card.Meta>Description</Card.Meta>
          <Card.Description>
            {entity &&
              entity.description
            }
            <br />
                <br />
                <Card.Meta>Further reading</Card.Meta>

                {entity &&
                  entity.links.map(link => (
                    <a href={link} target="_blank">> {
                      link.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i)[1]
                    }</a>
            ))}
          </Card.Description>
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
);

export default compose(
  withFetchEntities
)(Nation);
