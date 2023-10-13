import { createSlice } from "@reduxjs/toolkit";


export const MANAGEMENT_DASHBOARD_INITIAL_STATE = {
    managementDashboardActivityStatusData: [
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
            goTo: "/management/purchase-contracts",
            activityStatusValue: 135
        },
        {
            activityStatusTitle: "Pending Rating",
            goTo: "",
            activityStatusValue: 2
        }
    ],
    // *********************************All table Columns {Headers} ******************************************** //
    managementDashboardRecentRequisitionsColumns: [
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
    managementDashboardRecentRequisitions: {
        status: "idle", // "idle" | "loading" | "succeeded" | "failed"
        error: null,
        managementDashboardRecentRequisitionsData: [],
    }
}

export const managementDashboardSlice = createSlice({
    name: "managementDashboard",
    initialState: MANAGEMENT_DASHBOARD_INITIAL_STATE,
    extraReducers(builder) {}
})

export const managementDashboardReducer = managementDashboardSlice.reducer;