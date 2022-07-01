import React from 'react';
import {Switch , Route} from "react-router-dom"
import Home from './core/Home';
import NotFound from './core/NotFound';
import './styles.css';
import Signup from './user/Signup';

function App() {
  return (
    // defining all routes
    <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/signin' exact component={Home}/>
      <Route path='/signup' exact component={Signup}/>
      <Route path = "*" exact component={NotFound}/>
    </Switch>
  );
}

export default App;
