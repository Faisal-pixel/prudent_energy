import { createSelector } from "reselect";

export const selectItAdminDashboardReducer = (state) => state.itAdminDashboard;
export const selectItAdminDashboardActivityStatusData = createSelector([selectItAdminDashboardReducer], (itAdminDashboardSlice) => itAdminDashboardSlice.itAdminDashboardActivityStatusData);
export const selectItAdminDashboardRecentRequisitionsColumns = createSelector([selectItAdminDashboardReducer], (itAdminDashboardSlice) => itAdminDashboardSlice.itAdminDashboardRecentRequisitionsColumns);
export const selectItAdminDashboardRecentRequisitionsData = createSelector([selectItAdminDashboardReducer], (itAdminDashboardSlice) => itAdminDashboardSlice.itAdminDashboardRecentRequisitions.itAdminDashboardRecentRequisitionsData);