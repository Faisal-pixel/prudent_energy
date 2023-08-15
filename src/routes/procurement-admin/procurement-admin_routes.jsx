import { Route, Routes } from "react-router-dom";
import SideNavComponent from "../../components/side-nav.component";
import { useContext } from "react";
import { ProcurementAdminContext } from "./context/procurement-admin.context";
import TopNavComponent from "../../components/top-nav.component";
import ProcurementAdminDashboard from "./procurement-admin-dashboard/procurement-admin-dashboard";
import ProcurementAdminRecentRequisitionsDetails from "./procurement-admin-dashboard/procurement-admin-dashboard-details";
import UnderlinedNav from "../../components/underlined-nav.component";
import ProcurementAdminSettingsAdminUsers from "./procurement-admin-settings/procurement-admin-settings-admin-users";


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
                    <Route path="settings/">
                        <Route path="admin-users" element={<ProcurementAdminSettingsAdminUsers />}>
                            <Route index element={<UnderlinedNav navigationElements={procurementAdminSettingsUnderlinedNavigations} includeButton="Add New User"/>} />
                        </Route>
                        <Route path="user-roles" element={<ProcurementAdminSettingsAdminUsers />}>
                            <Route index element={<UnderlinedNav navigationElements={procurementAdminSettingsUnderlinedNavigations}/>} />
                        </Route>
                        <Route path="user-permissions" element={<ProcurementAdminSettingsAdminUsers />}>
                            <Route index element={<UnderlinedNav navigationElements={procurementAdminSettingsUnderlinedNavigations}/>} />
                        </Route>
                    </Route>
                    <Route path="request-for-quotes">
                        <Route index />
                        <Route path="details/:rfqNo" />
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