import { createSlice } from "@reduxjs/toolkit";

export const FINANCE_ADMIN_RFQ_INITIAL_STATE = {
    financeAdminRFQUnderlinedNavigations:  [
        {
            id: 1,
            navigationName: "My Requisitions",
            path: "/finance-admin/request-for-quotes"
        },
        {
            id: 2,
            navigationName: "Team Requisitions",
            path: "/finance-admin/request-for-quotes/team-requisitions"
        },
        {
            id: 3,
            navigationName: "Other Requisitions",
            path: "/finance-admin/request-for-quotes/other-requisitions"
        },
    ],
    financeAdminMyRequisitionsColumns: [
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
    financeAdminMyRequisitions: {
        status: "idle", // "idle" | "loading" | "succeeded" | "failed"
        error: null,
        financeAdminMyRequisitionsData: []
    },
    financeAdminRequestForQuotesTeamRequisitions: {
        status: "idle", // "idle" | "loading" | "succeeded" | "failed"
        error: null,
        financeAdminRequestForQuotesTeamRequisitionsData: []
    },
    financeAdminRequestForQuotesOtherRequisitions: {
        status: "idle", // "idle" | "loading" | "succeeded" | "failed"
        error: null,
        financeAdminRequestForQuotesOtherRequisitionsData: []
    }
}

export const financeAdminRfqSlice = createSlice({
    name: "financeAdminRFQ",
    initialState: FINANCE_ADMIN_RFQ_INITIAL_STATE,
})

export const financeAdminRfqReducer = financeAdminRfqSlice.reducer;