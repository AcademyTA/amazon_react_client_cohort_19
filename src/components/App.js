import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import ProductIndex from './ProductIndex';
import ProductShow  from './ProductShow';

import '../App.css';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={ ProductIndex } />
      <Route path="/products/:id" component={ ProductShow } />
    </div>
  </Router>
)

export default App;
