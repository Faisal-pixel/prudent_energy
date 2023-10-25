import ActivityStatus from "../../../components/activity-status.component";
import Greetings from "../../../components/greetings.component";
import { useSelector } from "react-redux";
import { selectBidderActivityStatusData, selectBidderDashboardRecentBidsColumn, selectBidderDashboardRecentBidsData } from "../../../store/bidder/bidder-dashboard-reducer/bidder-dashboard.selector";
import GeneralTable from "../../../components/general-table.component";
const BidderDashboard = () => {
    const bidderActivityStatusData = useSelector(selectBidderActivityStatusData);
    const bidderDashboardRecentBidsColumns = useSelector(selectBidderDashboardRecentBidsColumn);
    const bidderDashboardRecentBidsData = useSelector(selectBidderDashboardRecentBidsData);
    return (
        <div className="bg-secondaryBackground overflow-y-scroll h-full w-full space-y-5 px-6 pt-6">
            <div className="">
                <Greetings />
            </div>

            <div className="bg-white p-6 space-y-5 rounded-md">
                <h2 className="font-bold text-primaryBlue text-lg">Activity Status</h2>
                <div className="flex space-x-0 md:space-x-0.5 text-white flex-wrap">
                    {
                        bidderActivityStatusData.map((data, index) => (
                            <ActivityStatus activityStatus={data} key={index}/>
                        ))
                    }
                </div>
            </div>

            <div className="bg-white px-3 py-4">
                <p className="text-primaryBlue font-bold text-xl">
                    My Recent Bids
                </p>
                <GeneralTable columns={bidderDashboardRecentBidsColumns} filteredData={bidderDashboardRecentBidsData} clickable="details"/>
            </div>
            
        </div> 
    )
}

export default BidderDashboard;