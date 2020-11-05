import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

//rootReducer
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

//adding persist
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

//exports
export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);
