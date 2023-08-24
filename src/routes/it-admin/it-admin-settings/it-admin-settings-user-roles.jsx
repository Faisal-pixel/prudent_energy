import { Outlet } from "react-router-dom";
import ReactTable from "../../../components/react-table.component";
import { useContext } from "react";
import { ITAdminContext } from "../context/it-admin.context";
import {ReactComponent as AddButtonSVG} from "../../../assets/add-button-in-user-roles.svg"
import Greetings from "../../../components/greetings.component";

const ITAdminSettingsUserRoles = () => {
    const {itAdminUserRolesColumns, itAdminUserRolesData} = useContext(ITAdminContext);
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
                
                <ReactTable columns={itAdminUserRolesColumns} data={itAdminUserRolesData}/>
            </div>
            
        </div>
        
    </>
}

export default ITAdminSettingsUserRoles;