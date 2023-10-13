import { createSelector } from "reselect";

export const selectManagementDashboardReducer = (state) => state.managementDashboard;
export const selectManagementDashboardActivityStatusData = createSelector([selectManagementDashboardReducer], (managementDashboardSlice) => managementDashboardSlice.managementDashboardActivityStatusData);
export const selectManagementDashboardRecentRequisitionsColumns = createSelector([selectManagementDashboardReducer], (managementDashboardSlice) => managementDashboardSlice.managementDashboardRecentRequisitionsColumns);
export const selectManagementDashboardRecentRequisitionsData = createSelector([selectManagementDashboardReducer], (managementDashboardSlice) => managementDashboardSlice.managementDashboardRecentRequisitions.managementDashboardRecentRequisitionsData);