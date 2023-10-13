import { Route, Routes } from "react-router-dom";
import SideNavComponent from "../../components/side-nav.component"
import { useContext } from "react";
import TopNavComponent from "../../components/top-nav.component";
import { BasicRequestorContext } from "./context/basic-requestor-context";
import BasicRequestorMyRecentRequisitions from "./basic-requestor-my-requisitions/basic-requestor-my-requisitions";
import BasicRequestorMyRecentRequisitionsDetails from "./basic-requestor-my-requisitions/basic-requestor-my-requisitions-details";
import BasicRequestorTeamRequisitions from "./basic-requestor-team-requisitions/basic-requestor-team-requisitions";
import BasicRequestorTeamRequisitionsDetails from "./basic-requestor-team-requisitions/basic-requestor-team-requisitions-details";
import BasicRequestorMyPurchaseContracts from "./basic-requestor-my-purchase-contracts/basic-requestor-my-purchase-contracts";
import BasicRequestorMyPurchaseContractsDetails from "./basic-requestor-my-purchase-contracts/basic-requestor-my-purchase-contracts-details";
import BasicRequestorCreateNewRFQ from "./basic-requestor-admin-create-new-rfq/basic-requestor-admin-create-new-rfq";
import { Provider } from "react-redux";
import { basicRequestorStore } from "../../store/basic-requestor/basic-requestor.store";

const BasicRequestorRoutes = () => {
    const {basicRequestorNavigations} = useContext(BasicRequestorContext)
    return (
        <Provider store={basicRequestorStore}>
            <Routes>
            <Route path="/" element={<SideNavComponent navigationElements={basicRequestorNavigations}/>}>
            {/* The way I have done the routing is that when it get to dashboard it should render BidderDashboard and when it gets to dashboard/details/:rfqNo, it should render BidderDashboardDetails. :rfqNo is a variables that renders if the rfqNo exist. So it makes it dynamic. */}
                <Route path="/" element={<TopNavComponent />}>
                    <Route path="my-requisitions">
                        <Route index  element={<BasicRequestorMyRecentRequisitions />}/>
                        <Route path="create-new-rfq"  element={<BasicRequestorCreateNewRFQ />}/>
                        <Route path="details/:rfqNo" element={<BasicRequestorMyRecentRequisitionsDetails />}/>
                    </Route>
                    <Route path="team-requisitions">
                        <Route index element={<BasicRequestorTeamRequisitions />}/>
                        <Route path="details/:rfqNo" element={<BasicRequestorTeamRequisitionsDetails />}/>
                    </Route>
                    <Route path="purchase-contracts">
                        <Route index element={<BasicRequestorMyPurchaseContracts />}/>
                        <Route path="details/:rfqNo" element={<BasicRequestorMyPurchaseContractsDetails />}/>
                    </Route>
                </Route> 
            </Route>
        </Routes>
        </Provider>
    )
}

export default BasicRequestorRoutes;