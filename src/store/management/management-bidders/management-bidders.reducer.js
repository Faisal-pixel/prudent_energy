import { createSlice } from "@reduxjs/toolkit";

export const MANAGEMENT_BIDDERS_INITIAL_STATE = {
    managementBiddersColumn: [
        {
            caption: "Bidder Number",
            dataField: "bidderNumber"
        },
        {
            caption: "Company Name",
            dataField: "companyName"
        },
        {
            caption: "Company Email",
            dataField: "companyEmail"
        },
        {
            caption: "Company Phone Number",
            dataField: "companyPhoneNumber"
        },
        {
            caption: "Company Address",
            dataField: "companyAddress"
        },
    ],
    managementBidders: {
        status: "idle", // "idle" | "loading" | "succeeded" | "failed"
        error: null,
        managementBiddersData: []
    }
}

export const managementBiddersSlice = createSlice({
    name: "managementBidders",
    initialState: MANAGEMENT_BIDDERS_INITIAL_STATE,
})

export const managementBiddersReducer = managementBiddersSlice.reducer;