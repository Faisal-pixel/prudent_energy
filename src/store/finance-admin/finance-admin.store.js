import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { financeAdminRootReducer } from "./finance-admin_root_reducer";

const middleWares = [process.env.NODE_ENV === "development" && logger].filter(Boolean);

export const financeAdminStore = configureStore({
    reducer: financeAdminRootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat(middleWares),
})