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