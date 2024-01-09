import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [
    { id: 1, name: "digitals" },
    { id: 2, name: "fashions" },
    { id: 3, name: "home" },
  ],
  subcategories: [{ id: 1, catId: 1, name: "laptop" }],
  product: [{ id: 1, catId: 1, subCatId: 1, name: "lenovo" }],
  selectedItem: []
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addNewProduct: (state, { payload }) => {
      return [...state, payload];
    },
  },
});

export const { addNewProduct } = productsSlice.actions;

export default productsSlice.reducer;
