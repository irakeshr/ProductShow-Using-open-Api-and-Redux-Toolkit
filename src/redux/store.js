import { configureStore } from "@reduxjs/toolkit";
import cartReducer from  "./slicers/cartSlicer"
import wishlistReducer from "./slicers/wishlistSlicer"


const store = configureStore({
    reducer:{
        cart:cartReducer,
        wishlist: wishlistReducer
    }
})

export default store;