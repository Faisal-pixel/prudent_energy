import { createSelector } from "reselect";

export const selectItAdminSettingsReducer = (state) => state.itAdminSettings;
export const selectItAdminSettingsUnderlinedNavigations = createSelector([selectItAdminSettingsReducer], (itAdminSettingsSlice) => itAdminSettingsSlice.itAdminSettingsUnderlinedNavigations);

// ADMIN USER
export const selectItAdminAdminUsersColumns = createSelector([selectItAdminSettingsReducer], (itAdminSettingsSlice) => itAdminSettingsSlice.itAdminAdminUsersColumns);
export const selectItAdminAdminUsersData = createSelector([selectItAdminSettingsReducer], (itAdminSettingsSlice) => itAdminSettingsSlice.itAdminAdminUsers.itAdminAdminUsersData);
export const selectItAdminAdminUsersStatus = createSelector([selectItAdminSettingsReducer], (itAdminSettingsSlice) => itAdminSettingsSlice.itAdminAdminUsers.status);
// ADMIN USER ENDS

//USER ROLES
export const selectItAdminUserRolesColumn = createSelector([selectItAdminSettingsReducer], (itAdminSettingsSlice) => itAdminSettingsSlice.itAdminUserRolesColumns);
export const selectItAdminUserRolesData = createSelector([selectItAdminSettingsReducer], (itAdminSettingsSlice) => itAdminSettingsSlice.itAdminUserRoles.itAdminUserRolesData);
//USER ROLES ENDS

//USER PERMISSIONS
export const selectItAdminUserPermissionsColumn = createSelector([selectItAdminSettingsReducer], (itAdminSettingsSlice) => itAdminSettingsSlice.itAdminUserPermissionsColumns);
export const selectItAdminUserPermissionsData = createSelector([selectItAdminSettingsReducer], (itAdminSettingsSlice) => itAdminSettingsSlice.itAdminUserPermissions.itAdminUserPermissionsData);
//USER PERMISSIONS ENDS