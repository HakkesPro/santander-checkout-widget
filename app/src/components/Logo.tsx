import type { FC } from 'react';
import { Image } from 'semantic-ui-react';
import { useAppSelector } from 'redux/redux-hooks';

const Logo:FC = () => {
  const logoUrl: string = useAppSelector(({ context }) => context.config.logoUrl);
  const logoHeight: string = useAppSelector(({ context }) => context.config.logoHeight);

  return (
    <Image
      style={{ height: logoHeight }}
      src={logoUrl}
    />
  );
};

export default Logo;
