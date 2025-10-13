import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'; // **NEW**: Ensure Link is imported
import './ProductList.css';
import { addItem } from './CartSlice';
import { fetchProducts } from './productSlice';

function ProductList() {
    const [addedToCart, setAddedToCart] = useState({});
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);
    const products = useSelector(state => state.products.items);
    const productStatus = useSelector(state => state.products.status);
    const error = useSelector(state => state.products.error);

    useEffect(() => {
        if (productStatus === 'idle') {
            dispatch(fetchProducts());
        }
    }, [productStatus, dispatch]);
    
    useEffect(() => {
        const addedMap = {};
        cartItems.forEach(item => {
            addedMap[item.name] = true;
        });
        setAddedToCart(addedMap);
    }, [cartItems]);

    const handleAddToCart = (product) => {
        const itemToAdd = {
            name: product.title,
            image: product.image,
            cost: `$${product.price.toFixed(2)}`, 
            description: product.description
        };
        dispatch(addItem(itemToAdd));
    };

    if (productStatus === 'loading') {
        return <div className="status-message"><h2>Loading products...</h2></div>;
    }

    if (productStatus === 'failed') {
        return <div className="status-message"><h2>Error: {error}</h2></div>;
    }
    
    return (
        <div className="product-grid-container">
            <section className="category-section">
                <h2 className="category-title">All Products</h2>
                <div className='product-list'>
                    {products.map((product) => (
                        <div className='product-card' key={product.id}>
                            <Link to={`/products/${product.id}`} className="product-link-wrapper">
                                <img
                                    className='product-image'
                                    src={product.image}
                                    alt={product.title}
                                />
                                <div className='product-details'>
                                    <h3 className='product-title'>{product.title}</h3>
                                    <p className='product-description'>{product.description}</p>
                                    <p className='product-cost'>${product.price.toFixed(2)}</p>
                                </div>
                            </Link>
                            <div className="product-button-container">
                                <button
                                    className='product-button'
                                    onClick={() => handleAddToCart(product)}
                                    disabled={addedToCart[product.title]}
                                >
                                    {addedToCart[product.title] ? 'Added to Cart' : 'Add to Cart'}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default ProductList;