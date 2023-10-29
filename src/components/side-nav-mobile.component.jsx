import {ReactComponent as PrudentEnergyLogo} from "../assets/prudent_energy_logo.svg";
import {NavLink, Outlet} from "react-router-dom";
import {LuLayoutDashboard} from "react-icons/lu";
import {FaQuestion} from "react-icons/fa6";
import {FaHandHoldingDollar} from "react-icons/fa6";
import {MdOutlineDescription} from "react-icons/md";
import {IoMdCheckboxOutline} from "react-icons/io";
import {MdBarChart} from "react-icons/md";
import {MdPersonOutline} from "react-icons/md";
import {MdOutlineLogout} from "react-icons/md";
import {RiTeamFill} from "react-icons/ri";
import IconTooltipComponent from "./icon-tooltip-component";
//Images
import profilePic from "../assets/profile.jpg";

const SideNavMobileComponent = ({navigationElements}) => {
    return (
        <div className="max-h-screen w-screen overflow-hidden flex">
            <div className="bg-primaryBlue h-screen transition-all pt-12 px-2">
                <div className="hidden items-center justify-center px-8 py-4 my-4 lg:flex">
                    <PrudentEnergyLogo />
                </div>
                <div className="group relative w-7 h-7  mb-7 -mt-6 ml-1.5 cursor-pointer">
                    <img src={profilePic} alt="profile_pic" className="w-full h-full rounded-full pointer-events-none"/>
                    <IconTooltipComponent tooltipText="Faisal Adams"/>
                </div>
                <div className="flex flex-col space-y-3">
                {/* p-3 py-2 pr-10 rounded-md  font-bold ${navigationElement.path === location.pathname ? "bg-white text-primaryBlue" : "text-white"} */}
                    {navigationElements.map(navigationElement => {
                        return (
                            <NavLink key={navigationElement.id} to={navigationElement.path} className={({isActive}) => {
                                
                                return ( isActive ? "bg-white text-primaryBlue px-2 py-2 rounded-md font-bold group relative" : "px-2 py-2 rounded-md font-bold text-white group relative" )}
                                }> 
                                    {
                                        navigationElement.navigationName === "Dashboard" ? <LuLayoutDashboard className="h-6 w-6"/> 
                                        : navigationElement.navigationName === "Request for Quotes" ? <FaQuestion className="h-6 w-6"/> 
                                        : navigationElement.navigationName === "Purchase Contracts"
                                        || navigationElement.navigationName === "My Purchase Contracts" ? <MdOutlineDescription className="h-6 w-6"/> 
                                        : navigationElement.navigationName === "Issue Resolution" ? <IoMdCheckboxOutline className="h-6 w-6"/> 
                                        : navigationElement.navigationName === "Report" ? <MdBarChart className="h-6 w-6"/> 
                                        : navigationElement.navigationName === "Profile" ? <MdPersonOutline className="h-6 w-6"/>  
                                        : navigationElement.navigationName === "My Requisitions" ? <FaHandHoldingDollar className="h-6 w-6"/>
                                        : navigationElement.navigationName === "Team Requisitions" ? <RiTeamFill className="h-6 w-6"/>
                                        : null
                                    }
                                    <IconTooltipComponent tooltipText={navigationElement.navigationName}/>
                            </NavLink>
                        )
                    })}
                    <div className="group relative justify-between cursor-pointer text-white px-2 py-2 rounded-md font-bold">
                        <MdOutlineLogout className="h-6 w-6"/>
                        <IconTooltipComponent tooltipText="Logout"/>
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default SideNavMobileComponent;