import { combineReducers } from "redux";
import { managementBiddersReducer } from "./management-bidders/management-bidders.reducer";
import { managementDashboardReducer } from "./management-dashboard/management-dashboard.reducer";
import { managementPurchaseContractsReducer } from "./management-purchase-contracts/management-purchase-contracts.reducer";
import { managementRfqReducer } from "./management-rfq/management-rfq.reducer";


export const managementRootReducer = combineReducers({
    managementDashboard: managementDashboardReducer,
    managementBidders: managementBiddersReducer,
    managementRfq: managementRfqReducer,
    managementPurchaseContracts:managementPurchaseContractsReducer,
    managementPurchaseDocuments: null,
})