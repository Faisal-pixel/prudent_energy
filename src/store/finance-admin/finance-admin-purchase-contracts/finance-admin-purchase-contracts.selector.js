import { createSelector } from "reselect";

export const selectFinanceAdminPurchaseContractsReducer = (state) => state.financeAdminPurchaseContracts;
export const selectFinanceAdminPurchaseContractsColumn = createSelector([selectFinanceAdminPurchaseContractsReducer], (financeAdminPurchaseContractsSlice) => (financeAdminPurchaseContractsSlice.financeAdminPurchaseContractsColumns));
export const selectFinanceAdminPurchaseContractsData = createSelector([selectFinanceAdminPurchaseContractsReducer], (financeAdminPurchaseContractsSlice) => (financeAdminPurchaseContractsSlice.financeAdminPurchaseContracts.financeAdminPurchaseContractsData));