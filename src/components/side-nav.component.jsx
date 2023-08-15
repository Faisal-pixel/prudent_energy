import {ReactComponent as PrudentEnergyLogo} from "../assets/prudent_energy_logo.svg"
import { Link, Outlet, useLocation } from "react-router-dom";
const SideNavComponent = ({navigationElements}) => {
    const location = useLocation();
    return (
        <div className="max-h-screen w-screen overflow-hidden flex">
            <div className="bg-primaryBlue h-screen min-w-max px-5 py-2">
                <div className="flex items-center justify-center px-8 py-4 my-4">
                    <PrudentEnergyLogo />
                </div>
                <div className="flex flex-col space-y-3">
                    {navigationElements.map(navigationElement => {
                        return (
                            <Link key={navigationElement.id} to={navigationElement.path} className={`p-3 py-2 pr-10 rounded-md  font-bold ${navigationElement.path === location.pathname ? "bg-white text-primaryBlue" : "text-white"}`}> {navigationElement.navigationName}</Link>
                        )
                    })}
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default SideNavComponent;