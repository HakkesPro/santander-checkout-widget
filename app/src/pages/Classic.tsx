import type { FC } from 'react';
import WidgetContainer from 'components/WidgetContainer';
import Content from 'components/Classic/Content';

const Classic:FC = () => (
  <WidgetContainer id="classic-container">
    <Content />
  </WidgetContainer>
);

export default Classic;
