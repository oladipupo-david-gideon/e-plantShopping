import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Get the base URL from environment variables
const API_URL = `${import.meta.env.VITE_API_BASE_URL}/plants`;

// Thunk for fetching all products from YOUR API
export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        return data;
    }
);

// Thunk for fetching a single product by its ID from YOUR API
export const fetchProductById = createAsyncThunk(
    'products/fetchProductById',
    async (productId) => {
        const response = await fetch(`${API_URL}/${productId}`);
        if (!response.ok) throw new Error('Failed to fetch product details.');
        const data = await response.json();
        // Rename 'name' to 'title' to match component expectations
        return { ...data, title: data.name };
    }
);

const productSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
        status: 'idle',
        error: null,
        selectedProduct: null,
        singleStatus: 'idle', 
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Cases for fetching all products
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                // The API now returns the data in the correct format, so we just assign it.
                // We rename 'name' to 'title' to match what the components expect.
                state.items = action.payload.map(p => ({ ...p, title: p.name }));
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // Cases for fetching a single product
            .addCase(fetchProductById.pending, (state) => {
                state.singleStatus = 'loading';
            })
            .addCase(fetchProductById.fulfilled, (state, action) => {
                state.singleStatus = 'succeeded';
                // The API gives us the selected product directly.
                state.selectedProduct = action.payload;
            })
            .addCase(fetchProductById.rejected, (state, action) => {
                state.singleStatus = 'failed';
                state.error = action.error.message;
            });
    },
});

export default productSlice.reducer;