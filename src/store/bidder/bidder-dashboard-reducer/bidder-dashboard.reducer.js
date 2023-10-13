import { createSlice } from "@reduxjs/toolkit";

const BIDDER_DASHBOARD_INITIAL_STATE = {
    bidderActivityStatusData: [
        {
            activityStatusTitle: "RFQ",
            goTo: "/bidder-dashboard/bidder-request-for-quotes",
            activityStatusValue: 9
        },
        {
            activityStatusTitle: "RFP",
            goTo: "/bidder-dashboard/bidder-purchase-contracts",
            activityStatusValue: 55
        },
        {
            activityStatusTitle: "Contracts",
            goTo: "/bidder-dashboard/bidder-purchase-contracts",
            activityStatusValue: 62
        }
    ],
    bidderDashboardRecentBidsColumns: [
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
    bidderDashboardRecentBids: {
        status: "idle", // "idle" | "loading" | "succeeded" | "failed"
        error: null,
        bidderDashboardRecentBidsData: [
            {
                id: 1,
                rfqNo: "RFQ-0001",
                description: "RFQ Description",
                expDateAndTime: "2021-09-01 12:00:00",
                status: "Pending"
            }
        ]
    }
}

const bidderDashboardSlice = createSlice({
    name: "bidderDashboard",
    initialState: BIDDER_DASHBOARD_INITIAL_STATE,
})

export const bidderDashboardReducer = bidderDashboardSlice.reducer;