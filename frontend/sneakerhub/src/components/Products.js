// Product.js
import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import styles from '../styles/Products.module.css'
import api from '../api'
function Product({products,setProducts}) {
  // const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get('/products/all')
      .then(response => {
        setProducts(response.data);
        console.log(products);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <div className={styles.product}>
      <div className={styles.grid}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
    </div>
  );
}

export default Product;
