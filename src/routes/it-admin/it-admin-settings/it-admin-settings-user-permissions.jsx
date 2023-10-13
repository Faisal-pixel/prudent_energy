import { useMemo } from "react";
import { Outlet } from "react-router-dom";
import Greetings from "../../../components/greetings.component";
import { useSelector } from "react-redux";
import { selectItAdminUserPermissionsColumn, selectItAdminUserPermissionsData } from "../../../store/it-admin/it-admin-settings/it-admin-settings.selector";
import GeneralTable from "../../../components/general-table.component";

const ITAdminSettingsUserPermissions = () => {
    const itAdminUserPermissionsColumns = useSelector(selectItAdminUserPermissionsColumn);
    const itAdminUserPermissionsData = useSelector(selectItAdminUserPermissionsData);
    const permissionOptions = useMemo(() => [
        {
            id: 1,
            permissionName: "Basic",
        },
        {
            id: 2,
            permissionName: "Approver",
        },
        {
            id: 3,
            permissionName: "Uploader",
        },
        {
            id: 4,
            permissionName: "Sys Admin",
        },
        {
            id: 5,
            permissionName: "Manager",
        },
        {
            id: 6,
            permissionName: "Lead",
        },
        {
            id: 7,
            permissionName: "Supervisor",
        },
    ], [])
    return <>
        <div className="container bg-secondaryBackground overflow-y-scroll space-y-5 px-6 pt-6">
            <div className="flex justify-between">
                <Greetings />
            </div>

            <Outlet />
            <div className="flex justify-between">
                <div>
                    <label>Permission set: </label>
                    <select className="w-64 py-1 px-2 border-l border-r border-greyDark focus:outline-none rounded">
                        {permissionOptions.map(permission => (
                            <option className="shadow-md" key={permission.id}>{permission.permissionName}</option>
                        ))}
                    </select>
                </div>
                <div className="space-x-2">
                    <button type="button" className="rounded-full px-2 py-1 bg-white text-primaryBlue border border-primaryBlue hover:bg-primaryBlue hover:text-white">Import Permission set</button>
                    <button type="button" className="rounded-full px-2 py-1 bg-white text-primaryBlue border border-primaryBlue hover:bg-primaryBlue hover:text-white">Export Permission set</button>
                </div>
            </div>
            <div className="bg-white px-3 py-4">
                
                <GeneralTable columns={itAdminUserPermissionsColumns} filteredData={itAdminUserPermissionsData}/>
            </div>
            
        </div>
    </>
}

export default ITAdminSettingsUserPermissions;