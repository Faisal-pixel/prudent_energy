import { Route, Routes } from "react-router-dom";
import SideNavComponent from "../../components/side-nav.component";
import { useContext } from "react";
import { BidderContext } from "./context/bidder.context";
import BidderDashboard from "./bidder-dashboard/bidder-dashboard";
import TopNavComponent from "../../components/top-nav.component";
import BidderDashboardDetails from "./bidder-dashboard/bidder-dashboard-details";
import BidderRFQ from "./bidder-request-for-quotes/bidder-request-for-quotes";
import BidderPurchaseContracts from "./bidder-purchase-contracts/bidder-purchase-contracts";
import BidderPurchaseContractsDetails from "./bidder-purchase-contracts/bidder-purchase-contracts-details";

const BidderRoutes = () => {
    const {bidderNavigations} = useContext(BidderContext)
    return (
        <Routes>
            <Route path="/" element={<SideNavComponent navigationElements={bidderNavigations}/>}>
            {/* The way I have done the routing is that when it get to dashboard it should render BidderDashboard and when it gets to dashboard/details/:rfqNo, it should render BidderDashboardDetails. :rfqNo is a variables that renders if the rfqNo exist. So it makes it dynamic. */}
                <Route path="/" element={<TopNavComponent />}>
                    <Route path="dashboard/">
                        <Route index element={<BidderDashboard />} />
                        <Route path="details/:rfqNo" element={<BidderDashboardDetails />}/>
                    </Route>
                    <Route path="request-for-quotes">
                        <Route index element={<BidderRFQ/>}/>
                        <Route path="details/:rfqNo" element={<BidderDashboardDetails />}/>
                    </Route>
                    <Route path="purchase-contracts">
                        <Route index element={<BidderPurchaseContracts />}/>
                        <Route path="details/:rfqNo" element={<BidderPurchaseContractsDetails />}/>
                    </Route>
                    <Route path="issue-resolution"/>
                    <Route path="report"/>
                    <Route path="profile"/>
                </Route> 
            </Route>
        </Routes>
    )
}

export default BidderRoutes;