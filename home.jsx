import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';

const Home = () => {

  const history = useHistory();

  return (
    <div>
      <h1>Welcome to the home of Knute Timson, resident wizard.</h1>
      <button onClick={() => {
        history.push('/products')}}>Products</button>
    </div>
  )

};

export default Home;