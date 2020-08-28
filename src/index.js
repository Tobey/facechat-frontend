
// https://www.nexmo.com/blog/2019/07/16/opentok-react-components-dr
// https://medium.com/@a.carreras.c/using-semantic-ui-react-your-react-js-app-523ddc9abeb3
import React from 'react';
import ReactDOM from 'react-dom';
import HomepageLayout from './pages/home';
import Chat from './pages/chat';
import Login from './pages/login';
import Register from './pages/register';
import Profile from './pages/profile';
import NotFound from './pages/notfound';
import { history } from './helpers/history';
import PrivateRoute from './components/PrivateRoute';

import 'semantic-ui-css/semantic.min.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

  const routes = (
    <Router history={history} >
    <Switch>
      <Route  path="/login/" component={ Login } />
      <Route exact path="/" component={ HomepageLayout } />
      <Route  path="/register/" component={ Register } />

      <PrivateRoute exact  path="/chat/:influencer" component={ Chat } />
      <PrivateRoute  path="/profile/" component={ Profile } />

      <Route path="" component={ NotFound } />
    </Switch>

  </Router>
  )
  
ReactDOM.render(routes, document.getElementById('root'));
