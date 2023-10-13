import { createSlice } from "@reduxjs/toolkit";

const BASIC_REQUESTOR_PURCHASE_CONTRACTS_INITIAL_STATE = {
    basicRequestorPurchaseContractsData: [
        {
            id: 1,
            contractNo: "PO2568",
            description: "Building Maintenance",
            contractDateAndTime: "2022-01-28 14:53 GMT+1",
        },
        {
            id: 2,
            contractNo: "PO2568",
            description: "Building Maintenance",
            contractDateAndTime: "2022-01-28 14:53 GMT+1",
        },
        {
            id: 3,
            contractNo: "PO2568",
            description: "Building Maintenance",
            contractDateAndTime: "2022-01-28 14:53 GMT+1",
        },
        {
            id: 4,
            contractNo: "PO2568",
            description: "Building Maintenance",
            contractDateAndTime: "2022-01-28 14:53 GMT+1",
        },
        {
            id: 5,
            contractNo: "PO2568",
            description: "Building Maintenance",
            contractDateAndTime: "2022-01-28 14:53 GMT+1",
        },
        {
            id: 6,
            contractNo: "PO1564",
            description: "IT infrastructure Service",
            contractDateAndTime: "2022-01-28 14:53 GMT+1",
        },
        {
            id: 7,
            contractNo: "PO1564",
            description: "IT infrastructure Service",
            contractDateAndTime: "2022-01-28 14:53 GMT+1",
        },
        {
            id: 8,
            contractNo: "PO1564",
            description: "IT infrastructure Service",
            contractDateAndTime: "2022-01-28 14:53 GMT+1",
        },
        {
            id: 9,
            contractNo: "PO2568",
            description: "Building Maintenance",
            contractDateAndTime: "2022-01-28 14:53 GMT+1",
        },
        {
            id: 10,
            contractNo: "PO2568",
            description: "Building Maintenance",
            contractDateAndTime: "2022-01-28 14:53 GMT+1",
        },
        {
            id: 11,
            contractNo: "PO1564",
            description: "IT infrastructure Service",
            contractDateAndTime: "2022-01-28 14:53 GMT+1",
        },
        {
            id: 12,
            contractNo: "PO1564",
            description: "IT infrastructure Service",
            contractDateAndTime: "2022-01-28 14:53 GMT+1",
        },
        {
            id: 13,
            contractNo: "PO1564",
            description: "IT infrastructure Service",
            contractDateAndTime: "2022-01-28 14:53 GMT+1",
        },
    ]
}

const basicRequestorMyPurchaseContractsSlice = createSlice({
    name: "basicRequestorMyPurchaseContracts",
    initialState: BASIC_REQUESTOR_PURCHASE_CONTRACTS_INITIAL_STATE,
})

export const basicRequestorMyPurchaseContractsReducer = basicRequestorMyPurchaseContractsSlice.reducer;