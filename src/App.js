import {Route,  Routes } from 'react-router-dom';
import './App.css';
import Cart from './Components/Cart';
import Navbar from './Components/Navbar';
import Product from './Components/Product';
import Products from './Components/Products';
import Home from './Pages/Home';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
      <Route  path='/' element={<Home/>}></Route>
      <Route  path='/products' element={<Products/>}></Route>
      <Route  path='/products/:id' element={<Product/>}></Route>
      <Route  path='/cart' element={<Cart/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
