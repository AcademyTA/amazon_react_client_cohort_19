import React    from 'react';
import { Link } from 'react-router-dom';

function ProductItem(props) {
  return (
    <div>
      <Link to={`/products/${props.id}`}>{ props.title }</Link>
    </div>
  )
}

function ProductList({ products = [] }) {
  return (
    <div>
      {
        products.map(product => {
          return (
            <ProductItem
              key={ product.id }
              { ...product }
            />
          )
        })
      }
    </div>
  );
}

export default ProductList;
