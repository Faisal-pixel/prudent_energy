import { createSelector } from "reselect";

export const selectFinanceAdminRfqReducer = (state) => state.financeAdminRfq;
export const selectFinanceAdminRfqUnderlinedNavigations = createSelector([selectFinanceAdminRfqReducer], (financeAdminRfqSlice) => financeAdminRfqSlice.financeAdminRFQUnderlinedNavigations);
//MY REQUISITIONS
export const selectFinanceAdminRequisitionsColumns = createSelector([selectFinanceAdminRfqReducer], (financeAdminRfqSlice) => financeAdminRfqSlice.financeAdminMyRequisitionsColumns);
export const selectFinanceAdminMyRequisitionsData = createSelector([selectFinanceAdminRfqReducer], (financeAdminRfqSlice) => financeAdminRfqSlice.financeAdminMyRequisitions.financeAdminMyRequisitionsData);
//TEAM REQUISITIONS
export const selectFinanceAdminRequestForQuotesTeamRequisitionsData = createSelector([selectFinanceAdminRfqReducer], (financeAdminRfqSlice) => financeAdminRfqSlice.financeAdminRequestForQuotesTeamRequisitions.financeAdminRequestForQuotesTeamRequisitionsData);
export const selectFinanceAdminRequestForQuotesOtherRequisitionsData = createSelector([selectFinanceAdminRfqReducer], (financeAdminRfqSlice) => financeAdminRfqSlice.financeAdminRequestForQuotesOtherRequisitions.financeAdminRequestForQuotesOtherRequisitionsData);