import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home.jsx';
import Products from './products.jsx';
import Contact from './contact.jsx';
import Navigation from './navigation.jsx';


const app = () => (
  <div> 
    <Navigation/>
    <Home/>
    <Products/>
    <Contact/>
  </div>
);

export default app;
