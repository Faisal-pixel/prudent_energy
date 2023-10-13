import { createSlice } from "@reduxjs/toolkit";

export const MANAGEMENT_RFQ_INITIAL_STATE = {
    managementRFQUnderlinedNavigations:  [
        {
            id: 1,
            navigationName: "My Requisitions",
            path: "/management/request-for-quotes"
        },
        {
            id: 2,
            navigationName: "Team Requisitions",
            path: "/management/request-for-quotes/team-requisitions"
        },
        {
            id: 3,
            navigationName: "Other Requisitions",
            path: "/management/request-for-quotes/other-requisitions"
        },
    ],
    managementMyRequisitionsColumns: [
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
    managementMyRequisitions: {
        status: "idle", // "idle" | "loading" | "succeeded" | "failed"
        error: null,
        managementMyRequisitionsData: []
    },
    managementRequestForQuotesTeamRequisitions: {
        status: "idle", // "idle" | "loading" | "succeeded" | "failed"
        error: null,
        managementRequestForQuotesTeamRequisitionsData: []
    },
    managementRequestForQuotesOtherRequisitions: {
        status: "idle", // "idle" | "loading" | "succeeded" | "failed"
        error: null,
        managementRequestForQuotesOtherRequisitionsData: []
    }
}

export const managementRfqSlice = createSlice({
    name: "managementRFQ",
    initialState: MANAGEMENT_RFQ_INITIAL_STATE,
})

export const managementRfqReducer = managementRfqSlice.reducer;