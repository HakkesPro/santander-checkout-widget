import type { FC } from 'react';
import { Grid } from 'semantic-ui-react';
import { useAppSelector } from 'redux/redux-hooks';
import type { Config } from 'types/global-types';
import Header from './Header';

const ClassicContent:FC = () => {
  const config: Config = useAppSelector(({ context }) => context.config);

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

      <Grid.Row centered>
        <Grid.Column>
          <p>p tag</p>
        </Grid.Column>
        <Grid.Column>
          <p>p tag</p>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row textAlign="left">
        <Grid.Column>
          <p>p tag</p>
        </Grid.Column>
      </Grid.Row>

    </Grid>
  );
};

export default ClassicContent;
