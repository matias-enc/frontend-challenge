import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "products",
  initialState: { loading: false, products: [] },
  reducers: {
    getProducts: (state) => {
      state.loading = true;
    },
    getProductsSuccess: (state, action) => {
      state.products = action.payload;
      state.loading = false;
    },
    getProductsError: (state) => {
      state.loading = false;
    },
    decrementStockOfProduct: (state, action) => {
      const prod = state.products.find(
        (prod) => prod._id === action.payload._id
      );

      if (prod && prod.stock > 0) {
        prod.stock--;
      }
    },
    incrementStockOfProduct: (state, action) => {
      const prod = state.products.find(
        (prod) => prod._id === action.payload._id
      );
      prod.stock++;
    },
    restoreStockOfProduct: (state, action) => {
      const prod = state.products.find(
        (prod) => prod._id === action.payload.product._id
      );

      prod.stock += action.payload.count;
    },
  },
});

export const {
  getProducts,
  getProductsSuccess,
  getProductsError,
  decrementStockOfProduct,
  incrementStockOfProduct,
  restoreStockOfProduct,
} = productSlice.actions;

export default productSlice.reducer;
