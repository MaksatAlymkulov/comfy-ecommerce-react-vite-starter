import { createSlice } from "@reduxjs/toolkit";
import { products } from "../assets/products-data";
import { getStorageItem } from "../utils/utils";

const initialState = {
  isLoading: false,
  showCart: false,
  showSideBar: false,
  showCheckout: false,
  cartProducts: getStorageItem("cartProducts") || [],
  featuredProducts: products.filter((product) => product.fields.featured),
};

const comfySlice = createSlice({
  name: "ecommerce",
  initialState,
  reducers: {
    setIsLoading: (state) => {
      state.isLoading = true;
    },
    setShowCart: (state) => {
      state.showCart = !state.showCart;
    },
    setShowSideBar: (state) => {
      state.showSideBar = !state.showSideBar;
    },
    setShowCheckout: (state) => {
      state.showCheckout = !state.showCheckout;
    },
    setCartProducts: () => {},
    addProductToCart: (state, action) => {
      const currentProduct = state.cartProducts.find(
        (cp) => cp.id === action.payload.id
      );

      if (currentProduct) {
        currentProduct.count++;
      } else {
        state.cartProducts.push({ ...action.payload, count: 1 });
      }
    },
    deleteCartProduct: (state, action) => {
      state.cartProducts = state.cartProducts.filter(
        (cp) => cp.id !== action.payload.id
      );
    },
    increaseCountAmount: (state, action) => {
      const currentProduct = state.cartProducts.find(
        (cp) => cp.id === action.payload.id
      );

      currentProduct.count++;
    },
    decreaseCountAmount: (state, action) => {
      const currentProduct = state.cartProducts.find(
        (cp) => cp.id === action.payload.id
      );

      currentProduct.count--;
    },
  },
});

export const {
  setIsLoading,
  setShowCart,
  setShowSideBar,
  setShowCheckout,
  setCartProducts,
  addProductToCart,
  deleteCartProduct,
  increaseCountAmount,
  decreaseCountAmount,
} = comfySlice.actions;

export default comfySlice.reducer;
