import { createSelector } from "reselect";

export const selectProcurementAdminBiddersReducer = (state) => state.procurementAdminBidders;
export const selectProcurementAdminBiddersColumn = createSelector([selectProcurementAdminBiddersReducer], (procurementAdminBiddersSlice) => {
    return procurementAdminBiddersSlice.procurementAdminBiddersColumn
});
export const selectProcurementAdminBiddersData = createSelector([selectProcurementAdminBiddersReducer], (procurementAdminBiddersSlice) => procurementAdminBiddersSlice.procurementAdminBidders.procurementAdminBiddersData);
export const selectProcurementAdminBiddersStatus = createSelector([selectProcurementAdminBiddersReducer], (procurementAdminBiddersSlice) => procurementAdminBiddersSlice.procurementAdminBidders.status);