import { createSlice } from "@reduxjs/toolkit";

export const IT_ADMIN_RFQ_INITIAL_STATE = {
    itAdminRFQUnderlinedNavigations:  [
        {
            id: 1,
            navigationName: "My Requisitions",
            path: "/it-admin/request-for-quotes"
        },
        {
            id: 2,
            navigationName: "Team Requisitions",
            path: "/it-admin/request-for-quotes/team-requisitions"
        },
        {
            id: 3,
            navigationName: "Other Requisitions",
            path: "/it-admin/request-for-quotes/other-requisitions"
        },
    ],
    itAdminMyRequisitionsColumns: [
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
    itAdminMyRequisitions: {
        status: "idle", // "idle" | "loading" | "succeeded" | "failed"
        error: null,
        itAdminMyRequisitionsData: []
    },
    itAdminRequestForQuotesTeamRequisitions: {
        status: "idle", // "idle" | "loading" | "succeeded" | "failed"
        error: null,
        itAdminRequestForQuotesTeamRequisitionsData: []
    },
    itAdminRequestForQuotesOtherRequisitions: {
        status: "idle", // "idle" | "loading" | "succeeded" | "failed"
        error: null,
        itAdminRequestForQuotesOtherRequisitionsData: []
    }
}

export const itAdminRfqSlice = createSlice({
    name: "itAdminRFQ",
    initialState: IT_ADMIN_RFQ_INITIAL_STATE,
})

export const itAdminRfqReducer = itAdminRfqSlice.reducer;