import type { FC } from 'react';
import { Grid } from 'semantic-ui-react';
import { useAppSelector } from 'redux/redux-hooks';
import type { Config, Theme, Translations } from 'types/global-types';
import Header from './Header';
import Selections from './Selections';
import Footer from './Footer';

const ClassicContent:FC = () => {
  const config: Config = useAppSelector(({ context }) => context.config);
  const theme: Theme = useAppSelector(({ context }) => context.theme);
  const translations: Translations = useAppSelector(({ context }) => context.translations);

  return (
    <Grid
      padded
      stretched
      divided={false}
      columns={2}
      verticalAlign="middle"
      style={{ height: '100%' }}
    >
      <Header header={translations.header} config={config} />

      <Selections translations={translations} theme={theme} config={config} />

      <Footer
        translations={translations}
        theme={theme}
        localeId={config.localeId}
        effectiveInterestRate={config.effectiveInterestRate}
      />

    </Grid>
  );
};

export default ClassicContent;
