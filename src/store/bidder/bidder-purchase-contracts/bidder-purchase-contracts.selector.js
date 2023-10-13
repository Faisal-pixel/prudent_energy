import { createSelector } from "reselect";

export const selectBidderPurchaseContractsReducer = (state) => state.bidderPurchaseContracts;

export const selectBidderPurchaseContractsData = createSelector([selectBidderPurchaseContractsReducer], (bidderPurchaseContractsSlice) => bidderPurchaseContractsSlice.bidderPurchaseContractsData)