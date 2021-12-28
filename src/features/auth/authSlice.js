import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    isLoading: true,
    isAuthenticated: false,
    user: {},
    error: ''
};

// async thunks
export const loginRequest = createAsyncThunk("auth/login",async (data, {dispatch, getState, rejectWithValue, fulfillWithValue}) => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }
    try {
        await axios.post("/user/login", {
            username: data.username,
            email: data.email,
            password: data.password
        },
        config
        );

    } catch (err) {
        // console.log(err.response.data.error);
        throw rejectWithValue(err.response.data.error);
    }
});
export const logoutRequest = createAsyncThunk("auth/logout",async (data, {dispatch, getState, rejectWithValue, fulfillWithValue}) => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }
    try {
        await axios.get("/user/logout",
        config
        );

    } catch (err) {
        // console.log(err.response.data.error);
        throw rejectWithValue(err.response.data.error);
    }
});

export const checkAuth = createAsyncThunk("auth/checkAuth",async (data, {dispatch, getState, rejectWithValue, fulfillWithValue}) => {
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
        await axios.get("/user/checkAuth", config)

    } catch (err) {
        // console.log(err.response.data); 
        // if (err.response.status === 401)
        // {
        //     // console.log("ERROR in 401 block");
        //     throw rejectWithValue(err.response.statusText);
        // }
        // console.log(err.response);
        throw rejectWithValue(err.response.data.error);
    }
});
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthFalse: (state, action) => {
            state.isAuthenticated = false;
        },
    },
    extraReducers: {
        [loginRequest.pending]: (state,action) => {
            state.isLoading = true;
        },
        [loginRequest.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.isAuthenticated = true;
        },
        [loginRequest.rejected]: (state, action) => {
            state.isLoading = false;
            state.isAuthenticated = false;
            state.error = action.payload;
        },
        [logoutRequest.pending]: (state,action) => {
            state.isLoading = true;
        },
        [logoutRequest.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.isAuthenticated = false;
        },
        [logoutRequest.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [checkAuth.pending]: (state,action) => {
            state.isLoading = true;
        },
        [checkAuth.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.isAuthenticated = true;
        },
        [checkAuth.rejected]: (state, action) => {
            state.isLoading = false;
            state.isAuthenticated = false;
            state.error = action.payload;
        },
    }
}
);



export const { loginPending, loginSuccess, loginFailure,setAuthFalse, checkAuthReducer} = authSlice.actions;
export default authSlice.reducer;