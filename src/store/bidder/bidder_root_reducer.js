import { combineReducers } from "redux";
import { bidderDashboardReducer } from "./bidder-dashboard-reducer/bidder-dashboard.reducer";
import { bidderPurchaseContractsReducer } from "./bidder-purchase-contracts/bidder-purchase-contracts.reducer";
import { bidderRfqReducer } from "./bidder-rfq-reducer/bidder-rfq.reducer";

export const bidderRootReducer = combineReducers({
    bidderDashboard: bidderDashboardReducer,
    bidderRfq: bidderRfqReducer,
    bidderPurchaseContracts: bidderPurchaseContractsReducer,
})