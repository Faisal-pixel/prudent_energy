import { createContext, useReducer } from "react";

export const ProcurementAdminContext = createContext({
    procurementAdminNavigations:  [],
    procurementAdminSettingsUnderlinedNavigations:  [],
    procurementAdminRequestForQuotesUnderlinedNavigations:  [],

    procurementAdminActivityStatusData: [],

    // *********************************All table Columns {Headers} ******************************************** //
    procurementAdminRequisitionsColumns: [],
    procurementAdminAdminUsersColumns: [],
    procurementAdminAdminUsersData: [],
    procurementAdminUserRolesColumns: [],
    procurementAdminUserRolesData: [],
    procurementAdminUserPermissionsColumns: [],
    procurementAdminUserPermissionsData: [],
    procurementAdminBiddersColumn: [],
    
    procurementAdminPurchaseContractsColumns: [],
    procurementAdminNominatedBiddersColumns: [],

    // *********************************All table Data {table body} ******************************************** //
    procurementAdminBiddersData: [],
    procurementAdminDashboardRecentRequisitionsData: [],
    procurementAdminRequestForQuotesMyRequisitionsData: [],
    procurementAdminRequestForQuotesTeamRequisitionsData: [],
    procurementAdminRequestForQuotesOtherRequisitionsData: [],
    procurementAdminPurchaseContractsData: [],
    //For Dashboard Recent Requisitions
    procurementAdminDashboardRecentRequisitionsNominatedBiddersData: [],
    //For my Requisitions
    procurementAdminMyRequisitionsNominatedBiddersData: [],
    //For TEAM REQUISITIONS
    procurementAdminTeamRequisitionsNominatedBiddersData: [],
    //For OTHER REQUISITIONS
    procurementAdminOtherRequisitionsNominatedBiddersData: [],
    uploadedFilesPurchaseContracts: [],
});

