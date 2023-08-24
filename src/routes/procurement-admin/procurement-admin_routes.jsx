import { Route, Routes } from "react-router-dom";
import SideNavComponent from "../../components/side-nav.component";
import { useContext } from "react";
import { ProcurementAdminContext } from "./context/procurement-admin.context";
import TopNavComponent from "../../components/top-nav.component";
import ProcurementAdminDashboard from "./procurement-admin-dashboard/procurement-admin-dashboard";
import ProcurementAdminRecentRequisitionsDetails from "./procurement-admin-dashboard/procurement-admin-dashboard-details";
import UnderlinedNav from "../../components/underlined-nav.component";
import ProcurementAdminSettingsAdminUsers from "./procurement-admin-settings/procurement-admin-settings-admin-users";
import ProcurementAdminSettingsUserRoles from "./procurement-admin-settings/procurement-admin-settings-user-roles";
import ProcurementAdminSettingsUserPermissions from "./procurement-admin-settings/procurement-admin-settings-user-permissions";
import ProcurementAdminBidders from "./procurement-admin-bidders/procurement-admin-bidders";
import ProcurementAdminRequestForQuotes from "./procurement-admin-request-for-quotes/procurement-admin-request-for-quotes";
import ProcurementAdminRequestForQuotesDetails from "./procurement-admin-request-for-quotes/procurement-admin-request-for-quotes-details";
import ProcurementAdminRequestForQuotesTeamRequisitions from "./procurement-admin-request-for-quotes/procurement-admin-request-for-quotes-team-requisitions";
import ProcurementAdminRequestForQuotesTeamRequisitionsDetails from "./procurement-admin-request-for-quotes/procurement-admin-request-for-quotes-team-requisitions-details";
import ProcurementAdminRequestForQuotesOtherRequisitions from "./procurement-admin-request-for-quotes/procurement-admin-request-for-quotes-other-requisitions";
import ProcurementAdminRequestForQuotesOtherRequisitionsDetails from "./procurement-admin-request-for-quotes/procurement-admin-request-for-quotes-other-requisitions-details";


const ProcurementAdminRoutes = () => {
    const {procurementAdminNavigations, procurementAdminSettingsUnderlinedNavigations} = useContext(ProcurementAdminContext)
    return (
        <Routes>
            <Route path="/" element={<SideNavComponent navigationElements={procurementAdminNavigations}/>}>
            {/* The way I have done the routing is that when it get to dashboard it should render BidderDashboard and when it gets to dashboard/details/:rfqNo, it should render BidderDashboardDetails. :rfqNo is a variables that renders if the rfqNo exist. So it makes it dynamic. */}
                <Route path="/" element={<TopNavComponent />}>
                    <Route path="dashboard/">
                        <Route index element={<ProcurementAdminDashboard />}/>
                        <Route path="details/:rfqNo" element={<ProcurementAdminRecentRequisitionsDetails />}/>
                    </Route>
                    <Route path="settings">
                        <Route index element={<ProcurementAdminSettingsAdminUsers />} />
                        <Route path="user-roles" element={<ProcurementAdminSettingsUserRoles />}>
                            <Route index element={<UnderlinedNav navigationElements={procurementAdminSettingsUnderlinedNavigations}/>} />
                        </Route>
                        <Route path="user-permissions" element={<ProcurementAdminSettingsUserPermissions />}>
                            <Route index element={<UnderlinedNav navigationElements={procurementAdminSettingsUnderlinedNavigations}/>} />
                        </Route>
                    </Route>
                    <Route path="bidders" element={<ProcurementAdminBidders />}/>
                    <Route path="/request-for-quotes">
                        <Route index element={<ProcurementAdminRequestForQuotes />}/>
                        <Route path="my-requisitions/details/:rfqNo" element={<ProcurementAdminRequestForQuotesDetails />}/>
                        <Route path="team-requisitions">
                            <Route index element={<ProcurementAdminRequestForQuotesTeamRequisitions />}/>
                            <Route path="details/:rfqNo" element={<ProcurementAdminRequestForQuotesTeamRequisitionsDetails />}/>
                        </Route>
                        <Route path="other-requisitions">
                            <Route index element={<ProcurementAdminRequestForQuotesOtherRequisitions />}/>
                            <Route path="details/:rfqNo" element={<ProcurementAdminRequestForQuotesOtherRequisitionsDetails />}/>
                        </Route>
                    </Route>
                    <Route path="purchase-contracts">
                        <Route index />
                        <Route path="details/:rfqNo" />
                    </Route>
                    <Route path="issue-resolution"/>
                    <Route path="report"/>
                    <Route path="profile"/>
                </Route> 
            </Route>
        </Routes>
    )
}

export default ProcurementAdminRoutes;