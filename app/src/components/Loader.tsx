import type { FC } from 'react';
import { Placeholder } from 'semantic-ui-react';

interface Props {
  containerWidth: string,
  containerHeight: string
}

const Loader:FC<Props> = ({ containerWidth, containerHeight }): JSX.Element => (
  <Placeholder style={{ width: containerWidth, height: containerHeight }}>
    <Placeholder.Image />
  </Placeholder>
);

export default Loader;
