import type { FC } from 'react';
import WidgetContainer from 'components/WidgetContainer';
import Content from 'components/Modern/Content';

const Modern:FC = () => {
  createStyleTag();
  return (
    <WidgetContainer id="modern-container">
      <Content />
    </WidgetContainer>
  );
};

const createStyleTag = () => {
  const style = document.createElement('style');
  style.innerText = `
#selections-modern-container .ui.disabled.input, .ui.input:not(.disabled) input[disabled] {
  opacity: 1;
}
#selections-modern-container .ui.corner.label {
  width: 2.8em;
  padding-top: 2px;
}
#selections-modern-container > div:nth-child(2) > div > div.visible.menu.transition {
  max-height: 150px!important;
}
#selections-modern-container > div:nth-child(2) > div > input[type=text] {
  border-top-left-radius: 0px!important;
  border-bottom-left-radius: 0px!important;
  border-left-color: #e8e8e8;
}
#selections-modern-container > div:nth-child(2) {
  padding-left: 0;
}
#selections-modern-container > div:nth-child(1) > div {
  border-top-right-radius: 0px!important;
  border-bottom-right-radius: 0px!important;
}
#selections-modern-container > div:nth-child(1) {
  padding-right: 0;
}
  `;
  window.self.document.body.appendChild(style);
};

export default Modern;
