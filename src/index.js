import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import './index.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import createLogger from 'redux-logger';
import reducers from './reducers';


const logger = createLogger({ collapsed: true });
const createStoreWithMiddleware = applyMiddleware(logger)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
