import React, { Component } from "react";

import { getProduct } from "../utilities/requests";

import "../App.css";

class ProductShow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {}
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id

    getProduct(id).then(product => this.setState({ product }));
  }

  render() {
    const { product } = this.state;

    return (
      <div>
        <h2>
          { product.title }
        </h2>
        <p>
          { product.description }
        </p>
        <p>
          <strong>Author:</strong> { product.seller }
        </p>
      </div>
    );
  }
}

export default ProductShow;
