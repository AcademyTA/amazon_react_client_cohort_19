import React, { Component } from 'react';
import { Redirect }         from 'react-router-dom';

import { postProduct } from '../utilities/requests';

class ProductNew extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: null
    }

    this.createProduct = this.createProduct.bind(this)
  }

  createProduct(data) {
    postProduct(data)
      .then(({ product }) => this.props.history.push(`/products/${product.id}`));
  }

  render() {
    const { id } = this.state;

    return (
      <div>
        { id && <Redirect to={ `/products/${id}` } /> }
        <h1>New Product</h1>
        <ProductForm onSubmit={ this.createProduct } />
      </div>
    );
  }
}

function ProductForm(props) {
  const { onSubmit = () => {} } = props;

  const handleSubmit = event => {
    event.preventDefault();

    const { currentTarget: form } = event;

    const formData = new FormData(form);

    onSubmit({
      title:       formData.get('title'),
      description: formData.get('description'),
      sale_price:  formData.get('price'),
      category_id: 1
    });
  };

  return (
    <form onSubmit={ handleSubmit }>
      <div>
        <label htmlFor='title'>Title</label>
        <input id='title' name='title' />
      </div>

      <div>
        <label htmlFor='description'>Description</label>
        <input id='description' name='description' />
      </div>

      <div>
        <label htmlFor='price'>Price</label>
        <input id='price' name='price' />
      </div>

      <div>
        <input type='submit' value='Submit'/>
      </div>
    </form>
  );
}

export default ProductNew;
