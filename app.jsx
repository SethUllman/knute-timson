import React from 'react';
import Home from './home.jsx';
import Products from './products.jsx';
import Contact from './contact.jsx';
import Navigation from './navigation.jsx';
import '../styles/styling/page.css';

const app = () => (
  <div> 
    <Navigation/>
    <div className="page">
      <Home/>
      <Products/>
      <Contact/>
    </div>
  </div>
);

export default app;
