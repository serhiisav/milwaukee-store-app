import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// import reportWebVitals from './reportWebVitals';
import store from './store/store';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// reportWebVitals();
