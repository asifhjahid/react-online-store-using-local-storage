import React, { useState } from 'react';
import Basket from './components/Basket';
import Header2 from './components/Header2';
import Main from './components/Main';
import data from './data';

export default function App2() {
    const { products } = data;
    const [cartItems, setCartItems] = useState([]);
    const onAdd = (product)=>{
        const produtctItem = cartItems.find(x=>x.id===product.id);
        if(produtctItem){
            setCartItems( cartItems.map((x)=>x.id===product.id ? {...produtctItem, quantity: produtctItem.quantity+1}:x))
        }else{
            setCartItems([...cartItems,{...product,quantity:1}])
        }
    }
    const onRemove = (product)=>{
        const produtctItem = cartItems.find((x)=>x.id===product.id);
        if(produtctItem.quantity===1){
            setCartItems(cartItems.filter((x)=>x.id !== product.id));
        }else{
            setCartItems(
                cartItems.map((x)=>x.id===product.id ? {...produtctItem,quantity:produtctItem.quantity-1}: x)
            )
        }
    }
  return <div>
      <Header2 countCartItems={cartItems.length} />
      <div className='row'>
          <Main onAdd={onAdd} products={products}/>
          <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}/>
      </div>
  </div>;
}
