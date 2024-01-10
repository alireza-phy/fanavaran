import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  subCategories: [
    {
      id: 1,
      catId: 1,
      catName: "digitalProducts",
      name: "laptop",
      nameFa: "لپ تاپ",
      imgUrl:
        "https://static.vecteezy.com/system/resources/previews/003/240/508/original/beautiful-purple-daisy-flower-isolated-on-white-background-vector.jpg",
    },
    {
      id: 2,
      catId: 1,
      catName: "digitalProducts",
      name: "headphone",
      nameFa: "هدفون",
      imgUrl:
        "https://static.vecteezy.com/system/resources/previews/003/240/508/original/beautiful-purple-daisy-flower-isolated-on-white-background-vector.jpg",
    },
    {
      id: 3,
      catId: 1,
      catName: "digitalProducts",
      name: "printer",
      nameFa: "پرینتر",
      imgUrl:
        "https://static.vecteezy.com/system/resources/previews/003/240/508/original/beautiful-purple-daisy-flower-isolated-on-white-background-vector.jpg",
    },
    {
      id: 4,
      catId: 1,
      catName: "digitalProducts",
      name: "mobile",
      nameFa: "موبایل",
      imgUrl:
        "https://static.vecteezy.com/system/resources/previews/003/240/508/original/beautiful-purple-daisy-flower-isolated-on-white-background-vector.jpg",
    },
    {
      id: 5,
      catId: 2,
      catName: "homeAndKitchen",
      name: "kitchenUtensils",
      nameFa: "ظروف آشپزخانه",
      imgUrl:
        "https://static.vecteezy.com/system/resources/previews/003/240/508/original/beautiful-purple-daisy-flower-isolated-on-white-background-vector.jpg",
    },
    {
      id: 6,
      catId: 2,
      catName: "homeAndKitchen",
      name: "bathroom",
      nameFa: "حمام و سرویس بهداشتی",
      imgUrl:
        "https://static.vecteezy.com/system/resources/previews/003/240/508/original/beautiful-purple-daisy-flower-isolated-on-white-background-vector.jpg",
    },
    {
      id: 7,
      catId: 2,
      catName: "homeAndKitchen",
      name: "furnitureAndDecoration",
      nameFa: "مبلمان و دکوراسیون خانگی",
      imgUrl:
        "https://static.vecteezy.com/system/resources/previews/003/240/508/original/beautiful-purple-daisy-flower-isolated-on-white-background-vector.jpg",
    },
    {
      id: 8,
      catId: 3,
      catName: "fashionAndClothing",
      name: "menCloths",
      nameFa: "پوشاک مردانه",
      imgUrl:
        "https://static.vecteezy.com/system/resources/previews/003/240/508/original/beautiful-purple-daisy-flower-isolated-on-white-background-vector.jpg",
    },
    {
      id: 9,
      catId: 3,
      catName: "fashionAndClothing",
      name: "womenCloths",
      nameFa: "پوشاک زنانه",
      imgUrl:
        "https://static.vecteezy.com/system/resources/previews/003/240/508/original/beautiful-purple-daisy-flower-isolated-on-white-background-vector.jpg",
    },
    {
      id: 10,
      catId: 3,
      catName: "fashionAndClothing",
      name: "kidsCloths",
      nameFa: "پوشاک بچگانه",
      imgUrl:
        "https://static.vecteezy.com/system/resources/previews/003/240/508/original/beautiful-purple-daisy-flower-isolated-on-white-background-vector.jpg",
    },
    {
      id: 11,
      catId: 3,
      catName: "fashionAndClothing",
      name: "jewelry",
      nameFa: "زیورآلات",
      imgUrl:
        "https://static.vecteezy.com/system/resources/previews/003/240/508/original/beautiful-purple-daisy-flower-isolated-on-white-background-vector.jpg",
    },
  ],
  selectedSubCategory: {},
};

const subCategoriesSlice = createSlice({
  name: "subCategories",
  initialState,
  reducers: {
    addNewSubCategory: (state, { payload }) => {
      return { ...state, subCategories: [...state.subCategories, payload] };
    },
    selectSubcategory: (state, { payload }) => {
      return { ...state, selectedProduct: payload };
    },
  },
});

export const { addNewSubCategory, selectSubcategory } =
  subCategoriesSlice.actions;

export default subCategoriesSlice.reducer;
