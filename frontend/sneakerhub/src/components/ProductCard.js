// ProductCard.js
import React from 'react';
import styles from '../styles/ProductCard.module.css';
import img from '../images/img1.png';
import cartImg from '../images/cart.svg';

function ProductCard({ product }) {
  const { title, price, salePrice } = product;

  return (
    <div className={styles.product_card}>
      <img className={styles.image} src={img} alt={title} />
      <h3>{title}</h3>
      <div className={styles.price}>
        {salePrice > 0 ? (
          <>
            <span className={styles.sale_price}>₹{salePrice}</span>
            <span className={styles.original_price}>₹{price}</span>
          </>
        ) : (
          <span>₹{price}</span>
        )}
      </div>
      <div className={styles.add_to_cart}>
        {/* <img src={cartImg} alt="Add to Cart" /> */}
        <span>ADD TO CART</span>
      </div>
    </div>
  );
}

export default ProductCard;
