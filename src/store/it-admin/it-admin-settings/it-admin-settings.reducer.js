import { createSlice, nanoid } from "@reduxjs/toolkit";
import { fetchItAdminSettingsAdminUsers } from "./it_admin_settings.thunk_actions";

export const IT_ADMIN_SETTINGS_INITIAL_STATE = {
    itAdminSettingsUnderlinedNavigations:  [
        {
            id: 1,
            navigationName: "Admin Users",
            path: "/it-admin/settings"
        },
        {
            id: 2,
            navigationName: "User Roles",
            path: "/it-admin/settings/user-roles"
        },
        {
            id: 3,
            navigationName: "User Permissions",
            path: "/it-admin/settings/user-permissions"
        },
    ],
    // *********************************All table Columns {Headers} ******************************************** //
    itAdminAdminUsersColumns: [
        {
            caption: "Admin Users",
            dataField: "userFullName",
        },
        {
            caption: "User Role",
            dataField: "roleName",
        },
        {
            caption: "User Type",
            dataField: "userType",
        },
    ],
    itAdminUserRolesColumns: [
        {
            dataField: "roleID",
            caption: "Role ID",
        },
        {
            dataField: "roleDescription",
            caption: "Role Description",
        },
        {
            dataField: "userType",
            caption: "User Type",
        },
    ],
    itAdminUserPermissionsColumns: [
        {
            dataField: "pages",
            caption: "Pages",
        },
        {
            dataField: "readPermission",
            caption: "Read Permission",
        },
        {
            dataField: "insertPermission",
            caption: "Insert Permission",
        },
        {
            dataField: "modifyPermission",
            caption: "Modify Permission",
        },
    ],
    // *********************************All table Data {table body} ******************************************** //
    
    itAdminAdminUsers: {
        status: "idle", // "idle" | "loading" | "succeeded" | "failed"
        error: null,
        itAdminAdminUsersData: []
    }
    ,
    itAdminUserRoles: {
        status: "idle", // "idle" | "loading" | "succeeded" | "failed"
        error: null,
        itAdminUserRolesData: []
    },
    itAdminUserPermissions: {
        status: "idle", // "idle" | "loading" | "succeeded" | "failed"
        error: null,
        itAdminUserPermissionsData: []
    },
}

export const itAdminSettingsSlice = createSlice({
    name: "itAdminSettings",
    initialState: IT_ADMIN_SETTINGS_INITIAL_STATE,
    extraReducers(builder) {
        builder
            .addCase(fetchItAdminSettingsAdminUsers.pending, (state, action) => {
                state.itAdminAdminUsers.status = "loading";
            })
            .addCase(fetchItAdminSettingsAdminUsers.fulfilled, (state, action) => {
                state.itAdminAdminUsers.status = "succeeded";
                const loadedData = action.payload.map(adminUser => {
                    adminUser.id = nanoid();
                    return adminUser;
                })
                state.itAdminAdminUsers.itAdminAdminUsersData = [...loadedData];
            })
            .addCase(fetchItAdminSettingsAdminUsers.rejected, (state, action) => {
                state.itAdminAdminUsers.status = "failed";
                state.itAdminAdminUsers.error = action.error.message;
            })
    }
})

export const itAdminSettingsReducer = itAdminSettingsSlice.reducer;