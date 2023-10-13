import { createSelector } from "reselect";

export const selectItAdminPurchaseContractsReducer = (state) => state.itAdminPurchaseContracts;
export const selectItAdminPurchaseContractsColumn = createSelector([selectItAdminPurchaseContractsReducer], (itAdminPurchaseContractsSlice) => (itAdminPurchaseContractsSlice.itAdminPurchaseContractsColumns));
export const selectItAdminPurchaseContractsData = createSelector([selectItAdminPurchaseContractsReducer], (itAdminPurchaseContractsSlice) => (itAdminPurchaseContractsSlice.itAdminPurchaseContracts.itAdminPurchaseContractsData));