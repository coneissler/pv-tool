import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './App'
import AccessDenied from './ExternalPages/LandingPage/AccessDenied'
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './store/reducer'
const inIframe = () => {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk)
));

if(inIframe()){
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
    , document.getElementById('root'))
} else {
  ReactDOM.render(
    <AccessDenied/>
    , document.getElementById('root'))
}
registerServiceWorker()
