import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../components/common/styles/global';
import { PropsWithChildren } from 'react';
import theme from '../../components/common/styles/theme';

const StyledPropvider = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default StyledPropvider;
