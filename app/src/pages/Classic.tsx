/* eslint-disable max-len */
import type { FC } from 'react';
import WidgetContainer from 'components/WidgetContainer';
import Content from 'components/Classic/Content';

const Classic:FC = () => {
  createStyleTag();
  return (
    <WidgetContainer id="classic-container">
      <Content />
    </WidgetContainer>
  );
};

const createStyleTag = () => {
  const style = document.createElement('style');
  style.innerText = `
#classic-container > div > div.left.aligned.one.column.row > div > p {
  display: flex;
  align-items: center;
}

#classic-container .ui.grid > .row {
  min-height: 25px;
}
#classic-container > div > div:nth-child(1) > div.eight.wide.column > div > div > div:nth-child(2) > div > i {
  margin: 0 0 0 0.5em;
}
  `;
  window.self.document.body.appendChild(style);
};

export default Classic;
