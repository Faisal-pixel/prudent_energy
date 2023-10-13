import { createSlice } from "@reduxjs/toolkit";

export const IT_ADMIN_PURCHASE_CONTRACTS_INITIAL_STATE = {
    
    itAdminPurchaseContractsColumns: [
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
    itAdminPurchaseContracts: {
        status: "idle", // "idle" | "loading" | "succeeded" | "failed"
        error: null,
        itAdminPurchaseContractsData: []
    },
}

export const itAdminPurchaseContractsSlice = createSlice({
    name: "itAdminPurchaseContracts",
    initialState: IT_ADMIN_PURCHASE_CONTRACTS_INITIAL_STATE,
})

export const itAdminPurchaseContractsReducer = itAdminPurchaseContractsSlice.reducer;