import { createSlice } from "@reduxjs/toolkit";


const cartSlicer = createSlice({
    name:"cartSlicer",
    initialState:{
        cartItems:[]
    }, 
    reducers:{ 
        addToCart:(state,action)=>{ 
            state.cartItems.push({...action.payload,quantity:1}) 
        }, 
        removeFromCart:(state,action)=>{ 
            console.log(action.payload.id) // call  get here
            state.cartItems = state.cartItems.filter(item=>item.id!==action.payload.id) 
        }, 
        emptyCart:(state)=>{ 
            state.cart = [] 
        }, 
        incrementQuantity:(state,action)=>{ 
            const item = state.cartItems.find(item=>item.id===action.payload.id) 
            item.quantity++ 
        }, 
        decrementQuantity:(state,action)=>{ 
            const item = state.cartItems.find(item=>item.id===action.payload.id) 
            item.quantity-- 
        }

    }
})

export const {addToCart,removeFromCart,emptyCart,incrementQuantity,decrementQuantity} = cartSlicer.actions
export default cartSlicer.reducer;