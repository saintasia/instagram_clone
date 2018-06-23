// let's go!
import React from 'react';
import { render } from 'react-dom';
import css from './styles/style.styl';
// import components
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';
// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

//setting up debugger
// import Raven from 'raven-js';
// import { sentury_url } from './data/config';
// Raven.config(sentury_url).install();

const router = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
