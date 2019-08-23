import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import reduxThunk from 'redux-thunk';

import App from './App';
import reducers from './reducers';
// import reducers from './reducers';

// const store = createStore({}, {}, applyMiddleware(reduxThunk));

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
