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
            state.wishlistItems = state.wishlistItems.filter(item=>item.id!==action.payload.id) 
        }, 
        emptyWishlist:(state)=>{ 
            state.wishlistItems = [] 
        }
    }
})

export const {addToWishlist,removeFromWishlist,emptyWishlist} = wishlistSlicer.actions
export default wishlistSlicer.reducer;