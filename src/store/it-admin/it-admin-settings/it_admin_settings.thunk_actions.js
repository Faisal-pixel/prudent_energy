import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const GET_URL_IT_ADMIN_SETTINGS_ADMIN_USERS = "https://api-infracredit.azurewebsites.net/api/administrations/getuserroles";

export const fetchItAdminSettingsAdminUsers = createAsyncThunk("itAdminSettings/fetchItAdminSettingsAdminUsers", async () => {
    try {
        const response = await axios.get(GET_URL_IT_ADMIN_SETTINGS_ADMIN_USERS)
        return response.data;
    } catch (error) {
        console.log(error.message)
    }
})