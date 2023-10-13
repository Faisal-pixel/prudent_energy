import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const GET_URL_PROCUREMENT_ADMIN_SETTINGS_ADMIN_USERS = "https://api-infracredit.azurewebsites.net/api/administrations/getuserroles";

export const fetchProcurementAdminSettingsAdminUsers = createAsyncThunk("procurementAdminSettings/fetchProcurementAdminSettingsAdminUsers", async () => {
    try {
        const response = await axios.get(GET_URL_PROCUREMENT_ADMIN_SETTINGS_ADMIN_USERS)
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.log(error.message)
    }
})