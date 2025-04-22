import { PropsWithChildren, useState } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const TanstackQueryProvider = ({ children }: PropsWithChildren) => {
  const [client] = useState(new QueryClient({ defaultOptions: { queries: { staleTime: 5000 } } }));

  return (
    <QueryClientProvider client={client}>
      {children}
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
};

export default TanstackQueryProvider;
