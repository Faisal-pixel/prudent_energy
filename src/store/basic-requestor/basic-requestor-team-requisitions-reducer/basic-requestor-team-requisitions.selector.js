import { createSelector } from "reselect";

export const selectBasicRequestorTeamRequisitionsReducer = (state) => (state.basicRequestorTeamRequisitions);

export const selectBasicRequestorActivityStatusData = createSelector([selectBasicRequestorTeamRequisitionsReducer], (basicRequestorTeamRequisitionsSlice) => basicRequestorTeamRequisitionsSlice.basicRequestorActivityStatusData)
export const selectBasicRequestorTeamRequisitionsColumn = createSelector([selectBasicRequestorTeamRequisitionsReducer], (basicRequestorTeamRequisitionsSlice) => basicRequestorTeamRequisitionsSlice.basicRequestorTeamRequisitionsColumns);
export const selectBasicRequestorTeamRequisitionsData = createSelector([selectBasicRequestorTeamRequisitionsReducer], (basicRequestorTeamRequisitionsSlice) => basicRequestorTeamRequisitionsSlice.basicRequestorTeamRequisitions.basicRequestorTeamRequisitionsData);
