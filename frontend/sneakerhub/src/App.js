import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Product from './components/Products';
import React, { useState, useEffect } from 'react';
import api from './api'

function App() {
  const [products, setProducts] = useState([]);

  
  return (
    <div>
      <Header setProducts={setProducts}/>
      <Product products={products} setProducts={setProducts}/>
    </div>
  );
}

export default App;
