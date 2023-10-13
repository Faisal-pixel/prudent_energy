import { createSelector } from "reselect";

export const selectFinanceAdminDashboardReducer = (state) => state.financeAdminDashboard;
export const selectFinanceAdminDashboardActivityStatusData = createSelector([selectFinanceAdminDashboardReducer], (financeAdminDashboardSlice) => financeAdminDashboardSlice.financeAdminDashboardActivityStatusData);
export const selectFinanceAdminDashboardRecentRequisitionsColumns = createSelector([selectFinanceAdminDashboardReducer], (financeAdminDashboardSlice) => financeAdminDashboardSlice.financeAdminDashboardRecentRequisitionsColumns);
export const selectFinanceAdminDashboardRecentRequisitionsData = createSelector([selectFinanceAdminDashboardReducer], (financeAdminDashboardSlice) => financeAdminDashboardSlice.financeAdminDashboardRecentRequisitions.financeAdminDashboardRecentRequisitionsData);