import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./states/cart.state";
import { productSlice } from "./states/producs.state";

export default configureStore({
  reducer: {
    cart: cartSlice.reducer,
    products: productSlice.reducer,
  },
});
