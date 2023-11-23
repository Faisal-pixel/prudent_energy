import { Route, Routes } from "react-router-dom";
import SideNavComponent from "../../components/side-nav.component";
import { useContext, useEffect, useState } from "react";
import { ProcurementAdminContext } from "./context/procurement-admin.context";
import TopNavComponent from "../../components/top-nav.component";
import ProcurementAdminDashboard from "./procurement-admin-dashboard/procurement-admin-dashboard";
import ProcurementAdminRecentRequisitionsDetails from "./procurement-admin-dashboard/procurement-admin-dashboard-details";
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
import ProcurementAdminCreateNewRFQ from "./procurement-admin-create-new-rfq/procurement-admin-create-new-rfq";
import ProcurementAdminMyPurchaseContracts from "./procurement-admin-purchase-contracts/procurement-admin-purchase-contracts";
import ProcurementAdminMyPurchaseContractsDetails from "./procurement-admin-purchase-contracts/procurement-admin-purchase-contracts-details";
import { Provider } from "react-redux";
import { procurementAdminStore } from "../../store/procurement-admin/procurement-admin.store";
import SideNavMobileComponent from "../../components/side-nav-mobile.component";


const ProcurementAdminRoutes = () => {
    const { procurementAdminNavigations } = useContext(ProcurementAdminContext);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    useEffect(() => {
        function handleResize() {
          setScreenWidth(window.innerWidth);
        }

        // Attach the event listener when the component mounts
        window.addEventListener('resize', handleResize);
    
        // Clean up the event listener when the component unmounts
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    return (
        <Provider store={procurementAdminStore}>
            <Routes>
            <Route path="/" element={screenWidth < 1024 ? <SideNavMobileComponent navigationElements={procurementAdminNavigations}/> : <SideNavComponent navigationElements={procurementAdminNavigations}/>}>
            {/* The way I have done the routing is that when it get to dashboard it should render BidderDashboard and when it gets to dashboard/details/:rfqNo, it should render BidderDashboardDetails. :rfqNo is a variables that renders if the rfqNo exist. So it makes it dynamic. */}
                <Route path="/" element={<TopNavComponent />}>
                    <Route path="dashboard/">
                        <Route index element={<ProcurementAdminDashboard />}/>
                        <Route path="details/:rfqNo" element={<ProcurementAdminRecentRequisitionsDetails />}/>
                    </Route>
                    <Route path="settings">
                        <Route index element={<ProcurementAdminSettingsAdminUsers />} />
                        <Route path="user-roles" element={<ProcurementAdminSettingsUserRoles />} />
                        <Route path="user-permissions" element={<ProcurementAdminSettingsUserPermissions />} />
                    </Route>
                    <Route path="bidders" element={<ProcurementAdminBidders />}/>
                    <Route path="/request-for-quotes">
                        <Route index element={<ProcurementAdminRequestForQuotes />}/>
                        <Route path="create-new-rfq" element={<ProcurementAdminCreateNewRFQ />}/>
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
                        <Route index element={<ProcurementAdminMyPurchaseContracts />}/>
                        <Route path="details/:rfqNo" element={<ProcurementAdminMyPurchaseContractsDetails />}/>
                    </Route>
                    <Route path="purchase-documents"/>
                </Route> 
            </Route>
        </Routes>
        </Provider>
    )
}

export default ProcurementAdminRoutes;