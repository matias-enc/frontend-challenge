import { createSlice } from "@reduxjs/toolkit";
import { floatFix, stringPriceToNumber } from "../../utilities/price-formatter";

const initialState = {
  total: 0.0,
  products: [],
  count: 0,
  paymentLoader: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const prod = state.products.find(
        (prod) => prod._id === action.payload._id
      );

      if (prod) {
        prod.count++;
      } else {
        state.products.push({
          _id: action.payload._id,
          name: action.payload.name,
          price: action.payload.price,
          image: action.payload.image,
          count: 1,
        });
      }
      let totalValue = state.total;
      totalValue += stringPriceToNumber(action.payload.price);
      state.total = floatFix(totalValue);
      state.count++;
    },

    removeOneItemFromCart: (state, action) => {
      const prod = state.products.find(
        (prod) => prod._id === action.payload._id
      );

      if (prod && prod.count > 1) {
        prod.count--;
        let totalValue = state.total;
        totalValue -= stringPriceToNumber(action.payload.price);
        state.total = floatFix(totalValue);
        state.count--;
      }
    },

    removeItemFromCart: (state, action) => {
      const newArray = state.products.filter((prod) => {
        if (prod._id !== action.payload.product._id) return prod;
      });

      let totalValue = state.total;

      totalValue -=
        stringPriceToNumber(action.payload.product.price) *
        action.payload.count;

      state.total = floatFix(totalValue);

      state.products = newArray;

      state.count -= action.payload.count;
    },
    resetCart: () => initialState,
    sendPayment: (state) => {
      state.paymentLoader = true;
    },
    successPayment: (state) => {
      state.paymentLoader = false;
    },
    errorPayment: (state) => {
      state.paymentLoader = false;
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  removeOneItemFromCart,
  resetCart,
  sendPayment,
  successPayment,
  errorPayment,
} = cartSlice.actions;

export default cartSlice.reducer;
