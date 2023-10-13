import { combineReducers } from "redux";
// import { financeAdminBiddersReducer } from "./financeAdmin-bidders/finance-admin-bidders.reducer";
import { financeAdminDashboardReducer } from "./finance-admin-dashboard/finance-admin-dashboard.reducer";
import { financeAdminPurchaseContractsReducer } from "./finance-admin-purchase-contracts/finance-admin-purchase-contracts.reducer";
import { financeAdminRfqReducer } from "./finance-admin-rfq/finance-admin-rfq.reducer";


export const financeAdminRootReducer = combineReducers({
    financeAdminDashboard: financeAdminDashboardReducer,
    financeAdminRfq: financeAdminRfqReducer,
    financeAdminPurchaseContracts:financeAdminPurchaseContractsReducer,
    // financeAdminPurchaseDocuments: null,
})