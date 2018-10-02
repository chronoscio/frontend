import { compose, withHandlers } from 'recompose';

import Routes from '../../../routes';
import withCurrentDate, {
  WithCurrentDateProps
} from '../../CurrentDate/decorators/withCurrentDate';

export interface WithGoToWelcomeProps {
  goToWelcome(): void;
}

/**
 * Decorator that adds a `goToWelcome` function, to navigate to the welcome
 * page.
 */
export default compose(
  withCurrentDate,
  withHandlers<WithCurrentDateProps, WithGoToWelcomeProps>({
    goToWelcome: ({ currentDateAsUrl }) => () =>
      Routes.Router.pushRoute(`/map/${currentDateAsUrl}`)
  })
);
