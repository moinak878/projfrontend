import React from 'react';
import {Routes , Route} from "react-router-dom"
import Base from './core/Base';
import Home from './core/Home';
import NotFound from './core/NotFound';
import './styles.css';

function App() {
  return (
    // defining all routes
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/signin' element = {<Home/>}/>
      <Route path='/signup' element = {<Home/>}/>
      <Route path = "*" element = {<NotFound/>}/>
    </Routes>
  );
}

export default App;
