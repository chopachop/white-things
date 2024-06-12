import React, { useEffect, useState } from 'react';
import { ShoppingCartItem } from '../../api/interfaces'; // Add this import statement
import './ShoppingCart.scss';

const shoppingCartItemsFromLocalStorage = JSON.parse(localStorage.getItem('ShoppingCart') || '[]');

const ShoppingCart: React.FC = () => {
  const [shoppingCart, setShoppingCartItems] = useState<ShoppingCartItem[]>([]);

  useEffect(() => {
    const currentItems = localStorage.getItem('ShoppingCart');

    if (currentItems !== '[]') {
      setShoppingCartItems(shoppingCartItemsFromLocalStorage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('ShoppingCart', JSON.stringify(shoppingCart));
  }, [shoppingCart]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      setShoppingCartItems(shoppingCart.filter((item) => item.id !== id));
    } else {
      setShoppingCartItems(
        shoppingCart.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item))
      );
    }
  };

  return (
    <div className="shopping-cart">
      {shoppingCart.length === 0 ? (
        <p>Your shopping cart is empty.</p>
      ) : (
        <ul>
          {shoppingCart.map((item) => (
            <li key={item.id} className="card-item-row" data-testid="goods-item-row">
              <div className="left-side">
                <link
                  rel="preload"
                  as="image"
                  imageSrcSet="https://via.placeholder.com/150 960w, https://via.placeholder.com/300 1080w"
                />
                <img
                  src={item.image}
                  alt={item.name}
                  srcSet="https://via.placeholder.com/150 960w, https://via.placeholder.com/300 1080w"
                />
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.brand}</p>
                </div>
              </div>

              <div className="right-side">
                <p>${item.price} x</p>
                <input
                  aria-label="quantity-input"
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ShoppingCart;
