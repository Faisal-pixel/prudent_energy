import { createSlice } from "@reduxjs/toolkit";
import { fetchProcurementAdminPurchaseContracts } from "./procurement_admin_purchase_contracts.thunk_actions";

export const PROCUREMENT_ADMIN_PURCHASE_CONTRACTS_INITIAL_STATE = {
    
    procurementAdminPurchaseContractsColumns: [
        {
            caption: "Contract No",
            dataField: "id",
        },
        {
            caption: "Description",
            dataField: "description",
        },
        {
            caption: "Contract Date & Time",
            dataField: "creationDateTime",
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
    extraReducers(builder) {
        builder
            .addCase(fetchProcurementAdminPurchaseContracts.pending, (state, action) => {
                state.procurementAdminPurchaseContracts.status = "loading";
            })
            .addCase(fetchProcurementAdminPurchaseContracts.fulfilled, (state, action) => {
                state.procurementAdminPurchaseContracts.status = "succeeded";
                const loadedData = action.payload;
                state.procurementAdminPurchaseContracts.procurementAdminPurchaseContractsData = [...loadedData];
            })
            .addCase(fetchProcurementAdminPurchaseContracts.rejected, (state, action) => {
                state.procurementAdminPurchaseContracts.status = "failed";
                state.procurementAdminPurchaseContracts.error = action.error.message;
            })
    }
})

export const procurementAdminPurchaseContractsReducer = procurementAdminPurchaseContractsSlice.reducer;