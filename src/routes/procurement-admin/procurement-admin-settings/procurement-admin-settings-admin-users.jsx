import { Outlet } from "react-router-dom";

const ProcurementAdminSettingsAdminUsers = () => {
    return <>
        <div className="container bg-secondaryBackground overflow-y-scroll space-y-5 px-6 pt-6">
            <div className="flex justify-between">
                <p className="text-greyDark"><span className="font-bold text-black">Hey John -</span> We were just about to start the party without you. Welcome back, buddy!</p>
            </div>

            <Outlet />

            <div className="bg-white px-3 py-4">
                
                The remaining stuffs
            </div>
            
        </div>
        
    </>
}

export default ProcurementAdminSettingsAdminUsers;