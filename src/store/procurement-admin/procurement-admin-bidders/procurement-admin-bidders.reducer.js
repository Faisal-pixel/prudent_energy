import { createSlice } from "@reduxjs/toolkit";

export const PROCUREMENT_ADMIN_BIDDERS_INITIAL_STATE = {
    procurementAdminBiddersColumn: [
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
    procurementAdminBiddersData: []
}

export const procurementAdminBiddersSlice = createSlice({
    name: "procurementAdminBidders",
    initialState: PROCUREMENT_ADMIN_BIDDERS_INITIAL_STATE,
})

export const procurementAdminBiddersReducer = procurementAdminBiddersSlice.reducer;