import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { managementRootReducer } from "./management_root_reducer";

const middleWares = [process.env.NODE_ENV === "development" && logger].filter(Boolean);

export const managementStore = configureStore({
    reducer: managementRootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat(middleWares),
})