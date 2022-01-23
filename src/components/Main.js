import React from 'react';
import Product2 from './Product2';

export default function Main(props) {
    const { products,onAdd } = props;
  return(
      <main className='block col-2'>
          <h2>Products</h2>
          <div className='row'>
              { products.map((product)=>(
                 <Product2 product={product}  key={product.id} onAdd={onAdd} /> 
              ))}
          </div>
      </main>
  );
}