export const PROCUREMENT_ADMIN_INITIAL_STATE = {
    procurementAdminNavigations:  [
        {
            id: 1,
            navigationName: "Dashboard",
            path: "/procurement-admin/dashboard"
        },
        {
            id: 2,
            navigationName: "Settings",
            path: "/procurement-admin/settings"
        },
        {
            id: 3,
            navigationName: "Bidders",
            path: "/procurement-admin/bidders"
        },
        {
            id: 4,
            navigationName: "Request for Quotes",
            path: "/procurement-admin/request-for-quotes"
        },
        {
            id: 5,
            navigationName: "Purchase Contracts",
            path: "/procurement-admin/purchase-contracts"
        },
        {
            id: 6,
            navigationName: "Purchase Documents",
            path: "/procurement-admin/purchase-documents"
        },
    ],
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

    procurementAdminRequestForQuotesUnderlinedNavigations:  [
        {
            id: 1,
            navigationName: "My Requisitions",
            path: "/procurement-admin/request-for-quotes"
        },
        {
            id: 2,
            navigationName: "Team Requisitions",
            path: "/procurement-admin/request-for-quotes/team-requisitions"
        },
        {
            id: 3,
            navigationName: "Other Requisitions",
            path: "/procurement-admin/request-for-quotes/other-requisitions"
        },
    ],

    procurementAdminActivityStatusData: [
        {
            activityStatusTitle: "New",
            goTo: "",
            activityStatusValue: 5
        },
        {
            activityStatusTitle: "Awaiting Approval",
            goTo: "",
            activityStatusValue: 31
        },
        {
            activityStatusTitle: "Approved",
            goTo: "",
            activityStatusValue: 51
        },
        {
            activityStatusTitle: "In progress",
            goTo: "",
            activityStatusValue: 10
        },
        {
            activityStatusTitle: "Completed",
            goTo: "/procurement-admin/purchase-contracts",
            activityStatusValue: 135
        },
        {
            activityStatusTitle: "Pending Rating",
            goTo: "",
            activityStatusValue: 2
        }
    ],
    
    

    // *********************************All table Columns {Headers} ******************************************** //
    procurementAdminRequisitionsColumns: [
        {
            Header: "RFQ No",
            accessor: "rfqNo",
        },
        {
            Header: "Description",
            accessor: "description",
        },
        {
            Header: "Expiration Date & Time",
            accessor: "expDateAndTime",
        },
        {
            Header: "Status",
            accessor: "status",
        },
    ],
    procurementAdminAdminUsersColumns: [
        {
            Header: "Admin Users",
            accessor: "adminUsers",
        },
        {
            Header: "User Role",
            accessor: "userRole",
        },
        {
            Header: "User Type",
            accessor: "userType",
        },
    ],
    procurementAdminUserRolesColumns: [
        {
            Header: "Role ID",
            accessor: "roleID",
        },
        {
            Header: "Role Description",
            accessor: "roleDescription",
        },
        {
            Header: "User Type",
            accessor: "userType",
        },
    ],
    procurementAdminUserPermissionsColumns: [
        {
            Header: "Pages",
            accessor: "pages",
        },
        {
            Header: "Read Permission",
            accessor: "readPermission",
        },
        {
            Header: "Insert Permission",
            accessor: "insertPermission",
        },
        {
            Header: "Modify Permission",
            accessor: "modifyPermission",
        },
    ],
    procurementAdminBiddersColumn: [
        {
            Header: "Bidder Number",
            accessor: "bidderNumber"
        },
        {
            Header: "Company Name",
            accessor: "companyName"
        },
        {
            Header: "Company Email",
            accessor: "companyEmail"
        },
        {
            Header: "Company Phone Number",
            accessor: "companyPhoneNumber"
        },
        {
            Header: "Company Address",
            accessor: "companyAddress"
        },
    ],
    procurementAdminPurchaseContractsColumns: [
        {
            Header: "Contract No",
            accessor: "contractNo",
        },
        {
            Header: "Description",
            accessor: "description",
        },
        {
            Header: "Contract Date & Time",
            accessor: "contractDateAndTime",
        },
    ],
    procurementAdminNominatedBiddersColumns: [
        {
            Header: "Vendor Code",
            accessor: "vendorCode",
        },
        {
            Header: "Vendor Name",
            accessor: "vendorName",
        },
        {
            Header: "Bid Submitted",
            accessor: "bidSubmitted",
        },
        {
            Header: "Bid Value",
            accessor: "bidValue",
        },
    ],

    // *********************************All table Data {table body} ******************************************** //

    procurementAdminDashboardRecentRequisitionsData: [
        {
            rfqNo: "SD2568",
            description: "Building Maintenance",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            requester: "Lukman Suleiman",
            status: "Pending"
        },
        {
            rfqNo: "SD2568",
            description: "Building Maintenance",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            requester: "John Doe",
            status: "Pending"
        },
        {
            rfqNo: "SD2568",
            description: "Building Maintenance",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            requester: "John Doe",
            status: "Pending"
        },
        {
            rfqNo: "SD2568",
            description: "Building Maintenance",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            requester: "John Doe",
            status: "Pending"
        },
        {
            rfqNo: "SD1564",
            description: "IT infrastructure Service",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            requester: "John Doe",
            status: "Pending"
        },
        {
            rfqNo: "SD1564",
            description: "IT infrastructure Service",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            requester: "John Doe",
            status: "Completed"
        },
        {
            rfqNo: "SD1564",
            description: "IT infrastructure Service",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            requester: "Jack Ryan",
            status: "Completed"
        },
        {
            rfqNo: "SD2568",
            description: "Building Maintenance",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            requester: "Jack Ryan",
            status: "Pending"
        },
        {
            rfqNo: "SD1564",
            description: "IT infrastructure Service",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            requester: "Lukman Suleiman",
            status: "Pending"
        },
        {
            rfqNo: "SD1564",
            description: "IT infrastructure Service",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            requester: "Jack Ryan",
            status: "Completed"
        },
        {
            rfqNo: "SD1564",
            description: "IT infrastructure Service",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            requester: "Jack Ryan",
            status: "Completed"
        },
    ],
    procurementAdminAdminUsersData: [
        {
            adminUsers: "John Snow",
            userRole: "Basic",
            userType: "Vendor"
        },
        {
            adminUsers: "Bill Gate",
            userRole: "Approver",
            userType: "Vendor"
        },
        {
            adminUsers: "Jane Doe",
            userRole: "Uploader",
            userType: "Employee"
        },
        {
            adminUsers: "Mark Henry",
            userRole: "Sys Admin",
            userType: "Vendor"
        },
        {
            adminUsers: "Alabi Tope",
            userRole: "Manger",
            userType: "Employee"
        },
        {
            adminUsers: "Bello Fawaz",
            userRole: "Lead",
            userType: "Employee"
        },
        {
            adminUsers: "Joke Ayo",
            userRole: "Supervisor",
            userType: "Vendor"
        },
    ],
    procurementAdminUserRolesData: [
        {
            roleID: "Basic",
            roleDescription: "Basic user",
            userType: "Vendor"
        },
        {
            roleID: "Approver",
            roleDescription: "An approver of all records",
            userType: "Vendor"
        },
        {
            roleID: "Uploader",
            roleDescription: "Uploader of documents",
            userType: "Employee"
        },
        {
            roleID: "Sys Admin",
            roleDescription: "System Administrator",
            userType: "Vendor"
        },
        {
            roleID: "Manger",
            roleDescription: "To Approve",
            userType: "Employee"
        },
        {
            roleID: "Lead",
            roleDescription: "Super user",
            userType: "Employee"
        },
        {
            roleID: "Supervisor",
            roleDescription: "To review",
            userType: "Vendor"
        },
    ],
    procurementAdminUserPermissionsData: [
        {
            pages: "Request for Quote",
            readPermission: "Yes",
            insertPermission: "No",
            modifyPermission: "No"
        },
        {
            pages: "Purchase Order",
            readPermission: "Yes",
            insertPermission: "No",
            modifyPermission: "No"
        },
        {
            pages: "Waybill",
            readPermission: "Yes",
            insertPermission: "No",
            modifyPermission: "No"
        },
        {
            pages: "Invoice",
            readPermission: "Yes",
            insertPermission: "No",
            modifyPermission: "No"
        },
        {
            pages: "Issue Resolution",
            readPermission: "Yes",
            insertPermission: "Indirect",
            modifyPermission: "No"
        },
        {
            pages: "Issue Resolution",
            readPermission: "Yes",
            insertPermission: "No",
            modifyPermission: "No"
        },
    ],
    procurementAdminBiddersData: [
        {
            bidderNumber: "PE0001",
            companyName: "XYZ Corporations",
            companyEmail: "xyzCorporation@gmail.com",
            companyPhoneNumber: "08022568794",
            companyAddress: "Lekki, Lagos"
        },
        {
            bidderNumber: "PE0002",
            companyName: "Nigeria Limited",
            companyEmail: "NigeriaLimited@gmail.com",
            companyPhoneNumber: "08022568794",
            companyAddress: "Ikeja, Lagos"
        },
        {
            bidderNumber: "PE0003",
            companyName: "Sigma Holdings",
            companyEmail: "sigmaholdings@gmail.com",
            companyPhoneNumber: "08022568794",
            companyAddress: "Ajah, Lagos"
        },
        {
            bidderNumber: "PE0001",
            companyName: "XYZ Corporations",
            companyEmail: "xyzCorporation@gmail.com",
            companyPhoneNumber: "08022568794",
            companyAddress: "Lekki, Lagos"
        },
        {
            bidderNumber: "PE0001",
            companyName: "XYZ Corporations",
            companyEmail: "xyzCorporation@gmail.com",
            companyPhoneNumber: "08022568794",
            companyAddress: "Lekki, Lagos"
        },
        {
            bidderNumber: "PE0001",
            companyName: "XYZ Corporations",
            companyEmail: "xyzCorporation@gmail.com",
            companyPhoneNumber: "08022568794",
            companyAddress: "Lekki, Lagos"
        },
    ],
    procurementAdminRequestForQuotesMyRequisitionsData: [
        {
            rfqNo: "SD2568",
            description: "Building Maintenance",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            requester: "Lukman Suleiman",
            status: "Pending"
        },
        {
            rfqNo: "SD2568",
            description: "Building Maintenance",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            requester: "John Doe",
            status: "Pending"
        },
        {
            rfqNo: "SD2568",
            description: "Building Maintenance",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            requester: "John Doe",
            status: "Pending"
        },
        {
            rfqNo: "SD2568",
            description: "Building Maintenance",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            requester: "John Doe",
            status: "Pending"
        },
        {
            rfqNo: "SD1564",
            description: "IT infrastructure Service",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            requester: "John Doe",
            status: "Pending"
        },
        {
            rfqNo: "SD1564",
            description: "IT infrastructure Service",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            requester: "John Doe",
            status: "Completed"
        },
        {
            rfqNo: "SD1564",
            description: "IT infrastructure Service",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            requester: "Jack Ryan",
            status: "Completed"
        },
        {
            rfqNo: "SD2568",
            description: "Building Maintenance",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            requester: "Jack Ryan",
            status: "Pending"
        },
        {
            rfqNo: "SD1564",
            description: "IT infrastructure Service",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            requester: "Lukman Suleiman",
            status: "Pending"
        },
        {
            rfqNo: "SD1564",
            description: "IT infrastructure Service",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            requester: "Jack Ryan",
            status: "Completed"
        },
        {
            rfqNo: "SD1564",
            description: "IT infrastructure Service",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            requester: "Jack Ryan",
            status: "Completed"
        },
    ],
    procurementAdminRequestForQuotesTeamRequisitionsData: [
        {
            rfqNo: "SD2568",
            description: "Building Maintenance",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            requester: "Lukman Suleiman",
            status: "Pending"
        },
        {
            rfqNo: "SD2568",
            description: "Building Maintenance",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            requester: "John Doe",
            status: "Pending"
        },
        {
            rfqNo: "SD2568",
            description: "Building Maintenance",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            requester: "John Doe",
            status: "Pending"
        },
        {
            rfqNo: "SD2568",
            description: "Building Maintenance",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            requester: "John Doe",
            status: "Pending"
        },
        {
            rfqNo: "SD1564",
            description: "IT infrastructure Service",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            requester: "John Doe",
            status: "Pending"
        },
        {
            rfqNo: "SD1564",
            description: "IT infrastructure Service",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            requester: "John Doe",
            status: "Completed"
        },
        {
            rfqNo: "SD1564",
            description: "IT infrastructure Service",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            requester: "Jack Ryan",
            status: "Completed"
        },
        {
            rfqNo: "SD2568",
            description: "Building Maintenance",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            requester: "Jack Ryan",
            status: "Pending"
        },
        {
            rfqNo: "SD1564",
            description: "IT infrastructure Service",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            requester: "Lukman Suleiman",
            status: "Pending"
        },
        {
            rfqNo: "SD1564",
            description: "IT infrastructure Service",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            requester: "Jack Ryan",
            status: "Completed"
        },
        {
            rfqNo: "SD1564",
            description: "IT infrastructure Service",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            requester: "Jack Ryan",
            status: "Completed"
        },
    ],
    procurementAdminRequestForQuotesOtherRequisitionsData: [
        {
            rfqNo: "SD2568",
            description: "Building Maintenance",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            requester: "Lukman Suleiman",
            status: "Pending"
        },
        {
            rfqNo: "SD2568",
            description: "Building Maintenance",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            requester: "John Doe",
            status: "Pending"
        },
        {
            rfqNo: "SD2568",
            description: "Building Maintenance",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            requester: "John Doe",
            status: "Pending"
        },
        {
            rfqNo: "SD2568",
            description: "Building Maintenance",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            requester: "John Doe",
            status: "Pending"
        },
        {
            rfqNo: "SD1564",
            description: "IT infrastructure Service",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            requester: "John Doe",
            status: "Pending"
        },
        {
            rfqNo: "SD1564",
            description: "IT infrastructure Service",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            requester: "John Doe",
            status: "Completed"
        },
        {
            rfqNo: "SD1564",
            description: "IT infrastructure Service",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            requester: "Jack Ryan",
            status: "Completed"
        },
        {
            rfqNo: "SD2568",
            description: "Building Maintenance",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            requester: "Jack Ryan",
            status: "Pending"
        },
        {
            rfqNo: "SD1564",
            description: "IT infrastructure Service",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            requester: "Lukman Suleiman",
            status: "Pending"
        },
        {
            rfqNo: "SD1564",
            description: "IT infrastructure Service",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            requester: "Jack Ryan",
            status: "Completed"
        },
        {
            rfqNo: "SD1564",
            description: "IT infrastructure Service",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            requester: "Jack Ryan",
            status: "Completed"
        },
    ],
    procurementAdminPurchaseContractsData: [
        {
            contractNo: "PO2568",
            description: "Building Maintenance",
            contractDateAndTime: "2022-01-28 14:53 GMT+1",
        },
        {
            contractNo: "PO2568",
            description: "Building Maintenance",
            contractDateAndTime: "2022-01-28 14:53 GMT+1",
        },
        {
            contractNo: "PO2568",
            description: "Building Maintenance",
            contractDateAndTime: "2022-01-28 14:53 GMT+1",
        },
        {
            contractNo: "PO2568",
            description: "Building Maintenance",
            contractDateAndTime: "2022-01-28 14:53 GMT+1",
        },
        {
            contractNo: "PO2568",
            description: "Building Maintenance",
            contractDateAndTime: "2022-01-28 14:53 GMT+1",
        },
        {
            contractNo: "PO1564",
            description: "IT infrastructure Service",
            contractDateAndTime: "2022-01-28 14:53 GMT+1",
        },
        {
            contractNo: "PO1564",
            description: "IT infrastructure Service",
            contractDateAndTime: "2022-01-28 14:53 GMT+1",
        },
        {
            contractNo: "PO1564",
            description: "IT infrastructure Service",
            contractDateAndTime: "2022-01-28 14:53 GMT+1",
        },
        {
            contractNo: "PO2568",
            description: "Building Maintenance",
            contractDateAndTime: "2022-01-28 14:53 GMT+1",
        },
        {
            contractNo: "PO2568",
            description: "Building Maintenance",
            contractDateAndTime: "2022-01-28 14:53 GMT+1",
        },
        {
            contractNo: "PO1564",
            description: "IT infrastructure Service",
            contractDateAndTime: "2022-01-28 14:53 GMT+1",
        },
        {
            contractNo: "PO1564",
            description: "IT infrastructure Service",
            contractDateAndTime: "2022-01-28 14:53 GMT+1",
        },
        {
            contractNo: "PO1564",
            description: "IT infrastructure Service",
            contractDateAndTime: "2022-01-28 14:53 GMT+1",
        },
    ],
    //For Dashboard Recent Requisitions
    procurementAdminDashboardRecentRequisitionsNominatedBiddersData: [
        {
            vendorCode: "VEND021",
            vendorName: "XYZ Corporations",
            bidSubmitted: "Yes",
            bidValue: "N2,000,000.00"
        },
        {
            vendorCode: "VEND022",
            vendorName: "ABC Nigeria Limited",
            bidSubmitted: "Yes",
            bidValue: "N5,000,000.00"
        },
        {
            vendorCode: "VEND023",
            vendorName: "Sigma Holdings",
            bidSubmitted: "Yes",
            bidValue: "N3,000,000.00"
        },
        {
            vendorCode: "VEND024",
            vendorName: "Redstar Global Limited",
            bidSubmitted: "Yes",
            bidValue: "N1,000,000.00"
        },
    ],
    //For my Requisitions
    procurementAdminMyRequisitionsNominatedBiddersData: [
        {
            vendorCode: "VEND021",
            vendorName: "XYZ Corporations",
            bidSubmitted: "Yes",
            bidValue: "N2,000,000.00"
        },
        {
            vendorCode: "VEND022",
            vendorName: "ABC Nigeria Limited",
            bidSubmitted: "Yes",
            bidValue: "N5,000,000.00"
        },
        {
            vendorCode: "VEND023",
            vendorName: "Sigma Holdings",
            bidSubmitted: "Yes",
            bidValue: "N3,000,000.00"
        },
        {
            vendorCode: "VEND024",
            vendorName: "Redstar Global Limited",
            bidSubmitted: "Yes",
            bidValue: "N1,000,000.00"
        },
    ],
    //For TEAM REQUISITIONS
    procurementAdminTeamRequisitionsNominatedBiddersData: [
        {
            vendorCode: "VEND021",
            vendorName: "XYZ Corporations",
            bidSubmitted: "Yes",
            bidValue: "N2,000,000.00"
        },
        {
            vendorCode: "VEND022",
            vendorName: "ABC Nigeria Limited",
            bidSubmitted: "Yes",
            bidValue: "N5,000,000.00"
        },
        {
            vendorCode: "VEND023",
            vendorName: "Sigma Holdings",
            bidSubmitted: "Yes",
            bidValue: "N3,000,000.00"
        },
        {
            vendorCode: "VEND024",
            vendorName: "Redstar Global Limited",
            bidSubmitted: "Yes",
            bidValue: "N1,000,000.00"
        },
    ],
    //For OTHER REQUISITIONS
    procurementAdminOtherRequisitionsNominatedBiddersData: [
        {
            vendorCode: "VEND021",
            vendorName: "XYZ Corporations",
            bidSubmitted: "Yes",
            bidValue: "N2,000,000.00"
        },
        {
            vendorCode: "VEND022",
            vendorName: "ABC Nigeria Limited",
            bidSubmitted: "Yes",
            bidValue: "N5,000,000.00"
        },
        {
            vendorCode: "VEND023",
            vendorName: "Sigma Holdings",
            bidSubmitted: "Yes",
            bidValue: "N3,000,000.00"
        },
        {
            vendorCode: "VEND024",
            vendorName: "Redstar Global Limited",
            bidSubmitted: "Yes",
            bidValue: "N1,000,000.00"
        },
    ],
    uploadedFilesPurchaseContracts: [
        {
            id: 1,
            documentName: "document-name.pdf",
            preview: "preview",
            size: "5.7mb"
        },
        {
            id: 2,
            documentName: "document-name.pdf",
            preview: "preview",
            size: "5.7mb"
        },
        {
            id: 3,
            documentName: "document-name.pdf",
            preview: "preview",
            size: "5.7mb"
        },
        {
            id: 4,
            documentName: "document-name.pdf",
            preview: "preview",
            size: "5.7mb"
        }
    ],
}



