import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home.jsx';
import Products from './products.jsx';
import Contact from './contact.jsx';
import Navigation from './navigation.jsx';


const app = () => (
  <div> 
    <Navigation/>
    <Switch>
      <Route path="/home" component={Home}></Route>
      <Route path="/products" component={Products}></Route>
      <Route path="/contact" component={Contact}></Route>
    </Switch>
  </div>
);

export default app;
