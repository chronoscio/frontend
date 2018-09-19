import * as React from 'react';
import { compose } from 'recompose';
import { subscribe } from 'react-contextual';

import Nation from '../../Nation';
import NewNation from '../../Nation/NewNation';
import { PAGES, WithPageStoreProps } from '../decorators/withPageStore';
import withCurrentNation, {
  WithCurrentNationProps
} from '../../Nation/decorators/withCurrentNation';
import Welcome from '../Welcome';

const Pages: React.SFC<WithCurrentNationProps & WithPageStoreProps> = ({
  currentNation,
  currentPage
}) => {
  if (currentPage === PAGES.NEW_NATION) {
    return <NewNation />;
  }
  return currentNation ? <Nation /> : <Welcome />;
};

export default compose(
  subscribe('withPageStore'),
  withCurrentNation
)(Pages);
