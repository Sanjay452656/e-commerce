import { configureStore } from "@reduxjs/toolkit";
import cardReducer from '../features/cartSlice'

export const store = configureStore({
    reducer:{
        cart:cardReducer
    }
})