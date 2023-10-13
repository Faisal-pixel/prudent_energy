import { createSelector } from "reselect";

export const selectProcurementAdminDashboardReducer = (state) => state.procurementAdminDashboard;
export const selectProcurementAdminDashboardActivityStatusData = createSelector([selectProcurementAdminDashboardReducer], (procurementAdminDashboardSlice) => procurementAdminDashboardSlice.procurementAdminDashboardActivityStatusData);
export const selectProcurementAdminDashboardRecentRequisitionsColumns = createSelector([selectProcurementAdminDashboardReducer], (procurementAdminDashboardSlice) => procurementAdminDashboardSlice.procurementAdminDashboardRecentRequisitionsColumns);
export const selectProcurementAdminDashboardRecentRequisitionsData = createSelector([selectProcurementAdminDashboardReducer], (procurementAdminDashboardSlice) => procurementAdminDashboardSlice.procurementAdminDashboardRecentRequisitions.procurementAdminDashboardRecentRequisitionsData);