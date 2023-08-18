import { useContext } from "react";
import ActivityStatus from "../../../components/activity-status.component";

import ReactTable from "../../../components/react-table.component";
import { BasicRequestorContext } from "../context/basic-requestor-context";
import { Link } from "react-router-dom";
import Greetings from "../../../components/greetings.component";
const BasicRequestorMyRecentRequisitions = () => {
    const { basicRequestorActivityStatusData, basicRequestorMyRecentRequisitionsColumns, basicRequestorMyRecentRequisitionsData } = useContext(BasicRequestorContext);
    return (
        <div className="container bg-secondaryBackground overflow-y-scroll space-y-5 px-6 pt-6">
            <div className=" flex  justify-between">
                <Greetings />
                <Link to="create-new-rfq" className="text-white px-4 py-1 rounded border border-primaryBlue bg-primaryBlue hover:text-primaryBlue hover:bg-white">Create New RFQ</Link>
            </div>

            <div className="bg-white p-6 space-y-5 rounded-md">
                <h2 className="font-bold text-primaryBlue text-lg">Activity Status</h2>
                <div className="flex space-x-0.5 text-white">
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
                <ReactTable columns={basicRequestorMyRecentRequisitionsColumns} data={basicRequestorMyRecentRequisitionsData} goTo={"details"}/>
            </div>
            
        </div> 
    )
}

export default BasicRequestorMyRecentRequisitions;