import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [
    {
      id: 1,
      name: "digitalProducts",
      imgUrl:
        "https://static.vecteezy.com/system/resources/previews/003/240/508/original/beautiful-purple-daisy-flower-isolated-on-white-background-vector.jpg",
      nameFa: "دیجیتال",
    },
    {
      id: 2,
      name: "homeAndKitchen",
      imgUrl:
        "https://static.vecteezy.com/system/resources/previews/003/240/508/original/beautiful-purple-daisy-flower-isolated-on-white-background-vector.jpg",
      nameFa: "خانه و آشپزخانه",
    },
    {
      id: 3,
      name: "fashionAndClothing",
      imgUrl:
        "https://static.vecteezy.com/system/resources/previews/003/240/508/original/beautiful-purple-daisy-flower-isolated-on-white-background-vector.jpg",
      nameFa: "مد و پوشاک",
    },
  ],
  selectedCategory: {},
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    addNewCategory: (state, { payload }) => {
      return { ...state, categories: [...state.categories, payload] };
    },
    selectCategory: (state, { payload }) => {
      console.log(state, payload);
      return { ...state, selectedCategory: payload };
    },
  },
});

export const { addNewCategory, selectCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
