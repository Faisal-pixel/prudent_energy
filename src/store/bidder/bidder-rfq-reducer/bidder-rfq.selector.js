import { createSelector } from "reselect";

export const selectBidderRfqReducer = (state) => (state.bidderRfq);

export const selectBidderRequestForQuotesRecentBidsColumns = createSelector([selectBidderRfqReducer], (bidderRfqSlice) => bidderRfqSlice.bidderRequestForQuotesRecentBidsColumns);
export const selectBidderRequestForQuotesRecentBidsData = createSelector([selectBidderRfqReducer], (bidderRfqSlice) => bidderRfqSlice.bidderRequestForQuotesRecentBids.bidderRequestForQuotesRecentBidsData);
