import { api } from '@chronoscio/api';
import { compose, withHandlers } from 'recompose';
import { subscribe } from 'react-contextual';

import withAuth, { WithAuthProps } from '../../../../Login/decorators/withAuth';
import { WithErrorStoreProps } from '../../../../Errors/decorators/withErrorStore';

export interface WithHandleSubmitProps {
  handleSubmit(values: object): void;
}

/**
 * HOC which submits a new political entity form.
 */
export default compose(
  withAuth,
  subscribe('withErrorStore'),
  withHandlers<WithAuthProps & WithErrorStoreProps, WithHandleSubmitProps>({
    handleSubmit: ({ auth: { idToken }, addError }) => async (
      values: object
    ) => {
      try {
        await api.territories.post(values, {
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
