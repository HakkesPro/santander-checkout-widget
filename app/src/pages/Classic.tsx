import type { FC } from 'react';
import WidgetContainer from 'components/WidgetContainer';

const Classic:FC = () => {
  const txt = 'Classic page';
  return (
    <WidgetContainer>
      <h1>{txt}</h1>
    </WidgetContainer>
  );
};

export default Classic;
