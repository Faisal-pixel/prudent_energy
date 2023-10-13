import { createSelector } from "reselect";

export const selectManagementBiddersReducer = (state) => state.managementBidders;
export const selectManagementBiddersColumn = createSelector([selectManagementBiddersReducer], (managementBiddersSlice) => ( managementBiddersSlice.managementBiddersColumn));
export const selectManagementBiddersData = createSelector([selectManagementBiddersReducer], (managementBiddersSlice) => managementBiddersSlice.managementBidders.managementBiddersData);