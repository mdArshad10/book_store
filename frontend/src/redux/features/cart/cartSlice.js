import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItem:[]
}

export const cartSlice = createSlice({
  name: 'cartForProduct',
  initialState,
  reducers: {
    addToCart: (state, action) => {
        const existCartItem = state.cartItem.find((item)=> item._id.toString() ===  action.payload._id.toString());
        if(existCartItem){
          alert('Item already exist')
        }else{
          state.cartItem.push(action.payload);
          alert("Item added successfully");
        }
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlice.actions

export default cartSlice.reducer