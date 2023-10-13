import { createSelector } from "reselect";

export const selectProcurementAdminSettingsReducer = (state) => state.procurementAdminSettings;
export const selectProcurementAdminSettingsUnderlinedNavigations = createSelector([selectProcurementAdminSettingsReducer], (procurementAdminSettingsSlice) => procurementAdminSettingsSlice.procurementAdminSettingsUnderlinedNavigations);

// ADMIN USER
export const selectProcurementAdminAdminUsersColumns = createSelector([selectProcurementAdminSettingsReducer], (procurementAdminSettingsSlice) => procurementAdminSettingsSlice.procurementAdminAdminUsersColumns);
export const selectProcurementAdminAdminUsersData = createSelector([selectProcurementAdminSettingsReducer], (procurementAdminSettingsSlice) => procurementAdminSettingsSlice.procurementAdminAdminUsers.procurementAdminAdminUsersData);
export const selectProcurementAdminAdminUsersStatus = createSelector([selectProcurementAdminSettingsReducer], (procurementAdminSettingsSlice) => procurementAdminSettingsSlice.procurementAdminAdminUsers.status);
// ADMIN USER ENDS

//USER ROLES
export const selectProcurementAdminUserRolesColumn = createSelector([selectProcurementAdminSettingsReducer], (procurementAdminSettingsSlice) => procurementAdminSettingsSlice.procurementAdminUserRolesColumns);
export const selectProcurementAdminUserRolesData = createSelector([selectProcurementAdminSettingsReducer], (procurementAdminSettingsSlice) => procurementAdminSettingsSlice.procurementAdminUserRolesData);
//USER ROLES ENDS

//USER PERMISSIONS
export const selectProcurementAdminUserPermissionsColumn = createSelector([selectProcurementAdminSettingsReducer], (procurementAdminSettingsSlice) => procurementAdminSettingsSlice.procurementAdminUserPermissionsColumns);
export const selectProcurementAdminUserPermissionsData = createSelector([selectProcurementAdminSettingsReducer], (procurementAdminSettingsSlice) => procurementAdminSettingsSlice.procurementAdminUserPermissionsData);
//USER PERMISSIONS ENDS