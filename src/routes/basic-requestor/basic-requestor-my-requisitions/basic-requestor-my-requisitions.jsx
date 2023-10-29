import ActivityStatus from "../../../components/activity-status.component";
import { Link } from "react-router-dom";
import Greetings from "../../../components/greetings.component";
import { useSelector } from "react-redux";
import { selectBasicRequestorActivityStatusData, selectBasicRequestorMyRecentRequisitionsColumn, selectBasicRequestorMyRecentRequisitionsData } from "../../../store/basic-requestor/basic-requestor-my-requisitions-reducer/basic-requestor-my-requisitions.selector";
import GeneralTable from "../../../components/general-table.component";
const BasicRequestorMyRecentRequisitions = () => {
    const basicRequestorActivityStatusData = useSelector(selectBasicRequestorActivityStatusData);
    const basicRequestorMyRecentRequisitionsColumn = useSelector(selectBasicRequestorMyRecentRequisitionsColumn);
    const basicRequestorMyRecentRequisitionsData = useSelector(selectBasicRequestorMyRecentRequisitionsData);
    return (
        <div className="bg-secondaryBackground overflow-y-scroll space-y-5 px-6 pt-6">
            <div className=" flex flex-col justify-between space-y-4 lg:space-y-0 lg:flex-wrap lg:flex-row">
                <Greetings />
                <Link to="create-new-rfq" className="text-white self-start px-4 py-1 rounded border border-primaryBlue bg-primaryBlue hover:text-primaryBlue hover:bg-white">Create New RFQ</Link>
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
                <GeneralTable columns={basicRequestorMyRecentRequisitionsColumn} filteredData={basicRequestorMyRecentRequisitionsData} clickable={"details"}/>
            </div>
            
        </div> 
    )
}

export default BasicRequestorMyRecentRequisitions;