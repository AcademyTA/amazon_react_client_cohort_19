import React, { Component } from 'react';

import ProductList     from './ProductList';
import { getProducts } from '../utilities/requests';

import '../App.css';

class ProductIndex extends Component {
  constructor(props) {
    super(props)

    this.state = {
      products: []
    }
  }

  componentDidMount() {
    getProducts()
      .then(products => this.setState({ products }))
  }

  render() {
    return (
      <div>
        <h3>All Products</h3>
        <ProductList products={ this.state.products }/>
      </div>
    );
  }
}

export default ProductIndex;
