import { createSlice, nanoid } from "@reduxjs/toolkit";
import { fetchProcurementAdminSettingsAdminUsers } from "./procurement_admin_settings.thunk_actions";

export const PROCUREMENT_ADMIN_SETTINGS_INITIAL_STATE = {
    procurementAdminSettingsUnderlinedNavigations:  [
        {
            id: 1,
            navigationName: "Admin Users",
            path: "/procurement-admin/settings"
        },
        {
            id: 2,
            navigationName: "User Roles",
            path: "/procurement-admin/settings/user-roles"
        },
        {
            id: 3,
            navigationName: "User Permissions",
            path: "/procurement-admin/settings/user-permissions"
        },
    ],
    // *********************************All table Columns {Headers} ******************************************** //
    procurementAdminAdminUsersColumns: [
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
    procurementAdminUserRolesColumns: [
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
    procurementAdminUserPermissionsColumns: [
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
    // procurementAdminAdminUsersData: [
    //     {
    //         id: 1,
    //         adminUsers: "John Snow",
    //         userRole: "Basic",
    //         userType: "Vendor"
    //     },
    //     {
    //         id: 2,
    //         adminUsers: "Bill Gate",
    //         userRole: "Approver",
    //         userType: "Vendor"
    //     },
    //     {
    //         id: 3,
    //         adminUsers: "Jane Doe",
    //         userRole: "Uploader",
    //         userType: "Employee"
    //     },
    //     {
    //         id: 4,
    //         adminUsers: "Mark Henry",
    //         userRole: "Sys Admin",
    //         userType: "Vendor"
    //     },
    //     {
    //         id: 5,
    //         adminUsers: "Alabi Tope",
    //         userRole: "Manger",
    //         userType: "Employee"
    //     },
    //     {
    //         id: 6,
    //         adminUsers: "Bello Fawaz",
    //         userRole: "Lead",
    //         userType: "Employee"
    //     },
    //     {
    //         id: 7,
    //         adminUsers: "Joke Ayo",
    //         userRole: "Supervisor",
    //         userType: "Vendor"
    //     },
    // ]
    procurementAdminAdminUsers: {
        status: "idle", // "idle" | "loading" | "succeeded" | "failed"
        error: null,
        procurementAdminAdminUsersData: []
    }
    ,
    procurementAdminUserRolesData: [
        {
            id: 1,
            roleID: "Basic",
            roleDescription: "Basic user",
            userType: "Vendor"
        },
        {
            id: 2,
            roleID: "Approver",
            roleDescription: "An approver of all records",
            userType: "Vendor"
        },
        {
            id: 3,
            roleID: "Uploader",
            roleDescription: "Uploader of documents",
            userType: "Employee"
        },
        {
            id: 4,
            roleID: "Sys Admin",
            roleDescription: "System Administrator",
            userType: "Vendor"
        },
        {
            id: 5,
            roleID: "Manger",
            roleDescription: "To Approve",
            userType: "Employee"
        },
        {
            id: 6,
            roleID: "Lead",
            roleDescription: "Super user",
            userType: "Employee"
        },
        {
            id: 7,
            roleID: "Supervisor",
            roleDescription: "To review",
            userType: "Vendor"
        },
    ],
    procurementAdminUserPermissionsData: [
        {
            id: 1,
            pages: "Request for Quote",
            readPermission: "Yes",
            insertPermission: "No",
            modifyPermission: "No"
        },
        {
            id: 2,
            pages: "Purchase Order",
            readPermission: "Yes",
            insertPermission: "No",
            modifyPermission: "No"
        },
        {
            id: 3,
            pages: "Waybill",
            readPermission: "Yes",
            insertPermission: "No",
            modifyPermission: "No"
        },
        {
            id: 4,
            pages: "Invoice",
            readPermission: "Yes",
            insertPermission: "No",
            modifyPermission: "No"
        },
        {
            id: 5,
            pages: "Issue Resolution",
            readPermission: "Yes",
            insertPermission: "Indirect",
            modifyPermission: "No"
        },
        {
            id: 6,
            pages: "Issue Resolution",
            readPermission: "Yes",
            insertPermission: "No",
            modifyPermission: "No"
        },
    ],
}

export const procurementAdminSettingsSlice = createSlice({
    name: "procurementAdminSettings",
    initialState: PROCUREMENT_ADMIN_SETTINGS_INITIAL_STATE,
    extraReducers(builder) {
        builder
            .addCase(fetchProcurementAdminSettingsAdminUsers.pending, (state, action) => {
                state.procurementAdminAdminUsers.status = "loading";
            })
            .addCase(fetchProcurementAdminSettingsAdminUsers.fulfilled, (state, action) => {
                state.procurementAdminAdminUsers.status = "succeeded";
                const loadedData = action.payload.map(adminUser => {
                    adminUser.id = nanoid();
                    return adminUser;
                })
                console.log(loadedData);
                state.procurementAdminAdminUsers.procurementAdminAdminUsersData = [...loadedData];
            })
            .addCase(fetchProcurementAdminSettingsAdminUsers.rejected, (state, action) => {
                state.procurementAdminAdminUsers.status = "failed";
                state.procurementAdminAdminUsers.error = action.error.message;
            })
    }
})

export const procurementAdminSettingsReducer = procurementAdminSettingsSlice.reducer;