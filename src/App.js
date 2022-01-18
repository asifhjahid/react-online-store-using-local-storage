import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import cartContext from './context/cartContex';
import useCart from './context/useCart';
import About from './pages/About';
import CartPage from './pages/CartPage';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';

function App() {
 
  const {cart,addToCart} = useCart()
  
  return (
    <div className="App">
      <cartContext.Provider value={{
        cart,
        addToCart,
      }}>
     <Router>
       <Layout>
         <Routes>
           <Route path='/' element={<Home />} />
           <Route path='/about' element={<About />} />
           <Route path='/products' element={<ProductPage />} />
           <Route path='/cart' element={<CartPage />} />
  
         </Routes>
       </Layout>
     </Router>
     </cartContext.Provider>
    </div>
  );
}

export default App;
