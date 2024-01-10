import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { item, count } = action.payload;
      const existingItemIndex = state.items.findIndex(
        (i) => i.item.id === item.id
      );
      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].count += count;
      } else {
        state.items.push({ item, count });
      }
    },
    removeFromCart(state, action) {
      const { itemId } = action.payload;
      state.items = state.items.filter((i) => i.item.id !== itemId);
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
