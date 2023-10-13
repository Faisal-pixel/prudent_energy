import { Route, Routes } from "react-router-dom";
import SideNavComponent from "../../components/side-nav.component";
import { useContext } from "react";
import { ITAdminContext} from "./context/it-admin.context";
import TopNavComponent from "../../components/top-nav.component";
import UnderlinedNav from "../../components/underlined-nav.component";

import ITAdminDashboard from "./it-admin-dashboard/it-admin-dashboard";
import ITAdminRecentRequisitionsDetails from "./it-admin-dashboard/it-admin-dashboard-details";
import ITAdminSettingsAdminUsers from "./it-admin-settings/it-admin-settings-admin-users";
import ITAdminSettingsUserPermissions from "./it-admin-settings/it-admin-settings-user-permissions";
import ITAdminSettingsUserRoles from "./it-admin-settings/it-admin-settings-user-roles";
import ITAdminBidders from "./it-admin-bidders/it-admin-bidders";
import ITAdminRequestForQuotes from "./it-admin-request-for-quotes/it-admin-request-for-quotes";
import ITAdminCreateNewRFQ from "./it-admin-create-new-rfq/it-admin-create-new-rfq";
import ITAdminRequestForQuotesDetails from "./it-admin-request-for-quotes/it-admin-request-for-quotes-details";
import ITAdminRequestForQuotesTeamRequisitions from "./it-admin-request-for-quotes/it-admin-request-for-quotes-team-requisitions";
import ITAdminRequestForQuotesTeamRequisitionsDetails from "./it-admin-request-for-quotes/it-admin-request-for-quotes-team-requisitions-details";
import ITAdminRequestForQuotesOtherRequisitions from "./it-admin-request-for-quotes/it-admin-request-for-quotes-other-requisitions";
import ITAdminRequestForQuotesOtherRequisitionsDetails from "./it-admin-request-for-quotes/it-admin-request-for-quotes-other-requisitions-details";
import ITAdminMyPurchaseContracts from "./it-admin-purchase-contracts/it-admin-purchase-contracts";
import ITAdminMyPurchaseContractsDetails from "./it-admin-purchase-contracts/it-admin-purchase-contracts-details";
import { Provider } from "react-redux";
import { itAdminStore } from "../../store/it-admin/it-admin.store";


const ITAdminRoutes = () => {
    const {itAdminNavigations, itAdminSettingsUnderlinedNavigations} = useContext(ITAdminContext)
    return (
        <Provider store={itAdminStore}>
            <Routes>
            <Route path="/" element={<SideNavComponent navigationElements={itAdminNavigations}/>}>
            {/* The way I have done the routing is that when it get to dashboard it should render BidderDashboard and when it gets to dashboard/details/:rfqNo, it should render BidderDashboardDetails. :rfqNo is a variables that renders if the rfqNo exist. So it makes it dynamic. */}
                <Route path="/" element={<TopNavComponent />}>
                    <Route path="dashboard/">
                        <Route index element={<ITAdminDashboard />}/>
                        <Route path="details/:rfqNo" element={<ITAdminRecentRequisitionsDetails />}/>
                    </Route>
                    <Route path="settings">
                        <Route index element={<ITAdminSettingsAdminUsers />}/>
                        <Route path="user-roles" element={<ITAdminSettingsUserRoles />}>
                            <Route index element={<UnderlinedNav navigationElements={itAdminSettingsUnderlinedNavigations}/>} />
                        </Route>
                        <Route path="user-permissions" element={<ITAdminSettingsUserPermissions />}>
                            <Route index element={<UnderlinedNav navigationElements={itAdminSettingsUnderlinedNavigations}/>} />
                        </Route>
                    </Route>
                    <Route path="bidders" element={<ITAdminBidders />}/>
                    <Route path="/request-for-quotes">
                        <Route index element={<ITAdminRequestForQuotes />}/>
                        <Route path="create-new-rfq" element={<ITAdminCreateNewRFQ />}/>
                        <Route path="my-requisitions/details/:rfqNo" element={<ITAdminRequestForQuotesDetails />}/>
                        <Route path="team-requisitions">
                            <Route index element={<ITAdminRequestForQuotesTeamRequisitions />}/>
                            <Route path="details/:rfqNo" element={<ITAdminRequestForQuotesTeamRequisitionsDetails />}/>
                        </Route>
                        <Route path="other-requisitions">
                            <Route index element={<ITAdminRequestForQuotesOtherRequisitions />}/>
                            <Route path="details/:rfqNo" element={<ITAdminRequestForQuotesOtherRequisitionsDetails />}/>
                        </Route>
                    </Route>
                    <Route path="purchase-contracts">
                        <Route index element=<ITAdminMyPurchaseContracts />/>
                        <Route path="details/:rfqNo" element=<ITAdminMyPurchaseContractsDetails />/>
                    </Route>
                    <Route path="purchase-documents"/>
                </Route> 
            </Route>
        </Routes>
        </Provider>
    )
}

export default ITAdminRoutes;