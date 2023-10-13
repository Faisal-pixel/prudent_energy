import { useContext} from "react";
import ActivityStatus from "../../../components/activity-status.component";

import ReactTable from "../../../components/react-table.component";
import { ITAdminContext } from "../context/it-admin.context";
import SwitchRecords from "../../../components/switch-records-component";
import Greetings from "../../../components/greetings.component";
import { selectItAdminDashboardActivityStatusData, selectItAdminDashboardRecentRequisitionsColumns, selectItAdminDashboardRecentRequisitionsData } from "../../../store/it-admin/it-admin-dashboard/it-admin-dashboard.selector";
import { useSelector } from "react-redux";
import GeneralTable from "../../../components/general-table.component";
const ITAdminDashboard = () => {
    const itAdminActivityStatusData = useSelector(selectItAdminDashboardActivityStatusData);
    const itAdminDashboardRecentRequisitionsColumns = useSelector(selectItAdminDashboardRecentRequisitionsColumns);
    const itAdminDashboardRecentRequisitionsData = useSelector(selectItAdminDashboardRecentRequisitionsData);
    
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
                        itAdminActivityStatusData.map((data, index) => (
                            <ActivityStatus activityStatus={data} key={index}/>
                        ))
                    }
                </div>
            </div>

            <div className="bg-white px-3 py-4">
                <p className="text-primaryBlue font-bold text-xl">
                    Recent Requisitions
                </p>
                <GeneralTable columns={itAdminDashboardRecentRequisitionsColumns} filteredData={itAdminDashboardRecentRequisitionsData}/>
            </div>
            
        </div> 
    )
}

export default ITAdminDashboard;