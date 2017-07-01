import React from 'react';

function ProductItem(props) {

  const handleClick = event => {
    props.onClick(props.id)
  }

  return (
    <div onClick={ handleClick }>
      { props.title }
    </div>
  )
}

function ProductList({ products = [], onProductClick = () => {} }) {
  return (
    <div>
      {
        products.map(product => {
          return (
            <ProductItem
              key={ product.id }
              onClick={ onProductClick }
              { ...product }
            />
          )
        })
      }
    </div>
  );
}

export default ProductList;
