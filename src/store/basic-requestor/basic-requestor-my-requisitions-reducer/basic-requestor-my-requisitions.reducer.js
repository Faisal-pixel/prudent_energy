import { createSlice } from "@reduxjs/toolkit";

const BASIC_REQUESTOR_MY_REQUISITIONS_INITIAL_STATE = {
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
    basicRequestorMyRecentRequisitionsColumns: [
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
    basicRequestorMyRecentRequisitions: {
        status: "idle", // "idle" | "loading" | "succeeded" | "failed"
        error: null,
        basicRequestorMyRecentRequisitionsData: [
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

const basicRequestorMyRequisitionsSlice = createSlice({
    name: "basicRequestorMyRequisitions",
    initialState: BASIC_REQUESTOR_MY_REQUISITIONS_INITIAL_STATE,
})

export const basicRequestorMyRequisitionsReducer = basicRequestorMyRequisitionsSlice.reducer;
