import type { FC, ReactNode } from 'react';
import { useAppSelector } from 'redux/redux-hooks';
import type { Theme, Config } from 'types/global-types';
import { Mode } from 'types/global-types';
import { isIframed } from 'utils/helpers';

const getBoxShadow = (raised: number) => {
  const boxShadowOne = '0 1px 2px 0 rgb(34 36 38 / 15%)';
  const boxShadowTwo = '0 2px 4px 0 rgb(34 36 38 / 12%), 0 2px 10px 0 rgb(34 36 38 / 15%)';
  return raised === 1 ? boxShadowOne : boxShadowTwo;
};

const sectionStyles = (theme: Theme, config: Config) => {
  const raised = Number(theme.raised) ? getBoxShadow(Number(theme.raised)) : '';
  return {
    maxHeight: config.containerHeight,
    maxWidth: config.containerWidth,
    height: '100vh',
    width: '100vw',
    border: '1px solid',
    borderColor: theme.border,
    margin: isIframed() ? '15px' : '3px',
    padding: config.mode === Mode.MODERN ? '10px' : '5px 0',
    background: theme.background,
    color: theme.text,
    borderRadius: theme.borderRadius,
    WebkitBoxShadow: raised,
    boxShadow: raised,
  };
};

interface Props {
  children: ReactNode,
  id: string
}

const WidgetContainer: FC<Props> = ({ children, id }) => {
  const theme: Theme = useAppSelector(({ context }) => context.theme);
  const config: Config = useAppSelector(({ context }) => context.config);

  return (
    <section id={id} style={sectionStyles(theme, config)}>
      { children }
    </section>
  );
};

export default WidgetContainer;
