import * as React from 'react';
import { Button } from 'semantic-ui-react';
import styled from 'styled-components';
import { subscribe } from 'react-contextual';

import CloseButton from './CloseButton';
import UploadButton from './UploadButton';
import SubmitButton from './SubmitButton';
import {
  WithPageStoreProps,
  PAGES
} from '../LeftPane/decorators/withPageStore';

const Wrapper = styled.div`
  left: 400px;
  position: absolute;
  top: 20px;
`;

const EditTerritory: React.SFC<WithPageStoreProps> = ({
  currentPage,
  goToDefault
}) => (
  <Wrapper>
    <CloseButton />
    <Button
      content="Edit on map (coming soon...)"
      //      disabled={true}
      icon="paint brush"
      secondary={true}
      onClick={goToDefault}
    />
    <UploadButton />
    {currentPage !== PAGES.NEW_TERRITORY && <SubmitButton />}
    {console.log(currentPage)}
  </Wrapper>
);

export default subscribe('withPageStore')(EditTerritory);
