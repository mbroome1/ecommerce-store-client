import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import productsReducer from '../features/products/productsSlice';
import authReducer from '../features/auth/authSlice';
import cartSlice from '../features/cart/cartSlice';


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productsReducer,
    auth: authReducer,
    cart: cartSlice
  },
},
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

