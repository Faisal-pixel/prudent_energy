import { createSlice } from "@reduxjs/toolkit";

export const FINANCE_ADMIN_PURCHASE_CONTRACTS_INITIAL_STATE = {
    
    financeAdminPurchaseContractsColumns: [
        {
            captioon: "Contract No",
            dataField: "contractNo",
        },
        {
            captioon: "Description",
            dataField: "description",
        },
        {
            captioon: "Contract Date & Time",
            dataField: "contractDateAndTime",
        },
    ],

    /*********************** TABLE DATA ************************/
    financeAdminPurchaseContracts: {
        status: "idle", // "idle" | "loading" | "succeeded" | "failed"
        error: null,
        financeAdminPurchaseContractsData: []
    },
}

export const financeAdminPurchaseContractsSlice = createSlice({
    name: "financeAdminPurchaseContracts",
    initialState: FINANCE_ADMIN_PURCHASE_CONTRACTS_INITIAL_STATE,
})

export const financeAdminPurchaseContractsReducer = financeAdminPurchaseContractsSlice.reducer;