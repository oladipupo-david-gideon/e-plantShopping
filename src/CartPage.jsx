
import React from 'react';
import { useNavigate } from 'react-router-dom';
import CartItem from './CartItem';
import './CartPage.css';

function CartPage() {
    const navigate = useNavigate();

    const handleContinueShopping = () => {
        navigate('/products');
    };

    return (
        <div className="cart-page-container">
            <CartItem onContinueShopping={handleContinueShopping} />
        </div>
    );
}

export default CartPage;