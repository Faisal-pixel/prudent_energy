import React from 'react'
import ActivityStatus from './activity-status.component'
import Greetings from './greetings.component'
import SwitchRecords from './switch-records-component'
import GeneralTable from './general-table.component'

const ProcurementItFinanceManagementDashboardTemplateComponent = ({activityStatusData, incomingData, incomingColumn}) => {
  return (
    <div className="bg-secondaryBackground overflow-y-scroll space-y-5 px-6 pt-6">
            <div className="flex flex-col justify-between gap-y-4 custom_1150:flex-row">
                <Greetings />
                <SwitchRecords />
            </div>

            <div className="bg-white p-6 space-y-5 rounded-md">
                <h2 className="font-bold text-primaryBlue text-lg">Activity Status</h2>
                <div className="flex space-x-0 md:space-x-0.5 text-white flex-wrap lg:flex-nowrap">
                    {
                        activityStatusData.map((data, index) => (
                            <ActivityStatus activityStatus={data} key={index}/>
                        ))
                    }
                </div>
            </div>

            <div className="bg-white px-3 py-4">
                <p className="text-primaryBlue font-bold text-xl">
                    Recent Requisitions
                </p>
                <GeneralTable columns={incomingColumn} data={incomingData} />
            </div>
            
        </div>
  )
}

export default ProcurementItFinanceManagementDashboardTemplateComponent