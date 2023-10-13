import { Outlet } from "react-router-dom";
import {ReactComponent as AddButtonSVG} from "../../../assets/add-button-in-user-roles.svg"
import Greetings from "../../../components/greetings.component";
import { useSelector } from "react-redux";
import { selectItAdminUserRolesColumn, selectItAdminUserRolesData } from "../../../store/it-admin/it-admin-settings/it-admin-settings.selector";
import GeneralTable from "../../../components/general-table.component";

const ITAdminSettingsUserRoles = () => {
    const itAdminUserRolesColumns = useSelector(selectItAdminUserRolesColumn);
    const itAdminUserRolesData = useSelector(selectItAdminUserRolesData)
    return <>
        <div className="container bg-secondaryBackground overflow-y-scroll space-y-5 px-6 pt-6">
            <div className="flex justify-between">
                <Greetings />
            </div>

            <Outlet />
            <div className="flex justify-end">
                <AddButtonSVG />
            </div>
            <div className="bg-white px-3 py-4"> 
                <GeneralTable columns={itAdminUserRolesColumns} filteredData={itAdminUserRolesData}/>
            </div>
            
        </div>
        
    </>
}

export default ITAdminSettingsUserRoles;