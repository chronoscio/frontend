import * as React from 'react';
import { Image } from 'semantic-ui-react';
import * as md5 from 'md5';

interface GravatarProps {
  email: string;
  size?: number;
}

const Gravatar = ({ email, size = 48 }: GravatarProps) => (
  <Image
    circular
    src={`https://www.gravatar.com/avatar/${md5(
      email.toLowerCase().trim()
    )}?size=${size}`}
  />
);

export default Gravatar;
