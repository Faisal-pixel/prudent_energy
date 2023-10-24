import {ReactComponent as PrudentEnergyLogo} from "../assets/prudent_energy_logo.svg"
import {NavLink, Outlet} from "react-router-dom";

const SideNavComponent = ({navigationElements}) => {
    return (
        <div className="max-h-screen w-screen overflow-hidden flex">
            <div className="bg-primaryBlue h-screen block min-w-max px-5 py-2">
                <div className="flex items-center justify-center px-8 py-4 my-4">
                    <PrudentEnergyLogo />
                </div>
                <div className="flex flex-col space-y-3">
                {/* p-3 py-2 pr-10 rounded-md  font-bold ${navigationElement.path === location.pathname ? "bg-white text-primaryBlue" : "text-white"} */}
                    {navigationElements.map(navigationElement => {
                        return (
                            <NavLink key={navigationElement.id} to={navigationElement.path} className={({isActive}) => {
                                
                                return ( isActive ? "bg-white text-primaryBlue p-3 py-2 pr-10 rounded-md font-bold" : "p-3 py-2 pr-10 rounded-md font-bold text-white" )}
                                }> 
                                    {navigationElement.navigationName}
                            </NavLink>
                        )
                    })}
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default SideNavComponent;