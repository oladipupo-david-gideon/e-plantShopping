import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductById } from './productSlice';
import { addItem } from './CartSlice';
import './ProductDetailPage.css';

function ProductDetailPage() {
    const { productId } = useParams();
    const dispatch = useDispatch();

    const product = useSelector((state) => state.products.selectedProduct);
    const status = useSelector((state) => state.products.singleStatus);
    const error = useSelector((state) => state.products.error);

    useEffect(() => {
        dispatch(fetchProductById(productId));
    }, [productId, dispatch]);

    const handleAddToCart = (product) => {
        const itemToAdd = {
            name: product.title,
            image: product.image,
            cost: `$${product.price.toFixed(2)}`,
            description: product.description
        };
        dispatch(addItem(itemToAdd));
        alert(`${product.title} has been added to your cart!`);
    };

    if (status === 'loading' || !product) {
        return <div className="status-message"><h2>Loading product details...</h2></div>;
    }

    if (status === 'failed') {
        return <div className="status-message"><h2>Error: {error}</h2></div>;
    }
    
    // Ensure product matches the current page to avoid showing stale data
    if (product.id !== parseInt(productId)) {
        return <div className="status-message"><h2>Loading product details...</h2></div>;
    }

    return (
        <div className="product-detail-container">
            <Link to="/products" className="back-to-products">← Back to All Plants</Link>
            <div className="product-detail-card">
                <img src={product.image} alt={product.title} className="product-detail-image" />
                <div className="product-detail-info">
                    <h1 className="product-detail-title">{product.title}</h1>
                    <p className="product-detail-category">{product.category}</p>
                    <p className="product-detail-description">{product.description}</p>
                    <p className="product-detail-price">${product.price.toFixed(2)}</p>
                    <button onClick={() => handleAddToCart(product)} className="product-detail-button">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetailPage;