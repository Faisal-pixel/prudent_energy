import { createContext, useReducer } from "react";

export const BidderContext = createContext({
    bidderNavigations:  [
        {
            id: 1,
            navigationName: "Dashboard",
            path: "bidder/dashboard"
        },
        {
            id: 2,
            navigationName: "Request for Quotes",
            path: "bidder/request-for-quotes"
        },
        {
            id: 3,
            navigationName: "Purchase Contracts",
            path: "bidder/purchase-contracts"
        },
        {
            id: 4,
            navigationName: "Issue Resolution",
            path: "bidder/issue-resolution"
        },
        {
            id: 5,
            navigationName: "Report",
            path: "bidder/report"
        },
        {
            id: 6,
            navigationName: "Profile",
            path: "bidder/profile"
        },
    ],

    bidderActivityStatusData: [
        {
            activityStatusTitle: "RFQ",
            goTo: "/bidder-dashboard/bidder-request-for-quotes",
            activityStatusValue: 9
        },
        {
            activityStatusTitle: "RFP",
            goTo: "/bidder-dashboard/bidder-purchase-contracts",
            activityStatusValue: 55
        },
        {
            activityStatusTitle: "Contracts",
            goTo: "/bidder-dashboard/bidder-purchase-contracts",
            activityStatusValue: 62
        }
    ],
    bidderDashboardRecentBidsColumns: [
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
    bidderDashboardRecentBidsData: [
        {
            rfqNo: "SD2568",
            description: "Building Maintenance",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            status: false
        },
        {
            rfqNo: "SD2568",
            description: "Building Maintenance",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            status: false
        },
        {
            rfqNo: "SD2568",
            description: "Building Maintenance",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            status: false
        },
        {
            rfqNo: "SD2568",
            description: "Building Maintenance",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            status: false
        },
        {
            rfqNo: "SD1564",
            description: "IT infrastructure Service",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            status: true
        },
        {
            rfqNo: "SD1564",
            description: "IT infrastructure Service",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            status: true
        },
        {
            rfqNo: "SD1564",
            description: "IT infrastructure Service",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            status: true
        },
    ],

    // *********************************All table Columns {Headers} ******************************************** //
    bidderRequestForQuotesRecentBidsColumns: [
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
    bidderPurchaseContractsColumns: [
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

    // *********************************All table Data {table body} ******************************************** //
    
    bidderRequestForQuotesRecentBidsData: [
        {
            rfqNo: "SD2568",
            description: "Building Maintenance",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            status: "Pending"
        },
        {
            rfqNo: "SD2568",
            description: "Building Maintenance",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            status: "Pending"
        },
        {
            rfqNo: "SD2568",
            description: "Building Maintenance",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            status: "Pending"
        },
        {
            rfqNo: "SD2568",
            description: "Building Maintenance",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            status: "Pending"
        },
        {
            rfqNo: "SD1564",
            description: "IT infrastructure Service",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            status: "Pending"
        },
        {
            rfqNo: "SD1564",
            description: "IT infrastructure Service",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            status: "Completed"
        },
        {
            rfqNo: "SD1564",
            description: "IT infrastructure Service",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            status: "Completed"
        },
        {
            rfqNo: "SD2568",
            description: "Building Maintenance",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            status: "Pending"
        },
        {
            rfqNo: "SD1564",
            description: "IT infrastructure Service",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            status: "Pending"
        },
        {
            rfqNo: "SD1564",
            description: "IT infrastructure Service",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            status: "Completed"
        },
        {
            rfqNo: "SD1564",
            description: "IT infrastructure Service",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            status: "Completed"
        },
    ],
    bidderPurchaseContractsData: [
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
    setBidderRequestForQuotesRecentBidsData: () => {}
})

const BIDDER_INITIAL_STATE = {
    bidderNavigations:  [
        {
            id: 1,
            navigationName: "Dashboard",
            path: "/bidder/dashboard"
        },
        {
            id: 2,
            navigationName: "Request for Quotes",
            path: "/bidder/request-for-quotes"
        },
        {
            id: 3,
            navigationName: "Purchase Contracts",
            path: "/bidder/purchase-contracts"
        },
        {
            id: 4,
            navigationName: "Issue Resolution",
            path: "/bidder/issue-resolution"
        },
        {
            id: 5,
            navigationName: "Report",
            path: "/bidder/report"
        },
        {
            id: 6,
            navigationName: "Profile",
            path: "/bidder/profile"
        },
    ],
    bidderActivityStatusData: [
        {
            activityStatusTitle: "RFQ",
            goTo: "/bidder/request-for-quotes",
            activityStatusValue: 9
        },
        {
            activityStatusTitle: "RFP",
            goTo: "/bidder/purchase-contracts",
            activityStatusValue: 55
        },
        {
            activityStatusTitle: "Contracts",
            goTo: "/bidder/purchase-contracts",
            activityStatusValue: 62
        }
    ],
    bidderDashboardRecentBidsColumns: [
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
    bidderDashboardRecentBidsData: [
        {
            rfqNo: "SD2568",
            description: "Building Maintenance",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            status: "Pending"
        },
        {
            rfqNo: "SD2568",
            description: "Building Maintenance",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            status: "Pending"
        },
        {
            rfqNo: "SD2568",
            description: "Building Maintenance",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            status: "Pending"
        },
        {
            rfqNo: "SD2568",
            description: "Building Maintenance",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            status: "Pending"
        },
        {
            rfqNo: "SD1564",
            description: "IT infrastructure Service",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            status: "Pending"
        },
        {
            rfqNo: "SD1564",
            description: "IT infrastructure Service",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            status: "Completed"
        },
        {
            rfqNo: "SD1564",
            description: "IT infrastructure Service",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            status: "Completed"
        },
    ],

    // *********************************All table Columns {Headers} ******************************************** //
    bidderRequestForQuotesRecentBidsColumns: [
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
    bidderPurchaseContractsColumns: [
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

    // *********************************All table Data {table body} ******************************************** //
    bidderRequestForQuotesRecentBidsData: [
        {
            rfqNo: "SD2568",
            description: "Building Maintenance",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            status: "Pending"
        },
        {
            rfqNo: "SD2568",
            description: "Building Maintenance",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            status: "Pending"
        },
        {
            rfqNo: "SD2568",
            description: "Building Maintenance",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            status: "Pending"
        },
        {
            rfqNo: "SD2568",
            description: "Building Maintenance",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            status: "Pending"
        },
        {
            rfqNo: "SD1564",
            description: "IT infrastructure Service",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            status: "Pending"
        },
        {
            rfqNo: "SD1564",
            description: "IT infrastructure Service",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            status: "Completed"
        },
        {
            rfqNo: "SD1564",
            description: "IT infrastructure Service",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            status: "Completed"
        },
        {
            rfqNo: "SD2568",
            description: "Building Maintenance",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            status: "Pending"
        },
        {
            rfqNo: "SD1564",
            description: "IT infrastructure Service",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            status: "Pending"
        },
        {
            rfqNo: "SD1564",
            description: "IT infrastructure Service",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            status: "Completed"
        },
        {
            rfqNo: "SD1564",
            description: "IT infrastructure Service",
            expDateAndTime: "2022-01-28 14:53 GMT+1",
            status: "Completed"
        },
    ],
    bidderPurchaseContractsData: [
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
    ]
    
}

// const BIDDER_ACTION_TYPES = {
//     SET_BIDDER_REQUEST_FOR_QUOTES_RECENT_BIDS_DATA: "SET_BIDDER_REQUEST_FOR_QUOTES_RECENT_BIDS_DATA"
// }

const bidderReducer = (state, action) => {
    
    return {
        ...state
    }
}

export const BidderProvider = ({children}) => {

    const [state] = useReducer(bidderReducer, BIDDER_INITIAL_STATE);
    const {bidderNavigations, bidderActivityStatusData, bidderDashboardRecentBidsColumns, bidderDashboardRecentBidsData, bidderRequestForQuotesRecentBidsColumns, bidderRequestForQuotesRecentBidsData, bidderPurchaseContractsColumns, bidderPurchaseContractsData, uploadedFilesPurchaseContracts} = state;
    const value = {bidderNavigations, bidderActivityStatusData, bidderDashboardRecentBidsColumns, bidderDashboardRecentBidsData, bidderRequestForQuotesRecentBidsColumns, bidderRequestForQuotesRecentBidsData, bidderPurchaseContractsColumns, bidderPurchaseContractsData, uploadedFilesPurchaseContracts}

    return <BidderContext.Provider value={value}>{children}</BidderContext.Provider>
}