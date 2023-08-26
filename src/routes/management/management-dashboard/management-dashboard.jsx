import { useContext} from "react";
import ActivityStatus from "../../../components/activity-status.component";

import ReactTable from "../../../components/react-table.component";
import SwitchRecords from "../../../components/switch-records-component";
import Greetings from "../../../components/greetings.component";
import { ManagementContext } from "../context/management.context";
const ManagementDashboard = () => {
    const { managementActivityStatusData, managementRequisitionsColumns, managementDashboardRecentRequisitionsData } = useContext(ManagementContext);
    
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
                        managementActivityStatusData.map((data, index) => (
                            <ActivityStatus activityStatus={data} key={index}/>
                        ))
                    }
                </div>
            </div>

            <div className="bg-white px-3 py-4">
                <p className="text-primaryBlue font-bold text-xl">
                    Recent Requisitions
                </p>
                <ReactTable columns={managementRequisitionsColumns} data={managementDashboardRecentRequisitionsData} goTo={"details"}/>
            </div>
            
        </div> 
    )
}

export default ManagementDashboard;