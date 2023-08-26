import { createContext, useReducer } from "react";

export const ManagementContext = createContext({
    managementNavigations:  [],
    managementSettingsUnderlinedNavigations:  [],
    managementRequestForQuotesUnderlinedNavigations:  [],

    managementActivityStatusData: [],

    // *********************************All table Columns {Headers} ******************************************** //
    managementRequisitionsColumns: [],
    managementAdminUsersColumns: [],
    managementAdminUsersData: [],
    managementUserRolesColumns: [],
    managementUserRolesData: [],
    managementUserPermissionsColumns: [],
    managementUserPermissionsData: [],
    managementBiddersColumn: [],
    
    managementPurchaseContractsColumns: [],
    managementNominatedBiddersColumns: [],

    // *********************************All table Data {table body} ******************************************** //
    managementBiddersData: [],
    managementDashboardRecentRequisitionsData: [],
    managementRequestForQuotesMyRequisitionsData: [],
    managementRequestForQuotesTeamRequisitionsData: [],
    managementRequestForQuotesOtherRequisitionsData: [],
    managementPurchaseContractsData: [],
    //For Dashboard Recent Requisitions
    managementDashboardRecentRequisitionsNominatedBiddersData: [],
    //For my Requisitions
    managementMyRequisitionsNominatedBiddersData: [],
    //For TEAM REQUISITIONS
    managementTeamRequisitionsNominatedBiddersData: [],
    //For OTHER REQUISITIONS
    managementOtherRequisitionsNominatedBiddersData: [],
    uploadedFilesPurchaseContracts: [],
});

export const MANAGEMENT_INITIAL_STATE = {
    managementNavigations:  [
        {
            id: 1,
            navigationName: "Dashboard",
            path: "/management/dashboard"
        },
        {
            id: 3,
            navigationName: "Bidders",
            path: "/management/bidders"
        },
        {
            id: 4,
            navigationName: "Request for Quotes",
            path: "/management/request-for-quotes"
        },
        {
            id: 5,
            navigationName: "Purchase Contracts",
            path: "/management/purchase-contracts"
        },
        {
            id: 6,
            navigationName: "Purchase Documents",
            path: "/management/purchase-documents"
        },
    ],
    managementSettingsUnderlinedNavigations:  [
        {
            id: 1,
            navigationName: "Admin Users",
            path: "/finance-admin/settings"
        },
        {
            id: 2,
            navigationName: "User Roles",
            path: "/finance-admin/settings/user-roles"
        },
        {
            id: 3,
            navigationName: "User Permissions",
            path: "/finance-admin/settings/user-permissions"
        },
    ],

    managementRequestForQuotesUnderlinedNavigations:  [
        {
            id: 1,
            navigationName: "My Requisitions",
            path: "/management/request-for-quotes"
        },
        {
            id: 2,
            navigationName: "Team Requisitions",
            path: "/management/request-for-quotes/team-requisitions"
        },
        {
            id: 3,
            navigationName: "Other Requisitions",
            path: "/management/request-for-quotes/other-requisitions"
        },
    ],

    managementActivityStatusData: [
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
            goTo: "/finance-admin/purchase-contracts",
            activityStatusValue: 135
        },
        {
            activityStatusTitle: "Pending Rating",
            goTo: "",
            activityStatusValue: 2
        }
    ],
    
    

    // *********************************All table Columns {Headers} ******************************************** //
    managementRequisitionsColumns: [
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
    managementAdminUsersColumns: [
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
    managementUserRolesColumns: [
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
    managementUserPermissionsColumns: [
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
    managementBiddersColumn: [
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
    managementPurchaseContractsColumns: [
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
    managementNominatedBiddersColumns: [
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

    managementDashboardRecentRequisitionsData: [
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
    managementAdminUsersData: [
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
    managementUserRolesData: [
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
    managementUserPermissionsData: [
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
    managementBiddersData: [
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
    managementRequestForQuotesMyRequisitionsData: [
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
    managementRequestForQuotesTeamRequisitionsData: [
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
    managementRequestForQuotesOtherRequisitionsData: [
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
    managementPurchaseContractsData: [
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
    managementDashboardRecentRequisitionsNominatedBiddersData: [
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
    managementMyRequisitionsNominatedBiddersData: [
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
    managementTeamRequisitionsNominatedBiddersData: [
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
    managementOtherRequisitionsNominatedBiddersData: [
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



// const MANAGEMENT_ACTION_TYPES = {
//     SET_MANAGEMENT_REQUEST_FOR_QUOTES_RECENT_BIDS_DATA: "SET_MANAGEMENT_REQUEST_FOR_QUOTES_RECENT_BIDS_DATA"
// }

const managementReducer = (state, action) => {
    
    return {
        ...state
    }
}

export const ManagementProvider = ({children}) => {
    
    
    const [state] = useReducer(managementReducer, MANAGEMENT_INITIAL_STATE);
    const {managementNavigations, managementSettingsUnderlinedNavigations, managementRequestForQuotesUnderlinedNavigations, managementActivityStatusData, managementRequisitionsColumns, managementAdminUsersColumns, managementAdminUsersData, managementUserRolesColumns, managementUserRolesData, managementUserPermissionsColumns, managementUserPermissionsData, managementBiddersColumn, managementBiddersData, managementDashboardRecentRequisitionsData, managementRequestForQuotesMyRequisitionsData, managementRequestForQuotesTeamRequisitionsData, managementRequestForQuotesOtherRequisitionsData, managementPurchaseContractsColumns, managementPurchaseContractsData, managementNominatedBiddersColumns, managementDashboardRecentRequisitionsNominatedBiddersData, managementMyRequisitionsNominatedBiddersData, managementTeamRequisitionsNominatedBiddersData, managementOtherRequisitionsNominatedBiddersData, uploadedFilesPurchaseContracts} = state;
    const value = {managementNavigations,managementSettingsUnderlinedNavigations, managementRequestForQuotesUnderlinedNavigations, managementActivityStatusData, managementRequisitionsColumns, managementAdminUsersColumns, managementAdminUsersData, managementUserRolesColumns, managementUserRolesData, managementUserPermissionsColumns, managementUserPermissionsData, managementBiddersColumn, managementBiddersData, managementDashboardRecentRequisitionsData, managementRequestForQuotesMyRequisitionsData, managementRequestForQuotesTeamRequisitionsData, managementRequestForQuotesOtherRequisitionsData, managementPurchaseContractsColumns, managementPurchaseContractsData, managementNominatedBiddersColumns, managementDashboardRecentRequisitionsNominatedBiddersData, managementMyRequisitionsNominatedBiddersData, managementTeamRequisitionsNominatedBiddersData, managementOtherRequisitionsNominatedBiddersData, uploadedFilesPurchaseContracts}

    return <ManagementContext.Provider value={value}>{children}</ManagementContext.Provider>
}