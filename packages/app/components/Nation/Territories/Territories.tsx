import * as React from 'react';
import {
  Accordion,
  AccordionAccordionProps,
  Button,
  Icon
} from 'semantic-ui-react';

import withAccordion, { WithAccordionProps } from './decorators/withAccordion';

const Territories: React.SFC<AccordionAccordionProps & WithAccordionProps> = ({
  activeIndex,
  setActiveIndex
}) => (
  <Accordion>
    <Accordion.Title
      active={activeIndex === 0}
      index={0}
      onClick={setActiveIndex}
    >
      {activeIndex === 0 && <Icon name="caret right" />}
      From 395 to 881
    </Accordion.Title>
    <Accordion.Content active={activeIndex === 0}>
      <Button size="mini">Edit</Button>
    </Accordion.Content>

    <Accordion.Title
      active={activeIndex === 1}
      index={1}
      onClick={setActiveIndex}
    >
      {activeIndex === 1 && <Icon name="caret right" />}
      From 881 to 923
    </Accordion.Title>
    <Accordion.Content active={activeIndex === 1}>
      <Button size="mini">Edit</Button>
    </Accordion.Content>

    <Accordion.Title
      active={activeIndex === 2}
      index={2}
      onClick={setActiveIndex}
    >
      {activeIndex === 2 && <Icon name="caret right" />}
      From 923 to 1024
    </Accordion.Title>
    <Accordion.Content active={activeIndex === 2}>
      <Button size="mini">Edit</Button>
    </Accordion.Content>
  </Accordion>
);

export default withAccordion(Territories);
