import * as React from 'react';
import { Image } from 'semantic-ui-react';
import * as md5 from 'md5';

interface GravatarProps {
  email: string;
}

const Gravatar = ({ email }: GravatarProps) => (
  <Image
    src={`https://www.gravatar.com/avatar/${md5(
      email.toLowerCase().trim()
    )}?size=32`}
  />
);

export default Gravatar;
