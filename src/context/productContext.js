export function addToCart(product){
    const cart = getCartItems()
    localStorage.setItem('cart',JSON.stringify([...cart,product]));
}

export function getCartItems(){
    const data = localStorage.getItem('cart');
    if(!data ) return [];
    return JSON.parse(data);

}

export function removeFromCart(){
    
}

export function clearCart(){
    
}