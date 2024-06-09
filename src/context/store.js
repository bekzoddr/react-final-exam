import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import { toggleToWishes } from "./wishlistSlice";
import cartSlice from "./cartSlice";

export const store = configureStore({
  reducer: {
    wishlist: toggleToWishes,
    cart: cartSlice,

    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
