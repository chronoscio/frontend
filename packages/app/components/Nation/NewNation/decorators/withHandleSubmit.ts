import { compose, withHandlers } from 'recompose';

import withApi, { WithApiProps } from '../../../decorators/withApi';

export interface WithHandleSubmitProps {
  handleSubmit(values: object): void;
}

/**
 * HOC which submits a new political entity form.
 */
export default compose(
  withApi,
  withHandlers<WithApiProps, WithHandleSubmitProps>({
    handleSubmit: ({ api }) => async (values: object) => {
      await api.politicalEntities.post(values);
    }
  })
);
