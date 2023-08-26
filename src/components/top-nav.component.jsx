import { Outlet } from "react-router-dom";
import {ReactComponent as SaphireProcureBlueLogoSvg} from "../assets/saphire_procure_blue_logo.svg";
import {ReactComponent as NotificationSvg} from "../assets/notification.svg";
import {ReactComponent as LogOutIconSvg} from "../assets/logout-icon.svg";
import profilePic from "../assets/profile.jpg"
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
            <div className="flex flex-col w-full mb-2 overflow-y-scroll bg-secondaryBackground">
                <nav className="bg-white px-4 py-3 flex w-full justify-between shadow-sm">
                    <div>
                        <SaphireProcureBlueLogoSvg />
                    </div>
                    <div className="flex justify-between space-x-7">
                        {/* Notification Bell */}
                        <div className="cursor-pointer" onClick={toggleNotificationBellClick}>
                            <NotificationSvg />
                        </div>
                        {/* Profile display name and profile pic */}
                        <div className="flex space-x-2">
                            <div className="w-7 h-7 rounded-full overflow-clip">
                                <img src={profilePic} alt="profile_pic" className="w-full h-full"/>
                            </div>
                            <span className="self-center">Faisal Adams</span>
                        </div>
                        {/* Logout */}
                        <div className="flex justify-between hover:cursor-pointer">
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