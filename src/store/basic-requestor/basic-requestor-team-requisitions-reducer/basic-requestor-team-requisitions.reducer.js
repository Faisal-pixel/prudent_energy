import { createSlice } from "@reduxjs/toolkit";

const BASIC_REQUESTOR_TEAM_REQUISITIONS_INITIAL_STATE = {
    basicRequestorActivityStatusData: [
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
            activityStatusTitle: "In Progress",
            goTo: "",
            activityStatusValue: 10
        },
        {
            activityStatusTitle: "Completed",
            goTo: "",
            activityStatusValue: 135
        },
        {
            activityStatusTitle: "Pending Rating",
            goTo: "",
            activityStatusValue: 2
        },
    ],
    basicRequestorTeamRequisitionsColumns: [
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

    /********************************* TABLE DATA *********************************/
    basicRequestorTeamRequisitions: {
        status: "idle", // "idle" | "loading" | "succeeded" | "failed"
        error: null,
        basicRequestorTeamRequisitionsData: []
    }
}

const basicRequestorTeamRequisitionsSlice = createSlice({
    name: "basicRequestorMyRequisitions",
    initialState: BASIC_REQUESTOR_TEAM_REQUISITIONS_INITIAL_STATE,
})

export const basicRequestorTeamRequisitionsReducer = basicRequestorTeamRequisitionsSlice.reducer;
