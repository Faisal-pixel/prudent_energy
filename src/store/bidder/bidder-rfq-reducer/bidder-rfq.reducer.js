import { createSlice } from "@reduxjs/toolkit";

const BIDDER_RFQ_INITIAL_STATE = {
    bidderRequestForQuotesRecentBidsColumns: [
        {
            caption: "RFQ No",
            dataField: "rfqNo",
        },
        {
            caption: "Description",
            dataField: "description",
        },
        {
            caption: "Expiration Date & Time",
            dataField: "expDateAndTime",
        },
        {
            caption: "Status",
            dataField: "status",
        },
    ],
    /**************************** TABLE DATA **************************************/
    bidderRequestForQuotesRecentBids: {
        status: "idle", // "idle" | "loading" | "succeeded" | "failed"
        error: null,
        bidderRequestForQuotesRecentBidsData: []
    }
}

const bidderRfqSlice = createSlice({
    name: "bidderRfq",
    initialState: BIDDER_RFQ_INITIAL_STATE,
})

export const bidderRfqReducer = bidderRfqSlice.reducer;