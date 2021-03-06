import * as React from 'react';
import { Message } from 'semantic-ui-react';
import { compose } from 'recompose';
import styled from 'styled-components';
import { subscribe } from 'react-contextual';

import { WithErrorStoreProps } from './decorators/withErrorStore';

/**
 * Wrapper to create a div on the top right corner.
 */
const Wrapper = styled.div`
  bottom: 0;
  padding: 20px;
  position: absolute;
  right: 0;
  width: 250px;
`;

const Errors: React.SFC<WithErrorStoreProps> = ({ errors, removeError }) =>
  errors ? (
    <Wrapper>
      {errors.map((err, index) => (
        <Message
          content={err.message}
          onDismiss={() => removeError(index)}
          error
          key={Math.random()}
        />
      ))}
    </Wrapper>
  ) : null;

export default compose(subscribe('withErrorStore'))(Errors);
