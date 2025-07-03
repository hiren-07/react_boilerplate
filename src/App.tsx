import React from 'react';
import './App.css';
import Navigator from './Navigator';
import { Provider } from 'react-redux';
import { store } from './Redux/Store/store';


function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}

export default App;
