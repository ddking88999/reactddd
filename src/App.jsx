import React from 'react';
import './style.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Log_in_component from './MY COMPONENTS/Log_in_component';
import Sign_up_component from './MY COMPONENTS/Sign_up_component';
import Fredirector from './MY COMPONENTS/Fredirector'
import Four04 from './MY COMPONENTS/Four04'
import CopyrightTitle from './MY COMPONENTS/CopyrightTitle'
export default function App() {
  return (
    <>
      <Router>
        
      <CopyrightTitle />
        <Switch>
          <Route exact path="/">
            <Fredirector />
          </Route>
          <Route exact path="/login">
            <Log_in_component />
          </Route>
          <Route exact path="/signup">
            <Sign_up_component />
          </Route>
          <Route>
            <Four04 />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
