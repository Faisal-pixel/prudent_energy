import { createSlice } from "@reduxjs/toolkit";


export const FINANCE_ADMIN_DASHBOARD_INITIAL_STATE = {
    financeAdminDashboardActivityStatusData: [
        {
            activityStatusTitle: "New",
            goTo: "",
            activityStatusValue: 5
        },
        {
            activityStatusTitle: "Awaiting Approval",
            goTo: "",
            activityStatusValue: 31
        },
        {
            activityStatusTitle: "Approved",
            goTo: "",
            activityStatusValue: 51
        },
        {
            activityStatusTitle: "In progress",
            goTo: "",
            activityStatusValue: 10
        },
        {
            activityStatusTitle: "Completed",
            goTo: "/finance-admin/purchase-contracts",
            activityStatusValue: 135
        },
        {
            activityStatusTitle: "Pending Rating",
            goTo: "",
            activityStatusValue: 2
        }
    ],
    // *********************************All table Columns {Headers} ******************************************** //
    financeAdminDashboardRecentRequisitionsColumns: [
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

    // *********************************All table Data {table body} ******************************************** //
    financeAdminDashboardRecentRequisitions: {
        status: "idle", // "idle" | "loading" | "succeeded" | "failed"
        error: null,
        financeAdminDashboardRecentRequisitionsData: [],
    }
}

export const financeAdminDashboardSlice = createSlice({
    name: "financeAdminDashboard",
    initialState: FINANCE_ADMIN_DASHBOARD_INITIAL_STATE,
    extraReducers(builder) {}
})

export const financeAdminDashboardReducer = financeAdminDashboardSlice.reducer;