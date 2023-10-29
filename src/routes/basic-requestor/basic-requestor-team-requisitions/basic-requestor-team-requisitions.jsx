import { useSelector } from "react-redux";
import ActivityStatus from "../../../components/activity-status.component";
import Greetings from "../../../components/greetings.component";
import { selectBasicRequestorActivityStatusData, selectBasicRequestorTeamRequisitionsColumn, selectBasicRequestorTeamRequisitionsData } from "../../../store/basic-requestor/basic-requestor-team-requisitions-reducer/basic-requestor-team-requisitions.selector";
import GeneralTable from "../../../components/general-table.component";
const BasicRequestorTeamRequisitions = () => {
    const basicRequestorActivityStatusData = useSelector(selectBasicRequestorActivityStatusData);
    const basicRequestorTeamRequisitionsColumns = useSelector(selectBasicRequestorTeamRequisitionsColumn);
    const basicRequestorTeamRequisitionsData = useSelector(selectBasicRequestorTeamRequisitionsData);
    return (
        <div className="bg-secondaryBackground overflow-y-scroll space-y-5 px-6 pt-6">
            <div className=" flex  justify-between">
                <Greetings />
            </div>

            <div className="bg-white p-6 space-y-5 rounded-md">
                <h2 className="font-bold text-primaryBlue text-lg">Activity Status</h2>
                <div className="flex space-x-0 md:space-x-0.5 text-white flex-wrap lg:flex-nowrap">
                    {
                        basicRequestorActivityStatusData.map((data, index) => (
                            <ActivityStatus activityStatus={data} key={index}/>
                        ))
                    }
                </div>
            </div>

            <div className="bg-white px-3 py-4">
                <p className="text-primaryBlue font-bold text-xl">
                    My Recent Requisitions
                </p>
                <GeneralTable columns={basicRequestorTeamRequisitionsColumns} filteredData={basicRequestorTeamRequisitionsData} clickable={"details"}/>
            </div>
            
        </div> 
    )
}

export default BasicRequestorTeamRequisitions;