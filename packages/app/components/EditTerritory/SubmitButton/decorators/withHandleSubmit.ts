import { api } from '@chronoscio/api';
import { compose, withHandlers } from 'recompose';
import { subscribe } from 'react-contextual';

import { WithEditTerritoryStoreProps } from '../../decorators/withEditTerritoryStore';
import withHandleClose, {
  WithHandleCloseProps
} from '../../CloseButton/decorators/withHandleClose';
import withAuth, { WithAuthProps } from '../../../Login/decorators/withAuth';
import { WithErrorStoreProps } from '../../../Errors/decorators/withErrorStore';

export interface WithHandleSubmitProps {
  handleSubmit(NAME: object): void; // TODO update name
}

export default compose(
  subscribe('withEditTerritoryStore'),
  subscribe('withErrorStore'),
  withHandleClose,
  withAuth,
  withHandlers<WithHandleCloseProps & WithEditTerritoryStoreProps & WithAuthProps & WithErrorStoreProps, WithHandleSubmitProps>({
    handleSubmit: ({ handleClose, shapefile, auth: { idToken }, addError }) => async (
    ) => {
      console.log('SIMULATING SUBMISSION...', shapefile);
      // handleClose();
      try {
        await api.territories.post({geo: JSON.stringify(shapefile.geojson)}, { // need to do for all data
          headers: {
            Authorization: `Bearer ${idToken}`
          }
        });
      } catch (err) {
        console.log('HELLO', addError);
        addError(err);
      }
    }
  })
);
