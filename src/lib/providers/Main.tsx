import { PropsWithChildren } from 'react';
import StyledPropvider from './Styled';
import TanstackQueryProvider from './tanstackQuery';

const MainProvider = ({ children }: PropsWithChildren) => {
  return (
    <StyledPropvider>
      <TanstackQueryProvider>{children}</TanstackQueryProvider>
    </StyledPropvider>
  );
};

export default MainProvider;
