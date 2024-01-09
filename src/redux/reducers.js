import { combineReducers } from "redux";
import productsSlice from "./features/product.slice";
import digitalCategorySlice from "./features/digitalCategory.slice";

const rootReducer = combineReducers({
  products: productsSlice,
  digitalCategory: digitalCategorySlice,
});

export default rootReducer;
