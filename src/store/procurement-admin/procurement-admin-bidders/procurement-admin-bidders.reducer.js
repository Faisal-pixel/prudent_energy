import { createSlice } from "@reduxjs/toolkit";
import { fetchProcurementAdminBidders } from "./procurement_admin_bidders.thunk_actions";

export const PROCUREMENT_ADMIN_BIDDERS_INITIAL_STATE = {
    procurementAdminBiddersColumn: [
        {
            caption: "Bidder Number",
            dataField: "id"
        },
        {
            caption: "Company Name",
            dataField: "bidderName"
        },
        {
            caption: "Company Email",
            dataField: "primaryEmailAddress"
        },
        {
            caption: "Company Phone Number",
            dataField: "primaryContactNumber"
        },
        {
            caption: "Company Address",
            dataField: "address"
        },
    ],
    procurementAdminBidders: {
        status: "idle", // "idle" | "loading" | "succeeded" | "failed"
        error: null,
        procurementAdminBiddersData: []
    }
}

export const procurementAdminBiddersSlice = createSlice({
    name: "procurementAdminBidders",
    initialState: PROCUREMENT_ADMIN_BIDDERS_INITIAL_STATE,
    extraReducers(builder) {
        builder
            .addCase(fetchProcurementAdminBidders.pending, (state, action) => {
                state.procurementAdminBidders.status = "loading";
            })
            .addCase(fetchProcurementAdminBidders.fulfilled, (state, action) => {
                state.procurementAdminBidders.status = "succeeded";
                const loadedData = action.payload;
                state.procurementAdminBidders.procurementAdminBiddersData = [...loadedData];
            })
            .addCase(fetchProcurementAdminBidders.rejected, (state, action) => {
                state.procurementAdminBidders.status = "failed";
                state.procurementAdminBidders.error = action.error.message;
            })
    }
})

export const procurementAdminBiddersReducer = procurementAdminBiddersSlice.reducer;