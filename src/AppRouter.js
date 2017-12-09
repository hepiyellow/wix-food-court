import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';


// import Button from 'wix-style-react/Button';

import s from './AppRouter.scss';
import AppUsingState from './usingReactState/components/App';
import AppUsingRedux from './usingRedux/AppUsingRedux';

// TODO: how do I use wix-style-react/Button for the links?
const AppRouter = () => (
  <Router>
    <div>
      <ul>
        <li><NavLink
          exact
          to="/"
          activeClassName={s.selected}
          >Using Redux (at root /)</NavLink></li>
        <li><NavLink
          to="/redux"
          activeClassName={s.selected}
          >Using Redux </NavLink></li>
        <li><NavLink
          to="/reactState"
          activeClassName={s.selected}
          >Using ReactState</NavLink></li>
      </ul>
      <Route exact path="/" component={AppUsingRedux}/>
      <Route exact path="/redux" component={AppUsingRedux}/>
      <Route path="/reactState" component={AppUsingState}/>
    </div>
  </Router>

);
export default AppRouter;
