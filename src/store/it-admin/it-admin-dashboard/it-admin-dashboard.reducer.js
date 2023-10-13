import { createSlice } from "@reduxjs/toolkit";


export const IT_ADMIN_DASHBOARD_INITIAL_STATE = {
    itAdminDashboardActivityStatusData: [
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
            goTo: "/it-admin/purchase-contracts",
            activityStatusValue: 135
        },
        {
            activityStatusTitle: "Pending Rating",
            goTo: "",
            activityStatusValue: 2
        }
    ],
    // *********************************All table Columns {Headers} ******************************************** //
    itAdminDashboardRecentRequisitionsColumns: [
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
    itAdminDashboardRecentRequisitions: {
        status: "idle", // "idle" | "loading" | "succeeded" | "failed"
        error: null,
        itAdminDashboardRecentRequisitionsData: [],
    }
}

export const itAdminDashboardSlice = createSlice({
    name: "itAdminDashboard",
    initialState: IT_ADMIN_DASHBOARD_INITIAL_STATE,
    extraReducers(builder) {}
})

export const itAdminDashboardReducer = itAdminDashboardSlice.reducer;