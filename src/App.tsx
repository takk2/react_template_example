import { BrowserRouter } from 'react-router-dom';
import MainProvider from './lib/providers/Main';
import Router from './Router';

function App() {
  return (
    <MainProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </MainProvider>
  );
}

export default App;
