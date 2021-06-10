import type { FC } from 'react';
import { Grid } from 'semantic-ui-react';
import type { Theme, Translations } from 'types/global-types';

interface Props {
  translations: Translations,
  theme: Theme
}

const Footer:FC<Props> = ({ translations, theme }): JSX.Element => {
  const txt = 'Footer page';
  return (
    <Grid.Row columns={1} textAlign="left">
      <Grid.Column>
        <p style={{ fontSize: theme.footerFontSize }}>
          { translations.footer }
        </p>
      </Grid.Column>
    </Grid.Row>
  );
};

export default Footer;
