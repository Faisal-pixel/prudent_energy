import { createSlice } from "@reduxjs/toolkit";

export const PROCUREMENT_ADMIN_RFQ_INITIAL_STATE = {
    procurementAdminRFQUnderlinedNavigations:  [
        {
            id: 1,
            navigationName: "My Requisitions",
            path: "/procurement-admin/request-for-quotes"
        },
        {
            id: 2,
            navigationName: "Team Requisitions",
            path: "/procurement-admin/request-for-quotes/team-requisitions"
        },
        {
            id: 3,
            navigationName: "Other Requisitions",
            path: "/procurement-admin/request-for-quotes/other-requisitions"
        },
    ],
    procurementAdminMyRequisitionsColumns: [
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
    procurementAdminMyRequisitions: {
        status: "idle", // "idle" | "loading" | "succeeded" | "failed"
        error: null,
        procurementAdminMyRequisitionsData: []
    },
    procurementAdminRequestForQuotesTeamRequisitions: {
        status: "idle", // "idle" | "loading" | "succeeded" | "failed"
        error: null,
        procurementAdminRequestForQuotesTeamRequisitionsData: []
    },
    procurementAdminRequestForQuotesOtherRequisitions: {
        status: "idle", // "idle" | "loading" | "succeeded" | "failed"
        error: null,
        procurementAdminRequestForQuotesOtherRequisitionsData: []
    }
}

export const procurementAdminRfqSlice = createSlice({
    name: "procurementAdminRFQ",
    initialState: PROCUREMENT_ADMIN_RFQ_INITIAL_STATE,
})

export const procurementAdminRfqReducer = procurementAdminRfqSlice.reducer;