import { createSlice } from "@reduxjs/toolkit";

export const PROCUREMENT_ADMIN_PURCHASE_CONTRACTS_INITIAL_STATE = {
    
    procurementAdminPurchaseContractsColumns: [
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
    procurementAdminPurchaseContracts: {
        status: "idle", // "idle" | "loading" | "succeeded" | "failed"
        error: null,
        procurementAdminPurchaseContractsData: []
    },
}

export const procurementAdminPurchaseContractsSlice = createSlice({
    name: "procurementAdminPurchaseContracts",
    initialState: PROCUREMENT_ADMIN_PURCHASE_CONTRACTS_INITIAL_STATE,
})

export const procurementAdminPurchaseContractsReducer = procurementAdminPurchaseContractsSlice.reducer;