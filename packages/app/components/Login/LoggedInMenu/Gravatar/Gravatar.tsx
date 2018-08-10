import * as React from 'react';
import { Image } from 'semantic-ui-react';
import * as md5 from 'md5';

interface GravatarProps {
  email: string;
  size?: number;
}

/**
 * Show the Gravatar of an email.
 * @note Might be temporary, we can let the user upload his picture when the
 * backend is ready for it.
 */
const Gravatar = ({ email, size = 48 }: GravatarProps) => (
  <Image
    circular
    src={`https://www.gravatar.com/avatar/${md5(
      email.toLowerCase().trim()
    )}?size=${size}`}
  />
);

export default Gravatar;
