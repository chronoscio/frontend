import { compose, withHandlers } from 'recompose';
import { subscribe } from 'react-contextual';

import { WithEditTerritoryStoreProps } from '../../decorators/withEditTerritoryStore';
import withHandleClose, {
  WithHandleCloseProps
} from '../../CloseButton/decorators/withHandleClose';

export interface WithHandleSubmitProps {
  handleSubmit(): void;
}

export default compose(
  subscribe('withEditTerritoryStore'),
  withHandleClose,
  withHandlers<WithHandleCloseProps & WithEditTerritoryStoreProps, {}>({
    handleSubmit: ({ handleClose, shapefile }) => () => {
      console.log('SIMULATING SUBMISSION...', shapefile);
      handleClose();
    }
  })
);
