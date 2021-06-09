import type { FC } from 'react';
import { Grid } from 'semantic-ui-react';
import type { Config } from 'types/global-types';
import Logo from '../Logo';

interface Props {
  config: Config
}

const Header:FC<Props> = ({ config }) => {
  const { headingFontSize, headingText } = config;
  const isIntFont: boolean = typeof headingFontSize === 'number';

  const fontSize = {
    fontSize: isIntFont ? `${headingFontSize}px` : headingFontSize,
  };

  return (
    <Grid.Row>
      <Grid.Column textAlign="left">
        <p style={fontSize}>{ headingText }</p>
      </Grid.Column>
      <Grid.Column style={{ placeItems: 'flex-end' }} textAlign="right">
        <Logo />
      </Grid.Column>
    </Grid.Row>
  );
};

export default Header;
