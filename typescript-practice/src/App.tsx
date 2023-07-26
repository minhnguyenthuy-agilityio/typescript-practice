import { BrowserRouter as Router } from 'react-router-dom';

import { ToastProvider, CartProvider, AuthProvider } from '@/contexts';

import Routing from './Routing';

const App = () => (
  <div className="App">
    <Router>
      <ToastProvider>
        <AuthProvider>
          <CartProvider>
            <Routing />
          </CartProvider>
        </AuthProvider>
      </ToastProvider>
    </Router>
  </div>
);

export default App;
