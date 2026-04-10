import React from 'react';

import './App.css';
import CryptoDashboard from './cryptoDashboard';
import { store } from './app/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <>
    <Provider store={store}>
    <CryptoDashboard/>
    </Provider>
    </>
  );
}

export default App;
