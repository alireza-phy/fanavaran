import { combineReducers } from "redux";
import categoriesSlice from "./features/category.slice";
import subCategoriesSlice from "./features/subCategory.slice";
import productsSlice from "./features/product.slice";
import cartSlice from "./features/cart.slice";

const rootReducer = combineReducers({
  categories: categoriesSlice,
  subCategories: subCategoriesSlice,
  products: productsSlice,
  cart: cartSlice,
});

export default rootReducer;
