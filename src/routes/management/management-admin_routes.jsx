import { Route, Routes } from "react-router-dom";
import SideNavComponent from "../../components/side-nav.component";
import { useContext } from "react";
import { ManagementContext } from "./context/management.context";
import TopNavComponent from "../../components/top-nav.component";
import ManagementRecentRequisitionsDetails from "./management-dashboard/management-dashboard-details";
import ManagementDashboard from "./management-dashboard/management-dashboard";
import ManagementBidders from "./management-bidders/management-bidders";
import ManagementRequestForQuotesDetails from "./management-request-for-quotes/management-request-for-quotes-details";
import ManagementRequestForQuotesOtherRequisitionsDetails from "./management-request-for-quotes/management-request-for-quotes-other-requisitions-details";
import ManagementRequestForQuotesOtherRequisitions from "./management-request-for-quotes/management-request-for-quotes-other-requisitions";
import ManagementRequestForQuotesTeamRequisitionsDetails from "./management-request-for-quotes/management-request-for-quotes-team-requisitions-details";
import ManagementRequestForQuotesTeamRequisitions from "./management-request-for-quotes/management-request-for-quotes-team-requisitions";
import ManagementRequestForQuotes from "./management-request-for-quotes/management-request-for-quotes";


const ManagementRoutes = () => {
    const {managementNavigations } = useContext(ManagementContext)
    return (
        <Routes>
            <Route path="/" element={<SideNavComponent navigationElements={managementNavigations}/>}>
            {/* The way I have done the routing is that when it get to dashboard it should render BidderDashboard and when it gets to dashboard/details/:rfqNo, it should render BidderDashboardDetails. :rfqNo is a variables that renders if the rfqNo exist. So it makes it dynamic. */}
                <Route path="/" element={<TopNavComponent />}>
                    <Route path="dashboard/" >
                        <Route index element={<ManagementDashboard />}/>
                        <Route path="details/:rfqNo" element={<ManagementRecentRequisitionsDetails />}/>
                    </Route>
                    <Route path="bidders" element={<ManagementBidders />}/>
                    <Route path="/request-for-quotes">
                        <Route index element={<ManagementRequestForQuotes />}/>
                        <Route path="create-new-rfq" />
                        <Route path="my-requisitions/details/:rfqNo" element={<ManagementRequestForQuotesDetails />}/>
                        <Route path="team-requisitions">
                            <Route index element={<ManagementRequestForQuotesTeamRequisitions />}/>
                            <Route path="details/:rfqNo" element={<ManagementRequestForQuotesTeamRequisitionsDetails />}/>
                        </Route>
                        <Route path="other-requisitions">
                            <Route index element={<ManagementRequestForQuotesOtherRequisitions />}/>
                            <Route path="details/:rfqNo" element={<ManagementRequestForQuotesOtherRequisitionsDetails />}/>
                        </Route>
                    </Route>
                    <Route path="purchase-contracts">
                        <Route index />
                        <Route path="details/:rfqNo" />
                    </Route>
                    <Route path="purchase-documents"/>
                </Route> 
            </Route>
        </Routes>
    )
}

export default ManagementRoutes;