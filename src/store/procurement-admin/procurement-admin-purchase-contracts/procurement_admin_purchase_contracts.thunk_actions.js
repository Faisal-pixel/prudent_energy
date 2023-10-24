import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const GET_URL_PROCUREMENT_ADMIN_PURCHASE_CONTRACTS = "https://api-infracredit.azurewebsites.net/api/contracts";

export const fetchProcurementAdminPurchaseContracts = createAsyncThunk("procurementAdminSettings/fetchProcurementAdminSettingsAdminUsers", async () => {
    try {
        const response = await axios.get(GET_URL_PROCUREMENT_ADMIN_PURCHASE_CONTRACTS)
        return response.data;
    } catch (error) {
        return error.message
    }
})