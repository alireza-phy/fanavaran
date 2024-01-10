import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 1,
      catId: 1,
      catName: "digitalProducts",
      subCatId: 1,
      subCatName: "laptop",
      name: "لپ تاپ 15.6 اینچی لنوو مدل Ideapad 1-Celeron 4GB 256SSD",
      brand: "لنوو",
      imgUrl:
        "https://static.vecteezy.com/system/resources/previews/003/240/508/original/beautiful-purple-daisy-flower-isolated-on-white-background-vector.jpg",
      score: 4.2,
      price: 25000000,
      discount: 5,
    },
    {
      id: 2,
      catId: 1,
      catName: "digitalProducts",
      subCatId: 1,
      subCatName: "laptop",
      name: "لپ تاپ 15.6 اینچی ایسوس مدل Vivobook R565EP-EJ628-i7 8GB 512SSD MX330",
      brand: "ایسوس",
      imgUrl:
        "https://static.vecteezy.com/system/resources/previews/003/240/508/original/beautiful-purple-daisy-flower-isolated-on-white-background-vector.jpg",
      score: 4.5,
      price: 29500000,
      discount: 3,
    },
    {
      id: 3,
      catId: 1,
      catName: "digitalProducts",
      subCatId: 1,
      subCatName: "laptop",
      name: "لپ تاپ 15.6 اینچی اچ‌پی مدل Victus 15 FA1093DX-i5 13420H 8GB 512SSD RTX3050 W",
      brand: "اچ پی",
      imgUrl:
        "https://static.vecteezy.com/system/resources/previews/003/240/508/original/beautiful-purple-daisy-flower-isolated-on-white-background-vector.jpg",
      score: 4.1,
      price: 35000000,
      discount: 5,
    },
    {
      id: 4,
      catId: 1,
      catName: "digitalProducts",
      subCatId: 2,
      subCatName: "headphone",
      name: "هدفون بلوتوثی کیو سی وای مدل T13 TWS",
      brand: "کیو سی وای",
      imgUrl:
        "https://static.vecteezy.com/system/resources/previews/003/240/508/original/beautiful-purple-daisy-flower-isolated-on-white-background-vector.jpg",
      score: 4.1,
      price: 5700000,
      discount: 0,
    },
    {
      id: 5,
      catId: 1,
      catName: "digitalProducts",
      subCatId: 2,
      subCatName: "headphone",
      name: "هدفون بلوتوثی سامسونگ مدل Galaxy Buds2 Pro",
      brand: "سامسونگ",
      imgUrl:
        "https://static.vecteezy.com/system/resources/previews/003/240/508/original/beautiful-purple-daisy-flower-isolated-on-white-background-vector.jpg",
      score: 4.9,
      price: 5200000,
      discount: 10,
    },
    {
      id: 6,
      catId: 1,
      catName: "digitalProducts",
      subCatId: 2,
      subCatName: "headphone",
      name: "هدفون بلوتوثی اپل مدل AirPods Pro 2nd Generation",
      brand: "اپل",
      imgUrl:
        "https://static.vecteezy.com/system/resources/previews/003/240/508/original/beautiful-purple-daisy-flower-isolated-on-white-background-vector.jpg",
      score: 4.1,
      price: 9000000,
      discount: 5,
    },
    {
      id: 7,
      catId: 1,
      catName: "digitalProducts",
      subCatId: 3,
      subCatName: "printer",
      name: "پرینتر چندکاره جوهرافشان با قابلیت چاپ عکس کانن مدل PIXMA MG2540s",
      brand: "کانن",
      imgUrl:
        "https://static.vecteezy.com/system/resources/previews/003/240/508/original/beautiful-purple-daisy-flower-isolated-on-white-background-vector.jpg",
      score: 4.1,
      price: 2300000,
      discount: 0,
    },
    {
      id: 8,
      catId: 1,
      catName: "digitalProducts",
      subCatId: 3,
      subCatName: "printer",
      name: "پرینتر چند کاره لیزری اچ‌پی مدل LaserJet MFP M141w",
      brand: "اتم",
      imgUrl:
        "https://static.vecteezy.com/system/resources/previews/003/240/508/original/beautiful-purple-daisy-flower-isolated-on-white-background-vector.jpg",
      score: 4.2,
      price: 11200000,
      discount: 5,
    },
    {
      id: 9,
      catId: 1,
      catName: "digitalProducts",
      subCatId: 4,
      subCatName: "mobile",
      name: "گوشی موبایل سامسونگ مدل Galaxy S23 Ultra دو سیم کارت ظرفیت 256 گیگابایت و رم 12 گیگابایت - ویتنام",
      brand: "سامسونگ",
      imgUrl:
        "https://static.vecteezy.com/system/resources/previews/003/240/508/original/beautiful-purple-daisy-flower-isolated-on-white-background-vector.jpg",
      score: 4.7,
      price: 3900000,
      discount: 10,
    },
    {
      id: 10,
      catId: 2,
      catName: "homeAndKitchen",
      subCatId: 5,
      subCatName: "kitchenUtensils",
      name: "چاقو تیز کن دنور مدل 038731DR",
      brand: "دنور",
      imgUrl:
        "https://static.vecteezy.com/system/resources/previews/003/240/508/original/beautiful-purple-daisy-flower-isolated-on-white-background-vector.jpg",
      score: 4.2,
      price: 200000,
      discount: 10,
    },
    {
      id: 11,
      catId: 2,
      catName: "homeAndKitchen",
      subCatId: 6,
      subCatName: "bathroom",
      name: "میله پرده حمام دلفین مدل FLX-250",
      brand: "دلفین",
      imgUrl:
        "https://static.vecteezy.com/system/resources/previews/003/240/508/original/beautiful-purple-daisy-flower-isolated-on-white-background-vector.jpg",
      score: 4.7,
      price: 400000,
      discount: 2,
    },
    {
      id: 12,
      catId: 2,
      catName: "homeAndKitchen",
      subCatId: 7,
      subCatName: "furnitureAndDecoration",
      name: "مبل تک نفره پیرو مدل لم کد 2201",
      brand: "پیرو",
      imgUrl:
        "https://static.vecteezy.com/system/resources/previews/003/240/508/original/beautiful-purple-daisy-flower-isolated-on-white-background-vector.jpg",
      score: 4.7,
      price: 3200000,
      discount: 0,
    },
    {
      id: 13,
      catId: 2,
      catName: "homeAndKitchen",
      subCatId: 7,
      subCatName: "furnitureAndDecoration",
      name: "شلف دیواری آرتینو مدل 3tier",
      brand: "آرتینو",
      imgUrl:
        "https://static.vecteezy.com/system/resources/previews/003/240/508/original/beautiful-purple-daisy-flower-isolated-on-white-background-vector.jpg",
      score: 4.3,
      price: 140000,
      discount: 0,
    },
    {
      id: 14,
      catId: 3,
      catName: "fashionAndClothing",
      subCatId: 8,
      subCatName: "menCloths",
      name: "تی شرت آستین بلند مردانه زی سا مدل 1531623004305",
      brand: "زی سا",
      imgUrl:
        "https://static.vecteezy.com/system/resources/previews/003/240/508/original/beautiful-purple-daisy-flower-isolated-on-white-background-vector.jpg",
      score: 4.6,
      price: 699000,
      discount: 5,
    },
    {
      id: 15,
      catId: 3,
      catName: "fashionAndClothing",
      subCatId: 9,
      subCatName: "womenCloths",
      name: "بلوز آستین سه ربع زنانه افراتین مدل 7559 رنگ آبی",
      brand: "افراتین",
      imgUrl:
        "https://static.vecteezy.com/system/resources/previews/003/240/508/original/beautiful-purple-daisy-flower-isolated-on-white-background-vector.jpg",
      score: 4,
      price: 440000,
      discount: 2,
    },
    {
      id: 16,
      catId: 3,
      catName: "fashionAndClothing",
      subCatId: 10,
      subCatName: "kidsCloths",
      name: "ست تی شرت و شلوار بچگانه سپیدپوش کد 140201",
      brand: "سفیدپوش",
      imgUrl:
        "https://static.vecteezy.com/system/resources/previews/003/240/508/original/beautiful-purple-daisy-flower-isolated-on-white-background-vector.jpg",
      score: 4.8,
      price: 240000,
      discount: 20,
    },
    {
      id: 17,
      catId: 3,
      catName: "fashionAndClothing",
      subCatId: 11,
      subCatName: "jewelry",
      name: "آویز گردنبند طلا 18 عیار زنانه مدل مکعب رنگ قرمز",
      brand: "الماس",
      imgUrl:
        "https://static.vecteezy.com/system/resources/previews/003/240/508/original/beautiful-purple-daisy-flower-isolated-on-white-background-vector.jpg",
      score: 4.8,
      price: 14000000,
      discount: 2,
    },
  ],
  selectedProduct: {},
};

const productsSlice = createSlice({
  name: "digitalCategory",
  initialState,
  reducers: {
    addNewProduct: (state, { payload }) => {
      return { ...state, products: [...state.products, payload] };
    },
    selectProduct: (state, { payload }) => {
      console.log(state, payload);
      return { ...state, selectedProduct: payload };
    },
  },
});

export const { addNewProduct, selectProduct } = productsSlice.actions;

export default productsSlice.reducer;
