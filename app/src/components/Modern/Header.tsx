import type { FC } from 'react';
import { Grid } from 'semantic-ui-react';
import type { Config } from 'types/global-types';
import Logo from '../Logo';

interface Props {
  config: Config
}

const Header:FC<Props> = ({ config }) => {
  const { headerFontSize, headerText } = config;
  const isIntFont: boolean = typeof headerFontSize === 'number';

  const fontSize = {
    fontSize: isIntFont ? `${headerFontSize}px` : headerFontSize,
  };

  return (
    <Grid.Row>
      <Grid.Column textAlign="left">
        <p style={fontSize}>{ headerText }</p>
      </Grid.Column>
      <Grid.Column style={{ placeItems: 'flex-end' }} textAlign="right">
        <Logo />
      </Grid.Column>
    </Grid.Row>
  );
};

export default Header;
