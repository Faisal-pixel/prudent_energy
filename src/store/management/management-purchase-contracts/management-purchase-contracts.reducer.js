import { createSlice } from "@reduxjs/toolkit";

export const MANAGEMENT_PURCHASE_CONTRACTS_INITIAL_STATE = {
    
    managementPurchaseContractsColumns: [
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
    managementPurchaseContracts: {
        status: "idle", // "idle" | "loading" | "succeeded" | "failed"
        error: null,
        managementPurchaseContractsData: []
    },
}

export const managementPurchaseContractsSlice = createSlice({
    name: "managementPurchaseContracts",
    initialState: MANAGEMENT_PURCHASE_CONTRACTS_INITIAL_STATE,
})

export const managementPurchaseContractsReducer = managementPurchaseContractsSlice.reducer;