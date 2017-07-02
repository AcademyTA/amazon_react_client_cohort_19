import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

import ProductIndex from './ProductIndex';
import ProductShow  from './ProductShow';
import ProductNew   from './ProductNew';

import '../App.css';

const App = () => (
  <Router>
    <div>
      <nav>
        <Link to='/'>Home</Link> | <Link to='/products'>Products</Link> | <Link to='/products/new'>New Product</Link>
      </nav>
      <hr />
      <Switch>
        <Route exact path="/" component={ ProductIndex } />
        <Route exact path="/products" component={ ProductIndex } />
        <Route path="/products/new" component={ ProductNew } />
        <Route path="/products/:id" component={ ProductShow } />
      </Switch>
    </div>
  </Router>
)

export default App;
