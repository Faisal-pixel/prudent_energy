import React from 'react'
import Greetings from './greetings.component';
import UnderlinedNav from './underlined-nav.component';
import GeneralTable from './general-table.component';

import {ReactComponent as AddButtonSVG} from "../assets/add-button-in-user-roles.svg";

const UserRolesSettingsPageTemplateComponent = ({underlinedNavigations,incomingData, incomingColumn}) => {
  return (
        <div className="bg-secondaryBackground overflow-y-scroll space-y-5 px-6 pt-6">
            <div className="flex justify-between">
                <Greetings />
            </div>

            <UnderlinedNav navigationElements={underlinedNavigations} />
            <div className="flex justify-end">
                <AddButtonSVG />
            </div>
            <div className="bg-white px-3 py-4">
                <GeneralTable filteredData={incomingData} columns={incomingColumn}/>
            </div>
        </div>
  )
}

export default UserRolesSettingsPageTemplateComponent;