import { configureStore } from "@reduxjs/toolkit";

import addressSlice from "./slices/addressSlice";
import cartSlice from "./slices/cartSlice";
import wishlistSlice from "./slices/wishlistSlice";

const store = configureStore({
  reducer: {
    address: addressSlice,
    cart: cartSlice,
    wishlist: wishlistSlice,
  },
  // middleware: [thunk], // middleware automatically added in redux toolkit no need to mention
});

export default store;
