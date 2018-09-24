import * as React from 'react';
import { Image } from 'semantic-ui-react';
import withAuth, { WithAuthProps } from '../../decorators/withAuth';

/**
 * Show the avatar of a user.
 */
const Avatar: React.SFC<WithAuthProps> = ({ loggedInUser }) => (
  <Image
    circular={true}
    size="mini"
    src={loggedInUser && loggedInUser.picture}
  />
);

export default withAuth(Avatar);
