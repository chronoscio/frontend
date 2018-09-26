import * as React from 'react';
import { compose } from 'recompose';
import { subscribe } from 'react-contextual';
import styled from 'styled-components';

import { BackButton } from '@chronoscio/ui';
import withGoToWelcome, {
  WithGoToWelcomeProps
} from '../../Nation/decorators/withGoToWelcome';
import Nation from '../../Nation';
import NewNation from '../../Nation/NewNation';
import { PAGES, WithPageStoreProps } from '../decorators/withPageStore';
import withCurrentNation, {
  WithCurrentNationProps
} from '../../Nation/decorators/withCurrentNation';
import Welcome from '../Welcome';

const FrameCont = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 60vh;
  overflow: hidden;
`;

const Frame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
`;

const Pages: React.SFC<
  WithCurrentNationProps & WithPageStoreProps & WithGoToWelcomeProps
> = ({ currentNation, currentPage, goToWelcome }) => {
  if (currentPage === PAGES.NEW_NATION) {
    return <NewNation />;
  }
  return currentNation ? (
    <div>
      <BackButton onClick={goToWelcome} />
      <br />
      <br />
      <FrameCont>
        <Frame src={`/entity/${currentNation}`} />
      </FrameCont>
      <Nation />
    </div>
  ) : (
    <Welcome />
  );
};

export default compose(
  subscribe('withPageStore'),
  withCurrentNation,
  withGoToWelcome
)(Pages);
