
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ProductList.css';
import { addItem } from './CartSlice';
import { plantsArray } from './plantData'; // Import data from the new file

function ProductList() {
    const [addedToCart, setAddedToCart] = useState({});
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);

    useEffect(() => {
        const addedMap = {};
        cartItems.forEach(item => {
            addedMap[item.name] = true;
        });
        setAddedToCart(addedMap);
    }, [cartItems]);

    const handleAddToCart = (product) => {
        dispatch(addItem(product));
        setAddedToCart((prevState) => ({
            ...prevState,
            [product.name]: true,
        }));
    };

    return (
        <div className="product-grid-container">
            {plantsArray.map((category, index) => (
                <section key={index} className="category-section">
                    <h2 className="category-title">{category.category}</h2>
                    <div className='product-list'>
                        {category.plants.map((plant, plantIndex) => (
                            <div className='product-card' key={plantIndex}>
                                <img
                                    className='product-image'
                                    src={plant.image}
                                    alt={plant.name}
                                />
                                <div className='product-details'>
                                    <h3 className='product-title'>{plant.name}</h3>
                                    <p className='product-description'>{plant.description}</p>
                                    <p className='product-cost'>{plant.cost}</p>
                                    <button
                                        className='product-button'
                                        onClick={() => handleAddToCart(plant)}
                                        disabled={addedToCart[plant.name]}
                                    >
                                        {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            ))}
        </div>
    );
}

export default ProductList;