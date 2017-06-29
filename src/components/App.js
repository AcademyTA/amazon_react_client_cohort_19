import React, { Component } from 'react';

import ProductIndex from './ProductIndex';

import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Amazon React Client</h1>
        <ProductIndex/>
      </div>
    );
  }
}

export default App;
