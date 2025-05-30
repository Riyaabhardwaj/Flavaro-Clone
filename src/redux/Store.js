import {configureStore} from "@reduxjs/toolkit";
import CartSlice from"./slices/CartSlice"
import CategorySlice from "./slices/CategorySice"
import SearchSlice from "./slices/SearchSlice"
const Store=configureStore({
    reducer:{
        cart:CartSlice,
        category:CategorySlice,
        search:SearchSlice,
    }
});
export default Store;