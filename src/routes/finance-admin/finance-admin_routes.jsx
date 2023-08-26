import { Route, Routes } from "react-router-dom";
import SideNavComponent from "../../components/side-nav.component";
import { useContext } from "react";
import { FinanceAdminContext } from "./context/finance-admin.context";
import TopNavComponent from "../../components/top-nav.component";
import FinanceAdminRequestForQuotesDetails from "./finance-admin-request-for-quotes/finance-admin-request-for-quotes-details";
import FinanceAdminRequestForQuotesOtherRequisitionsDetails from "./finance-admin-request-for-quotes/finance-admin-request-for-quotes-other-requisitions-details";
import FinanceAdminRequestForQuotesOtherRequisitions from "./finance-admin-request-for-quotes/finance-admin-request-for-quotes-other-requisitions";
import FinanceAdminRequestForQuotesTeamRequisitionsDetails from "./finance-admin-request-for-quotes/finance-admin-request-for-quotes-team-requisitions-details";
import FinanceAdminRequestForQuotesTeamRequisitions from "./finance-admin-request-for-quotes/finance-admin-request-for-quotes-team-requisitions";
import FinanceAdminRequestForQuotes from "./finance-admin-request-for-quotes/finance-admin-request-for-quotes";
import FinanceAdminRecentRequisitionsDetails from "./finance-admin-dashboard/finance-admin-dashboard-details";
import FinanceAdminDashboard from "./finance-admin-dashboard/finance-admin-dashboard";
import FinanceAdminMyPurchaseContractsDetails from "./finance-admin-purchase-contracts/finance-admin-purchase-contracts-details";
import FinanceAdminMyPurchaseContracts from "./finance-admin-purchase-contracts/finance-admin-purchase-contracts";
import FinanceAdminCreateNewRFQ from "./finance-admin-create-new-rfq/finance-admin-create-new-rfq";


const FinanceAdminRoutes = () => {
    const {financeAdminNavigations } = useContext(FinanceAdminContext)
    return (
        <Routes>
            <Route path="/" element={<SideNavComponent navigationElements={financeAdminNavigations}/>}>
            {/* The way I have done the routing is that when it get to dashboard it should render BidderDashboard and when it gets to dashboard/details/:rfqNo, it should render BidderDashboardDetails. :rfqNo is a variables that renders if the rfqNo exist. So it makes it dynamic. */}
                <Route path="/" element={<TopNavComponent />}>
                    <Route path="dashboard/">
                        <Route index element={<FinanceAdminDashboard />}/>
                        <Route path="details/:rfqNo" element={<FinanceAdminRecentRequisitionsDetails />}/>
                    </Route>
                    <Route path="bidders" />
                    <Route path="/request-for-quotes">
                        <Route index element={<FinanceAdminRequestForQuotes />}/>
                        <Route path="create-new-rfq" element={<FinanceAdminCreateNewRFQ />}/>
                        <Route path="my-requisitions/details/:rfqNo" element={<FinanceAdminRequestForQuotesDetails />}/>
                        <Route path="team-requisitions">
                            <Route index element={<FinanceAdminRequestForQuotesTeamRequisitions />}/>
                            <Route path="details/:rfqNo" element={<FinanceAdminRequestForQuotesTeamRequisitionsDetails />}/>
                        </Route>
                        <Route path="other-requisitions">
                            <Route index element={<FinanceAdminRequestForQuotesOtherRequisitions />}/>
                            <Route path="details/:rfqNo" element={<FinanceAdminRequestForQuotesOtherRequisitionsDetails />}/>
                        </Route>
                    </Route>
                    <Route path="purchase-contracts">
                        <Route index element={<FinanceAdminMyPurchaseContracts />}/>
                        <Route path="details/:rfqNo" element={<FinanceAdminMyPurchaseContractsDetails />}/>
                    </Route>
                    <Route path="purchase-documents"/>
                </Route> 
            </Route>
        </Routes>
    )
}

export default FinanceAdminRoutes;