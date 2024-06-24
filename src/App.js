import './App.css';
import Our_products from './components/Our_products';
import Products from './components/Bestseller';
import { Home } from './pages/Home';
import ProductForm from './components/ProductForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Header from './components/Header';
import Footer1 from './components/Footer1';
import Component5 from './components/Component5';
import Component6 from './components/Component6';
import Contact from './components/Contact';
import Cart from './components/Cart';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          ></Route>
          <Route
            path="/Cart"
            element={<Cart/>}
          ></Route>
          <Route
            path="/Contact"
            element={<Contact/>}
          ></Route>
          <Route
            path="/Our_products"
            element={<Our_products />}
          ></Route>
          <Route
                  path="/productform"
                  element={<ProductForm />}
               ></Route>
          <Route
            path="/Bestseller"
            element={<Products />}
          ></Route>
        </Routes>
        <Footer1 />
        {/* <Whyitc /> */}
      </BrowserRouter>
     
    </div>
  );
}
export default App;