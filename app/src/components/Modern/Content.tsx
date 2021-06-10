import type { FC } from 'react';
import { Grid } from 'semantic-ui-react';
import { useAppSelector } from 'redux/redux-hooks';
import type { Config, Theme } from 'types/global-types';
import Header from './Header';
import Selections from './Selections';

const ClassicContent:FC = () => {
  const config: Config = useAppSelector(({ context }) => context.config);
  const theme: Theme = useAppSelector(({ context }) => context.theme);

  // console.log(config);

  return (
    <Grid
      padded
      stretched
      divided={false}
      columns={2}
      verticalAlign="middle"
      style={{ height: '100%' }}
    >
      <Header config={config} />

      <Selections />

      <Grid.Row columns={1} textAlign="left">
        <Grid.Column>
          <p style={{ fontSize: theme.footerFontSize }}>
            { config.footerText }
          </p>
        </Grid.Column>
      </Grid.Row>

    </Grid>
  );
};

export default ClassicContent;
