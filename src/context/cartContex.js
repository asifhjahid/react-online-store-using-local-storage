import { createContext } from 'react';
import { getCartItems } from './productContext';

const cartContext = createContext(getCartItems());

export default cartContext;