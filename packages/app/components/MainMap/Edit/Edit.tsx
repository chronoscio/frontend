import * as React from 'react';
import { Button } from 'semantic-ui-react';
import { compose } from 'recompose';
import styled from 'styled-components';

import withAuth, { WithAuthProps } from '../../Login/decorators/withAuth';
import withEditMode, { WithEditModeProps } from '../../decorators/withEditMode';

const Wrapper = styled.div`
  left: 400px;
  position: absolute;
  top: 20px;
`;

const Edit: React.SFC<WithAuthProps & WithEditModeProps> = ({
  closeEditMode,
  isEditMode,
  isLoggedIn,
  openEditMode
}) =>
  isLoggedIn && (
    <Wrapper>
      {isEditMode ? (
        <span>
          <Button onClick={closeEditMode}>Cancel</Button>
          <Button onClick={closeEditMode} primary>
            Save
          </Button>
        </span>
      ) : (
        <Button
          content="Edit this territory"
          icon="edit"
          onClick={openEditMode}
          primary
        />
      )}
    </Wrapper>
  );

export default compose(
  withAuth,
  withEditMode
)(Edit);
