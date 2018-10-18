import { api, setConfig } from '@chronoscio/api';
import { compose, withProps } from 'recompose';
import { subscribe } from 'react-contextual';

import { WithErrorStoreProps } from '../Errors/decorators/withErrorStore';
import withAuth, { WithAuthProps } from '../Login/decorators/withAuth';

export interface WithApiProps {
  api: typeof api;
}

/**
 * Helper HOC that will inject `api` into props, and that api object will
 * handle:
 * - access token injection when available
 * - display error message on api error
 */
export default compose(
  withAuth,
  subscribe('withErrorStore'),
  withProps<{}, WithErrorStoreProps & WithAuthProps>(({ addError, auth }) => {
    // Set some config for the api, that with be used app-wide
    setConfig({
      baseAxiosConfig: auth
        ? {
            headers: {
              Authorization: `Bearer ${auth.idToken}`
            }
          }
        : {},
      onError: (err: Error) => {
        addError(err);
      }
    });
    return {};
  }),
  withProps(() => ({
    api
  }))
);
