import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const GET_URL_PROCUREMENT_ADMIN_BIDDERS_ADMIN_USERS = "https://api-infracredit.azurewebsites.net/api/bidders/getbidders";

export const fetchProcurementAdminBidders = createAsyncThunk("procurementAdminSettings/fetchProcurementAdminSettingsAdminUsers", async () => {
    try {
        const response = await axios.get(GET_URL_PROCUREMENT_ADMIN_BIDDERS_ADMIN_USERS)
        return response.data;
    } catch (error) {
        return error.message
    }
})