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
import { MapProps } from '../../../pages/map';

interface PageProps
  extends WithCurrentNationProps,
    WithPageStoreProps,
    MapProps {}

const Pages: React.SFC<PageProps> = ({
  currentNation,
  currentPage,
  entity
}) => {
  if (currentPage === PAGES.NEW_NATION) {
    return <NewNation />;
  }
  return currentNation ? <Nation entity={entity} /> : <Welcome />;
};

export default compose<{}, MapProps>(
  subscribe('withPageStore'),
  withCurrentNation
)(Pages);
