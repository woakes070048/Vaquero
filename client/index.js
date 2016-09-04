import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {Router, Route, hashHistory} from 'react-router';

import reducer from './reducers/reducer';

import {App} from './App.jsx';
import {Login} from './containers/Login.jsx';
import {NotFound} from './containers/NotFound.jsx';

let store = createStore(reducer);

ReactDom.render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Router path="/login" component={Login} />
        <Router path="*" component={NotFound} />
      </Route>
    </Router>
  </Provider>
  ), document.getElementById('app'));
