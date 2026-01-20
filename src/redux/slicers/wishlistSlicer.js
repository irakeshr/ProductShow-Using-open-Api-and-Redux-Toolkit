import { createSlice } from "@reduxjs/toolkit";


const wishlistSlicer = createSlice({
    name:"wishlistSlicer",
    initialState:{
        wishlistItems:[]
    },
    reducers:{ 
        addToWishlist:(state,action)=>{ 
            state.wishlistItems.push(action.payload) 
        }, 
        removeFromWishlist:(state,action)=>{ 
            state.wishlist = state.wishlistItems.filter(item=>item.id!==action.payload) 
        }, 
        emptyWishlist:(state)=>{ 
            state.wishlist = [] 
        }
    }
})

export const {addToWishlist,removeFromWishlist,emptyWishlist} = wishlistSlicer.actions
export default wishlistSlicer.reducer;