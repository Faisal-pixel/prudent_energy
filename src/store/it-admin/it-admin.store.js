import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { itAdminRootReducer } from "./it-admin_root_reducer";

const middleWares = [process.env.NODE_ENV === "development" && logger].filter(Boolean);

export const itAdminStore = configureStore({
    reducer: itAdminRootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat(middleWares),
})