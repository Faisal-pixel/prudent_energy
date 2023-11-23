import React from 'react'
import Greetings from './greetings.component';
import UnderlinedNav from './underlined-nav.component';
import GeneralTable from './general-table.component';

const UserPermissionsSettingsPageTemplateComponent = ({underlinedNavigations, incomingColumn, incomingData, permissionOptions}) => {
  return (
        <div className="bg-secondaryBackground overflow-y-scroll space-y-5 px-6 pt-6">
            <div className="flex justify-between">
                <Greetings />
            </div>

            <UnderlinedNav navigationElements={underlinedNavigations} />
            <div className="flex flex-col justify-between gap-y-6 custom_1025:flex-row">
                <div>
                    <label>Permission set: </label>
                    <select className="w-64 py-1 px-2 border-l border-r border-greyDark focus:outline-none rounded">
                        {permissionOptions.map(permission => (
                            <option className="shadow-md" key={permission.id}>{permission.permissionName}</option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-col gap-x-2 gap-y-2 custom_1025:flex-row">
                    <button type="button" className="rounded-full px-2 py-1 bg-white text-primaryBlue border border-primaryBlue hover:bg-primaryBlue hover:text-white">Import Permission set</button>
                    <button type="button" className="rounded-full px-2 py-1 bg-white text-primaryBlue border border-primaryBlue hover:bg-primaryBlue hover:text-white">Export Permission set</button>
                </div>
            </div>
            <div className="bg-white px-3 py-4">
                <GeneralTable filteredData={incomingData} columns={incomingColumn}/>
            </div>
            
        </div>
  )
}

export default UserPermissionsSettingsPageTemplateComponent;