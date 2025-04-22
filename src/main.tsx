import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import MainProvider from './lib/providers/index.tsx';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <MainProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MainProvider>,
);
