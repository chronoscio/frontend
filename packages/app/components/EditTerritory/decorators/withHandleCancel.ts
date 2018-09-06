import { withHandlers } from 'recompose';

import Routes from '../../../routes';

export interface WithHandleCancelProps {
  handleCancel(): void;
}

export default withHandlers({
  handleCancel: () => () => {
    // Navigate to the correct URL
    const { day, month, nation, year } = Routes.Router.router.query;
    Routes.Router.pushRoute(`/map/${year}/${month}/${day}/${nation}`);
  }
});
