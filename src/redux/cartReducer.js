import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Sintaxis SIN utilizar Prepare

const cartPersistConfig = {
  key: "cart",
  storage,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const { id, selectedSize, sizeId } = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === id && item.selectedSize === selectedSize
      );
    
      if (existingItem) {
        existingItem.quantity += 1;
      } else if (selectedSize) {
        state.items.push({ ...action.payload, quantity: 1 });
      } else {
        // If the item doesn't have a size, directly add it to the cart with a quantity of 1
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const { id, selectedSize } = action.payload;
      console.log("Removing from cart:", id, selectedSize);
      if (typeof id === "undefined" || typeof selectedSize === "undefined") {
        console.error("Invalid payload for removeFromCart:", action.payload);
        return;
      }
      state.items = state.items.filter((item) => !(item.id === id && item.selectedSize === selectedSize));
      console.log("After removal:", state.items);
    },
    removeAllItems: (state, action) => {
      state.items = [];
    },
    incrementQuantity: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload
      );
      if (existingItem) {
        existingItem.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload
      );
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== action.payload);
      }
    },
  },
});

const persistedCartReducer = persistReducer(
  cartPersistConfig,
  cartSlice.reducer
);

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  removeAllItems,
} = cartSlice.actions;

export default persistedCartReducer;
