import { withHandlers } from 'recompose';

import Routes from '../../../../routes';

export interface WithHandleCloseProps {
  handleClose(): void;
}

export default withHandlers({
  handleClose: () => () => {
    // Navigate to the correct URL
    const { day, entityId, month, year } = Routes.Router.router.query;
    Routes.Router.pushRoute(`/map/${year}/${month}/${day}/${entityId}`);
  }
});
