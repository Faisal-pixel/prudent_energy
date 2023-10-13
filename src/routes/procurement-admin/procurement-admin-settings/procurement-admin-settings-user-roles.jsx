import {ReactComponent as AddButtonSVG} from "../../../assets/add-button-in-user-roles.svg"
import Greetings from "../../../components/greetings.component";
import UnderlinedNav from "../../../components/underlined-nav.component";
import { useSelector } from "react-redux";
import { selectProcurementAdminSettingsUnderlinedNavigations, selectProcurementAdminUserRolesColumn, selectProcurementAdminUserRolesData } from "../../../store/procurement-admin/procurement-admin-settings/procurement-admin-settings.selector";
import GeneralTable from "../../../components/general-table.component";

const ProcurementAdminSettingsUserRoles = () => {
    const procurementAdminUserRolesColumn = useSelector(selectProcurementAdminUserRolesColumn);
    console.log(procurementAdminUserRolesColumn)
    const procurementAdminUserRolesData = useSelector(selectProcurementAdminUserRolesData);
    console.log(procurementAdminUserRolesData)
    const procurementAdminSettingsUnderlinedNavigations = useSelector(selectProcurementAdminSettingsUnderlinedNavigations);
    return <>
        <div className="container bg-secondaryBackground overflow-y-scroll space-y-5 px-6 pt-6">
            <div className="flex justify-between">
                <Greetings />
            </div>

            <UnderlinedNav navigationElements={procurementAdminSettingsUnderlinedNavigations} />
            <div className="flex justify-end">
                <AddButtonSVG />
            </div>
            <div className="bg-white px-3 py-4">
                <GeneralTable filteredData={procurementAdminUserRolesData} columns={procurementAdminUserRolesColumn}/>
            </div>
            
        </div>
        
    </>
}

export default ProcurementAdminSettingsUserRoles;