
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => total + item.quantity * parseFloat(item.cost.substring(1)), 0).toFixed(2);
  };

  const handleCheckout = () => {
    alert('Checkout functionality is not yet implemented.');
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const calculateItemTotal = (item) => {
    return (item.quantity * parseFloat(item.cost.substring(1))).toFixed(2);
  };

  if (cart.length === 0) {
    return (
        <div className="cart-empty">
            <h2>Your Cart is Empty</h2>
            <button className="action-button" onClick={onContinueShopping}>Continue Shopping</button>
        </div>
    );
  }

  return (
    <div className="cart-container">
      <h2 className="cart-summary-title">Your Shopping Cart</h2>
      <div className="cart-items-list">
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p className="cart-item-cost">Price: {item.cost}</p>
              <div className="cart-item-quantity">
                <button className="quantity-btn" onClick={() => handleDecrement(item)}>-</button>
                <span>{item.quantity}</span>
                <button className="quantity-btn" onClick={() => handleIncrement(item)}>+</button>
              </div>
              <p className="cart-item-total">Total: ${calculateItemTotal(item)}</p>
              <button className="delete-btn" onClick={() => handleRemove(item)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h3>Total Cart Amount: ${calculateTotalAmount()}</h3>
        <div className="cart-actions">
          <button className="action-button" onClick={onContinueShopping}>Continue Shopping</button>
          <button className="action-button checkout-btn" onClick={handleCheckout}>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;