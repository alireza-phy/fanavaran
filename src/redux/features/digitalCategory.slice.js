import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    category: "digitals",
    categoryFa: "کالای دیجیتال",
    subCategory: "laptop",
    subCategoryFa: "لپ تاپ",
    products: [
      {
        id: 1,
        name: "لپ تاپ 15.6 اینچی لنوو مدل Ideapad 1-Celeron 4GB 256SSD",
        brand: "لنوو",
        color: ["خاکستری", "مشکی", "نقره ای"],
        score: 4.2,
        price: 25000000,
        discount: 5,
      },
      {
        id: 2,
        name: "لپ تاپ 15.6 اینچی ایسوس مدل Vivobook R565EP-EJ628-i7 8GB 512SSD MX330",
        brand: "ایسوس",
        color: ["مشکی", "نقره ای"],
        score: 4.5,
        price: 29500000,
        discount: 3,
      },
      {
        id: 3,
        name: "لپ تاپ 15.6 اینچی اچ‌پی مدل Victus 15 FA1093DX-i5 13420H 8GB 512SSD RTX3050 W",
        brand: "اچ پی",
        color: ["خاکستری", "نقره ای"],
        score: 4.1,
        price: 35000000,
        discount: 5,
      },
    ],
  },
  {
    id: 2,
    category: "digitals",
    categoryName: "کالای دیجیتال",
  },
];

const digitalCategorySlice = createSlice({
  name: "digitalCategory",
  initialState,
  reducers: {
    addNewProduct: (state, { payload }) => {
      return [...state, payload];
    },
  },
});

export const { addNewProduct } = digitalCategorySlice.actions;

export default digitalCategorySlice.reducer;
