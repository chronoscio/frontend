import * as React from 'react';
import { Container } from 'semantic-ui-react';
import Slider from 'rc-slider';
import styled from 'styled-components';
import Routes from '../../routes';

import withCurrentDate, {
  WithCurrentDateProps
} from '../decorators/withCurrentDate';

const Wrapper = styled(Container)`
  display: flex !important;
  align-items: center;
  bottom: 20px;
  flex-direction: column;
  position: absolute;
`;

const StyledSlider = styled(Slider)`
  width: 600px;
`;

const YearSlider: React.SFC<WithCurrentDateProps> = ({ currentDate }) => (
  <Wrapper fluid>
    <StyledSlider
      defaultValue={currentDate.getFullYear()}
      handleStyle={{
        borderColor: 'white',
        height: 28,
        width: 28,
        marginLeft: -14,
        marginTop: -9,
        backgroundColor: 'black'
      }}
      max={2018}
      min={0}
      onAfterChange={year => Routes.Router.push(`/map/${year}/01/01/`)}
      railStyle={{ backgroundColor: 'grey', height: 10 }}
      trackStyle={{ backgroundColor: 'black', height: 10 }}
    />
  </Wrapper>
);

export default withCurrentDate(YearSlider);
