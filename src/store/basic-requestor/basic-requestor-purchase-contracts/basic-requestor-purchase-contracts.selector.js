import { createSelector } from "reselect";

export const selectBasicRequestorMyPurchaseContractsReducer = (state) => state.basicRequestorMyPurchaseContracts;

export const selectBasicRequestorPurchaseContractsData = createSelector([selectBasicRequestorMyPurchaseContractsReducer], (basicRequestorMyPurchaseContractsSlice) => basicRequestorMyPurchaseContractsSlice.basicRequestorPurchaseContractsData)