import { createContext, useReducer } from "react";

export const BasicRequestorContext = createContext({
    basicRequestorNavigations:  [
        {
            id: 1,
            navigationName: "My Requisitions",
            path: "/basic-requestor/my-requisitions"
        },
        {
            id: 2,
            navigationName: "Team Requisitions",
            path: "/basic-requestor/team-requisitions"
        },
        {
            id: 3,
            navigationName: "My Purchase Contracts",
            path: "/basic-requestor/purchase-contracts"
        }
    ],

    basicRequestorActivityStatusData: [
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
            activityStatusTitle: "In Progress",
            goTo: "",
            activityStatusValue: 10
        },
        {
            activityStatusTitle: "Completed",
            goTo: "",
            activityStatusValue: 135
        },
        {
            activityStatusTitle: "Pending Rating",
            goTo: "",
            activityStatusValue: 2
        },
    ],

    // *********************************All table Columns {Headers} ******************************************** //
    basicRequestorMyRecentRequisitionsColumns: [
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
    basicRequestorTeamRequisitionsColumns: [
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
    basicRequestorPurchaseContractsColumns: [
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
    // FOR MY REQUISITIONS
    basicRequestorNomindatedBiddersColumns: [
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
    // FOR TEAM REQUISITIONS
    basicRequestorTeamRequisitionsNomindatedBiddersColumns: [
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
    
    basicRequestorMyRecentRequisitionsData: [
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
    basicRequestorTeamRequisitionsData: [
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
    basicRequestorPurchaseContractsData: [
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
    //FOR MY REQUISITIONS
    basicRequestorNomindatedBiddersData: [
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
    //FOR TEAM REQUISITIONOS
    basicRequestorTeamRequisitionsNomindatedBiddersData: [
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
})

const BASIC_REQUESTOR_INITIAL_STATE = {
    basicRequestorNavigations:  [
        {
            id: 1,
            navigationName: "My Requisitions",
            path: "/basic-requestor/my-requisitions"
        },
        {
            id: 2,
            navigationName: "Team Requisitions",
            path: "/basic-requestor/team-requisitions"
        },
        {
            id: 3,
            navigationName: "My Purchase Contracts",
            path: "/basic-requestor/purchase-contracts"
        }
    ],

    basicRequestorActivityStatusData: [
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
            activityStatusTitle: "In Progress",
            goTo: "",
            activityStatusValue: 10
        },
        {
            activityStatusTitle: "Completed",
            goTo: "",
            activityStatusValue: 135
        },
        {
            activityStatusTitle: "Pending Rating",
            goTo: "",
            activityStatusValue: 2
        },
    ],

    // *********************************All table Columns {Headers} ******************************************** //
    basicRequestorMyRecentRequisitionsColumns: [
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
    basicRequestorTeamRequisitionsColumns: [
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
    basicRequestorPurchaseContractsColumns: [
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
    // FOR MY REQUISITIONS
    basicRequestorNomindatedBiddersColumns: [
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
    // FOR TEAM REQUISITIONS
    basicRequestorTeamRequisitionsNomindatedBiddersColumns: [
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
    
    basicRequestorMyRecentRequisitionsData: [
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
    basicRequestorTeamRequisitionsData: [
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
    basicRequestorPurchaseContractsData: [
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
    //For my Requisitions
    basicRequestorNomindatedBiddersData: [
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
    basicRequestorTeamRequisitionsNomindatedBiddersData: [
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

const BASIC_REQUESTOR_ACTION_TYPES = {
}

const basicRequestorReducer = (state, action) => {
    const {type, payload} = action;
    
    return state;
}

export const BasicRequestorProvider = ({children}) => {

    const [state] = useReducer(basicRequestorReducer, BASIC_REQUESTOR_INITIAL_STATE);
    const {basicRequestorNavigations, basicRequestorActivityStatusData, basicRequestorMyRecentRequisitionsColumns, basicRequestorMyRecentRequisitionsData, basicRequestorTeamRequisitionsColumns, basicRequestorTeamRequisitionsData, basicRequestorPurchaseContractsColumns, basicRequestorPurchaseContractsData, uploadedFilesPurchaseContracts, basicRequestorNomindatedBiddersColumns, basicRequestorNomindatedBiddersData, basicRequestorTeamRequisitionsNomindatedBiddersColumns, basicRequestorTeamRequisitionsNomindatedBiddersData} = state;
    const value = {basicRequestorNavigations, basicRequestorActivityStatusData, basicRequestorMyRecentRequisitionsColumns, basicRequestorMyRecentRequisitionsData, basicRequestorTeamRequisitionsColumns, basicRequestorTeamRequisitionsData, basicRequestorPurchaseContractsColumns, basicRequestorPurchaseContractsData, uploadedFilesPurchaseContracts, basicRequestorNomindatedBiddersColumns, basicRequestorNomindatedBiddersData, basicRequestorTeamRequisitionsNomindatedBiddersColumns, basicRequestorTeamRequisitionsNomindatedBiddersData}

    return <BasicRequestorContext.Provider value={value}>{children}</BasicRequestorContext.Provider>
}