import { combineReducers, createSlice } from "@reduxjs/toolkit";

export const testSlicer = createSlice({
    name: "testSlicer",
    initialState: {test: "Hi there, just testing"},
})

export const testReducer = testSlicer.reducer;

export const combinedRootReducer = combineReducers({
    test: testReducer
});

