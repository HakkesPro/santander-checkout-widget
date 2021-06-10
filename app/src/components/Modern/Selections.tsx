import type { FC } from 'react';
import { Grid, Input, Dropdown } from 'semantic-ui-react';

const Selections:FC = () => {
  const txt = 'Selections page';
  return (
    <Grid.Row id="selections-modern-container" centered>
      <Grid.Column>
        <Input
          placeholder="Add value"
          label="Återbetalningstid"
          labelPosition="left corner"
          disabled
          value="12 månader"
        />
      </Grid.Column>
      <Grid.Column>
        <Dropdown
          labeled
          placeholder="Månadsbelopp"
          fluid
          selection
          options={options}
        />
      </Grid.Column>
    </Grid.Row>
  );
};

const options = [
  { key: 'angular', text: '2 4999', value: 'angular' },
  { key: 'css', text: 'CSS', value: 'css' },
  { key: 'design', text: 'Graphic Design', value: 'design' },
  { key: 'ember', text: 'Ember', value: 'ember' },
];

export default Selections;
