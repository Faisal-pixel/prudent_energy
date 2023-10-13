
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { combinedRootReducer } from "./combined_root_reducer";

const middleWares = [process.env.NODE_ENV === "development" && logger].filter(Boolean);

export const combinedStore = configureStore({
    reducer: combinedRootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleWares)
})