import { createSelector } from "reselect";

export const selectBasicRequestorMyRequisitionsReducer = (state) => (state.basicRequestorMyRequisitions);

export const selectBasicRequestorActivityStatusData = createSelector([selectBasicRequestorMyRequisitionsReducer], (basicRequestorMyRequisitionsSlice) => basicRequestorMyRequisitionsSlice.basicRequestorActivityStatusData)
export const selectBasicRequestorMyRecentRequisitionsColumn = createSelector([selectBasicRequestorMyRequisitionsReducer], (basicRequestorMyRequisitionsSlice) => basicRequestorMyRequisitionsSlice.basicRequestorMyRecentRequisitionsColumns);
export const selectBasicRequestorMyRecentRequisitionsData = createSelector([selectBasicRequestorMyRequisitionsReducer], (basicRequestorMyRequisitionsSlice) => basicRequestorMyRequisitionsSlice.basicRequestorMyRecentRequisitions.basicRequestorMyRecentRequisitionsData);
