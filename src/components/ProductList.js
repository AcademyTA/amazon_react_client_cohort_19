import React from 'react';

function ProductItem(props) {
  return (
    <div>
      { props.title }
    </div>
  )
}

function ProductList({ products = [] }) {
  return (
    <div>
      {
        products.map(product => <ProductItem key={ product.id } { ...product } />)
      }
    </div>
  );
}

export default ProductList;
