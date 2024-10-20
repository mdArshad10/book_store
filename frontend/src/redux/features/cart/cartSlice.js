import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const initialState = {
  cartItem: [],
};

export const cartSlice = createSlice({
  name: "cartForProduct",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existCartItem = state.cartItem.find(
        (item) => item._id.toString() === action.payload._id.toString()
      );
      if (existCartItem) {
        // alert('Item already exist')
        Swal.fire({
          title: "Are you sure?",
          text: "Product Already Added",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Ok!",
        });
      } else {
        state.cartItem.push(action.payload);
        // alert("Item added successfully");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Product Added to the Cart",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    },

    removeFromCart: (state, action) => {
      state.cartItem = state.cartItem.filter(
        (item) => item._id.toString() !== action.payload.toString()
      );
    },
    clearCart: (state) => {
      state.cartItem = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
