import { createSelector } from "reselect";

export const selectProcurementAdminBiddersReducer = (state) => state.procurementAdminBidders;
export const selectProcurementAdminBiddersColumn = createSelector([selectProcurementAdminBiddersReducer], (procurementAdminBiddersSlice) => {
    console.log(procurementAdminBiddersSlice.procurementAdminBiddersColumn)
    return procurementAdminBiddersSlice.procurementAdminBiddersColumn
});
export const selectProcurementAdminBiddersData = createSelector([selectProcurementAdminBiddersReducer], (procurementAdminBiddersSlice) => procurementAdminBiddersSlice.procurementAdminBiddersData);