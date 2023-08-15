import { Outlet } from "react-router-dom";
import ReactTable from "../../../components/react-table.component";
import { useContext } from "react";
import { ProcurementAdminContext } from "../context/procurement-admin.context";

const ProcurementAdminSettingsAdminUsers = () => {
    const {procurementAdminAdminUsersColumns, procurementAdminAdminUsersData} = useContext(ProcurementAdminContext);
    return <>
        <div className="container bg-secondaryBackground overflow-y-scroll space-y-5 px-6 pt-6">
            <div className="flex justify-between">
                <p className="text-greyDark"><span className="font-bold text-black">Hey John -</span> We were just about to start the party without you. Welcome back, buddy!</p>
            </div>

            <Outlet />

            <div className="bg-white px-3 py-4">
                
                <ReactTable columns={procurementAdminAdminUsersColumns} data={procurementAdminAdminUsersData}/>
            </div>
            
        </div>
        
    </>
}

export default ProcurementAdminSettingsAdminUsers;