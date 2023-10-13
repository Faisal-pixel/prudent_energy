import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { procurementAdminRootReducer } from "./procurement-admin_root_reducer";

const middleWares = [process.env.NODE_ENV === "development" && logger].filter(Boolean);

export const procurementAdminStore = configureStore({
    reducer: procurementAdminRootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat(middleWares),
})