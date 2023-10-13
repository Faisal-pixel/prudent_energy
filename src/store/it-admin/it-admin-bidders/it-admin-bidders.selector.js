import { createSelector } from "reselect";

export const selectItAdminBiddersReducer = (state) => state.itAdminBidders;
export const selectItAdminBiddersColumn = createSelector([selectItAdminBiddersReducer], (itAdminBiddersSlice) => ( itAdminBiddersSlice.itAdminBiddersColumn));
export const selectItAdminBiddersData = createSelector([selectItAdminBiddersReducer], (itAdminBiddersSlice) => itAdminBiddersSlice.itAdminBidders.itAdminBiddersData);