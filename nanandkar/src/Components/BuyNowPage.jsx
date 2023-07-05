import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const BuyNowPage = () => {
  // Retrieve the buy now data from localStorage
  const buyNowData = JSON.parse(localStorage.getItem('buyNowData'));

  return (
    <>
      <Navbar />
      <div id="buy-now-page">
        <h1>Buy Now</h1>
        {buyNowData && (
          <div>
            <h2>Product: {buyNowData.product.type}</h2>
            <p>Color: {buyNowData.color}</p>
            <p>Size: {buyNowData.size}</p>
            <p>Quantity: {buyNowData.quantity}</p>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};
