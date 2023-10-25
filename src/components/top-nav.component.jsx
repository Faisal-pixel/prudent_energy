import { Outlet } from "react-router-dom";
import {ReactComponent as PrudentEnergyLogo} from "../assets/prudent-energy-logo-blue.svg";
import {ReactComponent as SaphireProcureBlueLogoSvg} from "../assets/saphire_procure_blue_logo.svg";
import {ReactComponent as NotificationSvg} from "../assets/notification.svg";
import {ReactComponent as LogOutIconSvg} from "../assets/logout-icon.svg";
import profilePic from "../assets/profile.jpg";
import { useState } from "react";
import NotificationsParentComponent from "./notifications-parent.component";

const TopNavComponent = () => {
    const [openNotification, setOpenNotification] = useState(false);
    console.log(openNotification + "top-nav")
    const toggleNotificationBellClick = () => {
        setOpenNotification(!openNotification)
    }
    return (
        <>
            {
                openNotification && <NotificationsParentComponent onClose={toggleNotificationBellClick} isNotificationParentOpen={openNotification}/>
            }
            <div className="flex flex-col mb-2 h-screen w-screen bg-secondaryBackground">
                <nav className="bg-white px-4 py-3 flex w-full justify-between shadow-sm">
                    <div className="flex space-x-6">
                        <div className="flex items-center justify-center lg:hidden">
                            <PrudentEnergyLogo className="text-primaryBlue"/>
                        </div>
                        <div className="flex items-center justify-center">
                            <SaphireProcureBlueLogoSvg />
                        </div>
                    </div>
                    <div className="flex justify-between space-x-7">
                        {/* Notification Bell */}
                        <div className="cursor-pointer" onClick={toggleNotificationBellClick}>
                            <NotificationSvg />
                        </div>
                        {/* Profile display name and profile pic */}
                        <div className="hidden space-x-2 lg:flex">
                            <div className="w-7 h-7 rounded-full overflow-clip">
                                <img src={profilePic} alt="profile_pic" className="w-full h-full"/>
                            </div>
                            <span className="self-center">Faisal Adams</span>
                        </div>
                        {/* Logout */}
                        <div className="justify-between hover:cursor-pointer hidden lg:flex">
                            <LogOutIconSvg className="self-center pointer-events-none" />
                            <span className="self-center ml-1 pointer-events-none">Logout</span>
                        </div>
                    </div>
                </nav>
                <Outlet />
            </div>
        </>
    )
}

export default TopNavComponent;