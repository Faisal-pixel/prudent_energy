import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { bidderRootReducer } from "./bidder_root_reducer";

const middleWares = [process.env.NODE_ENV === "development" && logger].filter(Boolean);

export const bidderStore = configureStore({
    reducer: bidderRootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat(middleWares),
})