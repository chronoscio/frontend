import { api } from '@chronoscio/api';
import { withHandlers } from 'recompose';

export interface WithHandleSubmitProps {
  handleSubmit(values: object): void;
}

/**
 * HOC which submits a new political entity form.
 */
export default withHandlers<{}, WithHandleSubmitProps>({
  handleSubmit: () => async (values: object) => {
    console.log(await api.politicalEntities.post(values));
  }
});
