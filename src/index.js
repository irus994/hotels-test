import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware } from 'redux';
import {Provider} from "react-redux";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {reducer} from "./store/reducer.js";
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import {checkAuth} from "./store/api-action";
import {rootSaga} from "./store/sagas";

const sagaMiddleware = createSagaMiddleware()

const middleWares = [sagaMiddleware, thunk]
const store = createStore(
    reducer,
    applyMiddleware(...middleWares)
)

sagaMiddleware.run(rootSaga);

store.dispatch(checkAuth())

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App/>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
