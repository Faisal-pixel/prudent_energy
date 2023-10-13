import { createSelector } from "reselect";

export const selectProcurementAdminPurchaseContractsReducer = (state) => state.procurementAdminPurchaseContracts;
export const selectProcurementAdminPurchaseContractsColumn = createSelector([selectProcurementAdminPurchaseContractsReducer], (procurementAdminPurchaseContractsSlice) => (procurementAdminPurchaseContractsSlice.procurementAdminPurchaseContractsColumns));
export const selectProcurementAdminPurchaseContractsData = createSelector([selectProcurementAdminPurchaseContractsReducer], (procurementAdminPurchaseContractsSlice) => (procurementAdminPurchaseContractsSlice.procurementAdminPurchaseContracts.procurementAdminPurchaseContractsData));