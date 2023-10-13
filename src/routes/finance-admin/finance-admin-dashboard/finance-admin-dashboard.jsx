import ActivityStatus from "../../../components/activity-status.component";

import SwitchRecords from "../../../components/switch-records-component";
import Greetings from "../../../components/greetings.component";
import { useSelector } from "react-redux";
import { selectFinanceAdminDashboardActivityStatusData, selectFinanceAdminDashboardRecentRequisitionsColumns, selectFinanceAdminDashboardRecentRequisitionsData } from "../../../store/finance-admin/finance-admin-dashboard/finance-admin-dashboard.selector";
import GeneralTable from "../../../components/general-table.component";
const FinanceAdminDashboard = () => {
    const financeAdminActivityStatusData = useSelector(selectFinanceAdminDashboardActivityStatusData);
    const financeAdminRequisitionsColumns = useSelector(selectFinanceAdminDashboardRecentRequisitionsColumns);
    const financeAdminDashboardRecentRequisitionsData = useSelector(selectFinanceAdminDashboardRecentRequisitionsData)
    return (
        <div className="container bg-secondaryBackground overflow-y-scroll space-y-5 px-6 pt-6">
            <div className="flex justify-between">
                <Greetings />
                <SwitchRecords />
            </div>

            <div className="bg-white p-6 space-y-5 rounded-md">
                <h2 className="font-bold text-primaryBlue text-lg">Activity Status</h2>
                <div className="flex space-x-0.5 text-white">
                    {
                        financeAdminActivityStatusData.map((data, index) => (
                            <ActivityStatus activityStatus={data} key={index}/>
                        ))
                    }
                </div>
            </div>

            <div className="bg-white px-3 py-4">
                <p className="text-primaryBlue font-bold text-xl">
                    Recent Requisitions
                </p>
                <GeneralTable columns={financeAdminRequisitionsColumns} filteredData={financeAdminDashboardRecentRequisitionsData} details={"details"}/>
            </div>
            
        </div> 
    )
}

export default FinanceAdminDashboard;