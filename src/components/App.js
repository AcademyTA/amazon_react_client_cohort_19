import React, { Component } from 'react';

import ProductIndex from './ProductIndex';
import ProductShow  from './ProductShow';

import '../App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productId: null
    }

    this.goToProduct = this.goToProduct.bind(this);
  }

  goToProduct(id) {
    this.setState({ productId: id });
  }

  render() {
    let template

    if (this.state.productId) {
      template = <ProductShow id={ this.state.productId }/>
    } else {
      template = <ProductIndex onProductClick={ this.goToProduct }/>
    }

    return (
      <div className="App">
        <h1>Amazon React Client</h1>
        { template }
      </div>
    );
  }
}

export default App;
