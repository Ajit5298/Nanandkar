import React from 'react';
import { Navbar } from './Navbar';
import Sidebar from './Sidebar';
import { Footer } from './Footer';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';

const ProductData = require('../Components/JSON/Product.json');

export const Men = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(ProductData.map((product) => ({ ...product, inWishlist: false })));
  }, []);

  const router = useNavigate();

  function handleChat() {
    router('/Chat');
  }

  function handleAddToCart(id) {
    // Find the product by id
    const product = products.find((item) => item.id === id);
    // Add the product to the cart (you can replace this with your own cart implementation)
    // For now, we'll just log the product to the console
    console.log('Added to cart:', product);
  }

  function handleToggleWishlist(id) {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, inWishlist: !product.inWishlist } : product
      )
    );
  }

  return (
    <>
      <Navbar />
      <div id="mainmen">
        <div id="menside">
          <Sidebar />
        </div>
        <div className="bestseller">
          {products.length > 0 ? (
            products.map((product) => (
              <div id="maindi" key={product.id}>
               
                <div id="sibdi1">{product.type}</div>
                <div id="sibdi2">
                  <div className="wishlist-icon">
                    <FaHeart
                      className={`wishlist-heart ${product.inWishlist ? 'wishlist-active' : ''}`}
                      onClick={() => handleToggleWishlist(product.id)}
                    />
                  </div>
                  <img id="imgfs" src={product.img} alt={product.type} />
                </div>
                <div id="sibdi3">{product.info}</div>
                <div id="sibdi4">{product.mrp}</div>
                <div id="sibdi6">{product.dis}</div>
                <div id="sibdi5">
                  <button id="cartbut" onClick={() => handleAddToCart(product.id)}>Add to Cart</button>
                </div>
              </div>
            ))
          ) : (
            <div>No More Products</div>
          )}
        </div>
        <div className="corner-div" onClick={handleChat}>
          Need help?
        </div>
      </div>
      <Footer />
    </>
  );
};
