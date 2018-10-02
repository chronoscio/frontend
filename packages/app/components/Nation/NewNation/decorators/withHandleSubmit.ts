import { api } from '@chronoscio/api';
import { compose, withHandlers } from 'recompose';

import withAuth, { WithAuthProps } from '../../../Login/decorators/withAuth';

export interface WithHandleSubmitProps {
  handleSubmit(values: object): void;
}

/**
 * HOC which submits a new political entity form.
 */
export default compose(
  withAuth,
  withHandlers<WithAuthProps, WithHandleSubmitProps>({
    handleSubmit: ({ auth: { idToken } }) => async (values: object) => {
      console.log(
        await api.politicalEntities.post(values, {
          headers: {
            Authorization: `Bearer ${idToken}`
          }
        })
      );
    }
  })
);
