import { createSlice } from "@reduxjs/toolkit";

export const IT_ADMIN_BIDDERS_INITIAL_STATE = {
    itAdminBiddersColumn: [
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
    itAdminBidders: {
        status: "idle", // "idle" | "loading" | "succeeded" | "failed"
        error: null,
        itAdminBiddersData: []
    }
}

export const itAdminBiddersSlice = createSlice({
    name: "itAdminBidders",
    initialState: IT_ADMIN_BIDDERS_INITIAL_STATE,
})

export const itAdminBiddersReducer = itAdminBiddersSlice.reducer;