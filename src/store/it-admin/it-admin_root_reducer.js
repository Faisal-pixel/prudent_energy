import { combineReducers } from "redux";
import { itAdminBiddersReducer } from "./it-admin-bidders/it-admin-bidders.reducer";
import { itAdminDashboardReducer } from "./it-admin-dashboard/it-admin-dashboard.reducer";
import { itAdminPurchaseContractsReducer } from "./it-admin-purchase-contracts/it-admin-purchase-contracts.reducer";
import { itAdminRfqReducer } from "./it-admin-rfq/it-admin-rfq.reducer";
import { itAdminSettingsReducer } from "./it-admin-settings/it-admin-settings.reducer";


export const itAdminRootReducer = combineReducers({
    itAdminDashboard: itAdminDashboardReducer,
    itAdminSettings: itAdminSettingsReducer,
    itAdminBidders: itAdminBiddersReducer,
    itAdminRfq: itAdminRfqReducer,
    itAdminPurchaseContracts:itAdminPurchaseContractsReducer,
})