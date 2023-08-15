import { createContext, useReducer } from "react";

export const ProcurementAdminContext = createContext({
    procurementAdminNavigations:  [],
    procurementAdminSettingsUnderlinedNavigations:  [],

    procurementAdminActivityStatusData: [],

    // *********************************All table Columns {Headers} ******************************************** //
    procurementAdminRequisitionsColumns: [],
    procurementAdminRequestForQuotesMyRequisitionsColumns: [],
    procurementAdminPurchaseContractsColumns: [],
    procurementAdminNominatedBiddersColumns: [],

    // *********************************All table Data {table body} ******************************************** //

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
            path: "/procurement-admin/settings/admin-users"
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
    const {procurementAdminNavigations, procurementAdminSettingsUnderlinedNavigations, procurementAdminActivityStatusData, procurementAdminRequisitionsColumns, procurementAdminDashboardRecentRequisitionsData, procurementAdminRequestForQuotesMyRequisitionsColumns, procurementAdminRequestForQuotesMyRequisitionsData, procurementAdminPurchaseContractsColumns, procurementAdminPurchaseContractsData, procurementAdminNominatedBiddersColumns, procurementAdminDashboardRecentRequisitionsNominatedBiddersData, procurementAdminMyRequisitionsNominatedBiddersData, procurementAdminTeamRequisitionsNominatedBiddersData, procurementAdminOtherRequisitionsNominatedBiddersData, uploadedFilesPurchaseContracts} = state;
    const value = {procurementAdminNavigations,procurementAdminSettingsUnderlinedNavigations, procurementAdminActivityStatusData, procurementAdminRequisitionsColumns, procurementAdminDashboardRecentRequisitionsData, procurementAdminRequestForQuotesMyRequisitionsColumns, procurementAdminRequestForQuotesMyRequisitionsData, procurementAdminPurchaseContractsColumns, procurementAdminPurchaseContractsData, procurementAdminNominatedBiddersColumns, procurementAdminDashboardRecentRequisitionsNominatedBiddersData, procurementAdminMyRequisitionsNominatedBiddersData, procurementAdminTeamRequisitionsNominatedBiddersData, procurementAdminOtherRequisitionsNominatedBiddersData, uploadedFilesPurchaseContracts}

    return <ProcurementAdminContext.Provider value={value}>{children}</ProcurementAdminContext.Provider>
}