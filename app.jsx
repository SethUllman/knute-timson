import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home.jsx';
import Products from './products.jsx';


const app = () => (
  <div> 
    <Switch>
      <Route path="/home" component={Home}></Route>
      <Route path="/products" component={Products}></Route>
    </Switch>
  </div>
);

export default app;
