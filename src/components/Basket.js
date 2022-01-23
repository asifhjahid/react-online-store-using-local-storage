import React from 'react';

export default function Basket(props) {
  const {cartItems,onAdd,onRemove} = props;
  const itemPrice = cartItems.reduce((a,c)=>a + c.price * c.quantity,0);
  const taxPrice = itemPrice * 0.14;
  const shippingPrice = itemPrice > 2000 ? 0 : 20;
  const totalPrice = itemPrice + taxPrice + shippingPrice;
  return (
      <aside className='block col-1'>
          <h2>Cart Items</h2>
          <div>
            {cartItems.length === 0 && 
            <div>Cart is Empty</div>}
          </div>
          {cartItems.map((item)=>(
            <div className='row' key={item.id}>
                <div className='col-2'>{item.name}</div>
                <div className='col-2'>
                  <button onClick={()=>onAdd(item)} className='add'>+</button>
                  <button onClick={()=>onRemove(item)} className='remove'>-</button>
                </div>
                <div className='col-2 text-right'>
                  {item.quantity}*${item.price.toFixed(2)}
                </div>
            </div>
          ))}
          {cartItems.length !== 0 && (
            <div>
              <hr />
              <div className='row'>
                <div className='col-2'>Items Price</div>
                <div className='col-1 text-right'>${itemPrice.toFixed(2)}</div>
              </div>

              <div className='row'>
                <div className='col-2'>Tax Price</div>
                <div className='col-1 text-right'>${taxPrice.toFixed(2)}</div>
              </div>

              <div className='row'>
                <div className='col-2'>Shipping Price</div>
                <div className='col-1 text-right'>${shippingPrice.toFixed(2)}</div>
              </div>

              <div className='row'>
                <div className='col-2'>Total Price</div>
                <div className='col-1 text-right'>${totalPrice.toFixed(2)}</div>
              </div>

              <hr />
              <div className='row'>
                <button onClick={()=>alert('Implement Checkout')}>Checkout</button>
              </div>
            </div>
          )}
      </aside>
  );
}
