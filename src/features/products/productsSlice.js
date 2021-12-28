import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    isLoading: true,
    hasLoaded: false,
    productList: [],
    error: '',
    productById: ''
};

export const getProducts = createAsyncThunk('products/get', async (data, {rejectWithValue})=> {
    try {
        const config = {
        headers: {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json',
            },
            withCredentials: true,
            crossorigin: true
        }
        
    const result = await axios.get("/products", config)
    return result.data;
} catch (err) {
    throw rejectWithValue(err.response.data.error);
}
});

export const getProductById = createAsyncThunk('productById/get', async (data, {rejectWithValue})=> {
    try {
        const config = {
        headers: {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json',
            },
            withCredentials: true,
            crossorigin: true
        }

        const result = await axios.get(`/products/${data}`, {}, config);
        return result.data;
} catch (err) {
    throw rejectWithValue(err.response.data.error);
}
});


export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: {
        [getProducts.pending]: (state,action) => {
            state.isLoading = true;
            state.hasLoaded = false;
        },
        [getProducts.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.productList = action.payload.products;
            state.hasLoaded = true;
        },
        [getProducts.rejected]: (state, action) => {
            state.isLoading = false;
            state.productList = [];
            state.error = action.payload;
            state.hasLoaded = true;
        },
        [getProductById.pending]: (state,action) => {
            state.isLoading = true;
            state.hasLoaded = false;
            state.productById = '';

        },
        [getProductById.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.productById = action.payload.product;
            state.hasLoaded = true;
        },
        [getProductById.rejected]: (state, action) => {
            state.isLoading = false;
            state.productById = '';
            state.error = action.payload;
            state.hasLoaded = true;
        },
    }
});

// export const {} = productsSlice.actions;
export default productsSlice.reducer;