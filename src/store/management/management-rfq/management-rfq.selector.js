import { createSelector } from "reselect";

export const selectManagementRfqReducer = (state) => state.managementRfq;
export const selectManagementRfqUnderlinedNavigations = createSelector([selectManagementRfqReducer], (managementRfqSlice) => managementRfqSlice.managementRFQUnderlinedNavigations);
//MY REQUISITIONS
export const selectManagementRequisitionsColumns = createSelector([selectManagementRfqReducer], (managementRfqSlice) => managementRfqSlice.managementMyRequisitionsColumns);
export const selectManagementMyRequisitionsData = createSelector([selectManagementRfqReducer], (managementRfqSlice) => managementRfqSlice.managementMyRequisitions.managementMyRequisitionsData);
//TEAM REQUISITIONS
export const selectManagementRequestForQuotesTeamRequisitionsData = createSelector([selectManagementRfqReducer], (managementRfqSlice) => managementRfqSlice.managementRequestForQuotesTeamRequisitions.managementRequestForQuotesTeamRequisitionsData);
export const selectManagementRequestForQuotesOtherRequisitionsData = createSelector([selectManagementRfqReducer], (managementRfqSlice) => managementRfqSlice.managementRequestForQuotesOtherRequisitions.managementRequestForQuotesOtherRequisitionsData);