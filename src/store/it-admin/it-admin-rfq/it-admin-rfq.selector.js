import { createSelector } from "reselect";

export const selectItAdminRfqReducer = (state) => state.itAdminRfq;
export const selectItAdminRfqUnderlinedNavigations = createSelector([selectItAdminRfqReducer], (itAdminRfqSlice) => itAdminRfqSlice.itAdminRFQUnderlinedNavigations);
//MY REQUISITIONS
export const selectItAdminRequisitionsColumns = createSelector([selectItAdminRfqReducer], (itAdminRfqSlice) => itAdminRfqSlice.itAdminMyRequisitionsColumns);
export const selectItAdminMyRequisitionsData = createSelector([selectItAdminRfqReducer], (itAdminRfqSlice) => itAdminRfqSlice.itAdminMyRequisitions.itAdminMyRequisitionsData);
//TEAM REQUISITIONS
export const selectItAdminRequestForQuotesTeamRequisitionsData = createSelector([selectItAdminRfqReducer], (itAdminRfqSlice) => itAdminRfqSlice.itAdminRequestForQuotesTeamRequisitions.itAdminRequestForQuotesTeamRequisitionsData);
export const selectItAdminRequestForQuotesOtherRequisitionsData = createSelector([selectItAdminRfqReducer], (itAdminRfqSlice) => itAdminRfqSlice.itAdminRequestForQuotesOtherRequisitions.itAdminRequestForQuotesOtherRequisitionsData);