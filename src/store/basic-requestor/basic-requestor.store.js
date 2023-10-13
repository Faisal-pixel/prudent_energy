import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { basicRequestorRootReducer } from "./basic-requestor-root_reducer";

const middleWares = [process.env.NODE_ENV === "development" && logger].filter(Boolean);

export const basicRequestorStore = configureStore({
    reducer: basicRequestorRootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat(middleWares),
})