// const PROCUREMENT_ADMIN_ACTION_TYPES = {
//     SET_PROCUREMENT_ADMIN_REQUEST_FOR_QUOTES_RECENT_BIDS_DATA: "SET_PROCUREMENT_ADMIN_REQUEST_FOR_QUOTES_RECENT_BIDS_DATA"
// }

const procurementAdminReducer = (state, action) => {
    
    return {
        ...state
    }
}

export const ProcurementAdminProvider = ({children}) => {
    
    
    const [state] = useReducer(procurementAdminReducer, PROCUREMENT_ADMIN_INITIAL_STATE);
    const {procurementAdminNavigations, procurementAdminSettingsUnderlinedNavigations, procurementAdminRequestForQuotesUnderlinedNavigations, procurementAdminActivityStatusData, procurementAdminRequisitionsColumns, procurementAdminAdminUsersColumns, procurementAdminAdminUsersData, procurementAdminUserRolesColumns, procurementAdminUserRolesData, procurementAdminUserPermissionsColumns, procurementAdminUserPermissionsData, procurementAdminBiddersColumn, procurementAdminBiddersData, procurementAdminDashboardRecentRequisitionsData, procurementAdminRequestForQuotesMyRequisitionsData, procurementAdminRequestForQuotesTeamRequisitionsData, procurementAdminRequestForQuotesOtherRequisitionsData, procurementAdminPurchaseContractsColumns, procurementAdminPurchaseContractsData, procurementAdminNominatedBiddersColumns, procurementAdminDashboardRecentRequisitionsNominatedBiddersData, procurementAdminMyRequisitionsNominatedBiddersData, procurementAdminTeamRequisitionsNominatedBiddersData, procurementAdminOtherRequisitionsNominatedBiddersData, uploadedFilesPurchaseContracts} = state;
    const value = {procurementAdminNavigations,procurementAdminSettingsUnderlinedNavigations, procurementAdminRequestForQuotesUnderlinedNavigations, procurementAdminActivityStatusData, procurementAdminRequisitionsColumns, procurementAdminAdminUsersColumns, procurementAdminAdminUsersData, procurementAdminUserRolesColumns, procurementAdminUserRolesData, procurementAdminUserPermissionsColumns, procurementAdminUserPermissionsData, procurementAdminBiddersColumn, procurementAdminBiddersData, procurementAdminDashboardRecentRequisitionsData, procurementAdminRequestForQuotesMyRequisitionsData, procurementAdminRequestForQuotesTeamRequisitionsData, procurementAdminRequestForQuotesOtherRequisitionsData, procurementAdminPurchaseContractsColumns, procurementAdminPurchaseContractsData, procurementAdminNominatedBiddersColumns, procurementAdminDashboardRecentRequisitionsNominatedBiddersData, procurementAdminMyRequisitionsNominatedBiddersData, procurementAdminTeamRequisitionsNominatedBiddersData, procurementAdminOtherRequisitionsNominatedBiddersData, uploadedFilesPurchaseContracts}

    return <ProcurementAdminContext.Provider value={value}>{children}</ProcurementAdminContext.Provider>
}