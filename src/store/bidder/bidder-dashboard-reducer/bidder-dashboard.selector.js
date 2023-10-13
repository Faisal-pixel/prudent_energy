import { createSelector } from "reselect";

export const selectBidderDashboardReducer = (state) => (state.bidderDashboard);

export const selectBidderActivityStatusData = createSelector([selectBidderDashboardReducer], (bidderDashboardSlice) => bidderDashboardSlice.bidderActivityStatusData);
export const selectBidderDashboardRecentBidsColumn = createSelector([selectBidderDashboardReducer], (bidderDashboardSlice) => bidderDashboardSlice.bidderDashboardRecentBidsColumns);
export const selectBidderDashboardRecentBidsData = createSelector([selectBidderDashboardReducer], (bidderDashboardSlice) => bidderDashboardSlice.bidderDashboardRecentBids.bidderDashboardRecentBidsData);
