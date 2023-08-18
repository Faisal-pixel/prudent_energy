import { useContext } from "react";
import { BidderContext } from "../context/bidder.context";
import ActivityStatus from "../../../components/activity-status.component";

import ReactTable from "../../../components/react-table.component";
import Greetings from "../../../components/greetings.component";
const BidderDashboard = () => {
    const { bidderActivityStatusData, bidderDashboardRecentBidsColumns, bidderDashboardRecentBidsData } = useContext(BidderContext);
    return (
        <div className="container bg-secondaryBackground overflow-y-scroll space-y-5 px-6 pt-6">
            <div className="">
                <Greetings />
            </div>

            <div className="bg-white p-6 space-y-5 rounded-md">
                <h2 className="font-bold text-primaryBlue text-lg">Activity Status</h2>
                <div className="flex space-x-0.5 text-white">
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
                <ReactTable columns={bidderDashboardRecentBidsColumns} data={bidderDashboardRecentBidsData} goTo={"details"}/>
            </div>
            
        </div> 
    )
}

export default BidderDashboard;