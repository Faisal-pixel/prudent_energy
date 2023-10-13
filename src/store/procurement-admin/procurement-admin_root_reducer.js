import { combineReducers } from "redux";
import { procurementAdminSettingsReducer } from "./procurement-admin-settings/procurement-admin-settings.reducer";
import { procurementAdminBiddersReducer } from "./procurement-admin-bidders/procurement-admin-bidders.reducer";
import { procurementAdminRfqReducer } from "./procurement-admin-rfq/procurement-admin-rfq.reducer";
import { procurementAdminDashboardReducer } from "./procurement-admin-dashboard/procurement-admin-dashboard.reducer";
import { procurementAdminPurchaseContractsReducer } from "./procurement-admin-purchase-contracts/procurement-admin-purchase-contracts.reducer";

export const procurementAdminRootReducer = combineReducers({
    procurementAdminDashboard: procurementAdminDashboardReducer,
    procurementAdminSettings: procurementAdminSettingsReducer,
    procurementAdminBidders: procurementAdminBiddersReducer,
    procurementAdminRfq: procurementAdminRfqReducer,
    procurementAdminPurchaseContracts: procurementAdminPurchaseContractsReducer,
})