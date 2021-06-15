import type { FC } from 'react';
import { Grid } from 'semantic-ui-react';
import Header from './Header';
import Body from './Body';
import { useAppSelector } from 'redux/redux-hooks';
import type { Theme, Translations } from 'types/global-types';

interface Props {}

const Content:FC<Props> = (): JSX.Element => {
  const theme: Theme = useAppSelector(({ context }) => context.theme);
  const translations: Translations = useAppSelector(({ context }) => context.translations);

  return (
    <Grid
      padded
      style={{ height: '100%' }}
      textAlign="center"
      columns={2}
      stretched
      verticalAlign="middle"
    >
      <Header
        theme={theme}
        translations={translations}
      />

      <Body
        translations={translations}
      />

      <Grid.Row
        columns={1}
        textAlign="left"
      >
        <Grid.Column textAlign="left">
          <p style={{ fontSize: theme.footerFontSize }}>{ translations.footer }</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Content;
