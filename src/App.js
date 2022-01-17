import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import About from './pages/About';
import CartPage from './pages/CartPage';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
