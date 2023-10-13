import { createSelector } from "reselect";

export const selectManagementPurchaseContractsReducer = (state) => state.managementPurchaseContracts;
export const selectManagementPurchaseContractsColumn = createSelector([selectManagementPurchaseContractsReducer], (managementPurchaseContractsSlice) => (managementPurchaseContractsSlice.managementPurchaseContractsColumns));
export const selectManagementPurchaseContractsData = createSelector([selectManagementPurchaseContractsReducer], (managementPurchaseContractsSlice) => (managementPurchaseContractsSlice.managementPurchaseContracts.managementPurchaseContractsData));