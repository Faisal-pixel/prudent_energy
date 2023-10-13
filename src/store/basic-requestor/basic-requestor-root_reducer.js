import { combineReducers } from "redux";
import { basicRequestorMyRequisitionsReducer } from "./basic-requestor-my-requisitions-reducer/basic-requestor-my-requisitions.reducer";
import { basicRequestorTeamRequisitionsReducer } from "./basic-requestor-team-requisitions-reducer/basic-requestor-team-requisitions.reducer";
import { basicRequestorMyPurchaseContractsReducer } from "./basic-requestor-purchase-contracts/basic-requestor-purchase-contracts.reducer";

export const basicRequestorRootReducer = combineReducers({
    basicRequestorMyRequisitions: basicRequestorMyRequisitionsReducer,
    basicRequestorTeamRequisitions: basicRequestorTeamRequisitionsReducer,
    basicRequestorMyPurchaseContracts: basicRequestorMyPurchaseContractsReducer,
})
