import { withStateHandlers } from 'recompose';
import { AccordionTitleProps } from 'semantic-ui-react';

export interface WithAccordionProps {
  activeIndex: number;
  setActiveIndex(event: any, data: AccordionTitleProps): void;
}

export default withStateHandlers(
  { activeIndex: 1 },
  {
    setActiveIndex: ({ activeIndex }) => (
      _: any,
      { index }: AccordionTitleProps
    ) => ({
      activeIndex: activeIndex === index ? -1 : (index as number)
    })
  }
);
