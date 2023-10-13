import { createSlice } from "@reduxjs/toolkit";


export const PROCUREMENT_ADMIN_DASHBOARD_INITIAL_STATE = {
    procurementAdminDashboardActivityStatusData: [
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
            goTo: "/procurement-admin/purchase-contracts",
            activityStatusValue: 135
        },
        {
            activityStatusTitle: "Pending Rating",
            goTo: "",
            activityStatusValue: 2
        }
    ],
    // *********************************All table Columns {Headers} ******************************************** //
    procurementAdminDashboardRecentRequisitionsColumns: [
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
    procurementAdminDashboardRecentRequisitions: {
        status: "idle", // "idle" | "loading" | "succeeded" | "failed"
        error: null,
        procurementAdminDashboardRecentRequisitionsData: [],
    }
}

export const procurementAdminDashboardSlice = createSlice({
    name: "procurementAdminDashboard",
    initialState: PROCUREMENT_ADMIN_DASHBOARD_INITIAL_STATE,
    extraReducers(builder) {}
})

export const procurementAdminDashboardReducer = procurementAdminDashboardSlice.reducer;