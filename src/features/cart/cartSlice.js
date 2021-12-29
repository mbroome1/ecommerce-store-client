import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    isLoading: true,
    hasLoaded: false,
    cartList: [],
    error: '',
    cartOpen: false
};

// cart state example, minus image object

// const initialState = {
//     isLoading: true,
//     hasLoaded: false,
//     cartList: [
//         {
//             seq: 3,
//             id: 3000,
//             title: "product 3",
//             description: "description 3",
//             category: "test",
//             gender: "female",
//             price: 29.99,
//             isHidden: false,
//             isDeleted: false,
//             createdAt: "2021-09-12T04:21:27.621Z",
//             updatedAt: "2021-09-12T04:21:27.621Z",
//             cartItem: {
//                 id: 1,
//                 quantity: 5,
//                 createdAt: "2021-11-12T07:04:03.262Z",
//                 updatedAt: "2021-11-12T07:07:13.041Z",
//                 cartId: 8,
//                 productSeq: 3
//             }
//         },
//         {
//             seq: 2,
//             id: 2000,
//             title: "product 2",
//             description: "description 2",
//             category: "test",
//             gender: "male",
//             price: 19.99,
//             isHidden: false,
//             isDeleted: false,
//             createdAt: "2021-09-12T04:21:27.621Z",
//             updatedAt: "2021-09-12T04:21:27.621Z",
//             cartItem: {
//                 id: 4,
//                 quantity: 1,
//                 createdAt: "2021-11-13T03:47:18.893Z",
//                 updatedAt: "2021-11-13T03:47:18.893Z",
//                 cartId: 8,
//                 productSeq: 2
//             }
//         }
//     ]
// };

export const getCart = createAsyncThunk('cart/get', async (data, {rejectWithValue})=> {
    try {
        const config = {
        headers: {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json',
            },
            withCredentials: true,
            crossorigin: true
        }
    // console.log("CHECH AUTH:");
    const result = await axios.get("http://localhost:3001/cart", config);
    return result.data;
} catch (err) {
    // console.log(err.response.data.error)
    throw rejectWithValue(err.response.data.error);
}
});

export const postCart = createAsyncThunk('cart/post', async (data, {rejectWithValue}) => {
    try {
        const config = {
        headers: {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json',
            },
            withCredentials: true,
            crossorigin: true
        }
    // console.log("CHECH AUTH:");
    const result = await axios.post("http://localhost:3001/cart", {
        productSeq: data.seq,
        productQuantity: data.qty,
        productSize: data.size
    },
    config);
    // console.log(result.data);
    return result.data;
} catch (err) {
    throw rejectWithValue(err.response.data.error);
}
})

export const deleteCartItemById = createAsyncThunk('cart/deleteCartItemById', async (data, {rejectWithValue}) => {
    try {
        const config = {
        headers: {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json',
            },
            withCredentials: true,
            crossorigin: true
        }
    // console.log("CHECH AUTH:");
    const result = await axios.delete(`http://localhost:3001/cart/${data}`, {}, config);
    // console.log(result.data);
    return {
        data: result.data, 
        deletedCartItemId: data
    };
} catch (err) {
    throw rejectWithValue(err.response.data.error);
}
})

export const updateCartItemById = createAsyncThunk('cart/updateCartItemById', async (data, {rejectWithValue}) => {
    try {
        const config = {
        headers: {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json',
            },
            withCredentials: true,
            crossorigin: true
        }
    // console.log("CHECH AUTH:");
    const result = await axios.patch('http://localhost:3001/cart', {
        cartItemId: data.id,
        cartItemQuantity: data.quantity
    }, config);
    return result.data;
} catch (err) {
    throw rejectWithValue(err.response.data.error);
}
})


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        toggleCartOpen: (state,actiion) => {
            state.cartOpen = !state.cartOpen;
        }
    },
    extraReducers: {
        [getCart.pending]: (state,action) => {
            state.isLoading = true;
            state.hasLoaded = false;
        },
        [getCart.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.cartList = action.payload.fetchedCart;
            state.hasLoaded = true;
        },
        [getCart.rejected]: (state, action) => {
            state.isLoading = false;
            state.cartList = [];
            state.error = action.payload;
            state.hasLoaded = true;
        },
        [postCart.pending]: (state,action) => {
            state.isLoading = true;
            state.hasLoaded = false;
        },
        [postCart.fulfilled]: (state, action) => {
            state.isLoading = false;
            // state.cartList = action.payload.fetchedCart;
            state.hasLoaded = true;
        },
        [postCart.rejected]: (state, action) => {
            state.isLoading = false;
            // state.cartList = [];
            state.error = action.payload;
            state.hasLoaded = true;
        },
        [updateCartItemById.fulfilled]: (state, action) => {
            const resultArray = action.payload.updatedCartItem[1];

            state.cartList = state.cartList.map(item => {
                resultArray.forEach(result => {
                    if (result.id === item.cartItem.id) {                        
                        return item.cartItem = result;
                    }
                })
                return item;
            })
        },
        [deleteCartItemById.fulfilled]: (state, action) => {
            const deletedId = action.payload.deletedCartItemId;
            // console.log(deletedId);
            state.cartList = state.cartList.filter(item => {
                return item.cartItem.id !== deletedId;
            })
            // state.cartList = state.cartList.map(item => {
            
        },

    }
});

export const { toggleCartOpen } = cartSlice.actions;
export default cartSlice.reducer;