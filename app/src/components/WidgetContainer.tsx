import type { FC, ReactNode } from 'react';
import { Measures } from 'types/global-types';
import { useAppSelector } from 'redux/redux-hooks';
import type { Theme } from 'types/global-types';

const sectionStyles = (theme: Theme) => ({
  maxHeight: Measures.HEIGHT,
  maxWidth: Measures.WIDTH,
  height: '100vh',
  width: '100vw',
  border: '1px solid',
  borderColor: theme.border,
  margin: '10px',
  padding: '10px',
  background: theme.background,
  color: theme.text,
});

interface Props {
  children: ReactNode
}

const WidgetContainer: FC<Props> = ({ children }) => {
  const theme: Theme = useAppSelector(({ context }) => context.theme);

  return (
    <section style={sectionStyles(theme)}>
      { children }
    </section>
  );
};

export default WidgetContainer;
