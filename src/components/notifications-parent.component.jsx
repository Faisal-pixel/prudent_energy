import { useState } from "react";
import {ReactComponent as NotificationSvg} from "../assets/notification.svg";
import { useEffect } from "react";
const NotificationsParentComponent = ({onClose, isNotificationParentOpen}) => {
    const [slideIn, setSlideIn] = useState(false);
    useEffect(() => {
        setSlideIn(true)
        console.log(slideIn)
    }, [slideIn])
    return <>
        <div className="fixed h-screen w-screen z-50">
            <div className="bg-black bg-opacity-50 absolute inset-0" onClick={onClose}></div>
            <div className="fixed h-full max-w-[27%] right-0 pt-16 pr-8 space-y-2 overflow-y-auto overflow-x-hidden">
                <div className={`bg-white pl-2 flex rounded transition ${slideIn ? "translate-x-0" : "translate-x-[150%]"}`}>
                    <div className="py-2">
                        <NotificationSvg className="pr-2"/>
                    </div>
                    <div className="pr-7 py-2 space-y-1">
                        <h3 className="font-bold">New RFQ!</h3>
                        <p className="text-greyDark">Mark John just created a new RFQ request</p>
                    </div>
                    <div className="relative py-2 pr-2 pl-2 border-l-[3px] border-gray-200">
                        <div className="text-primaryBlue w-max h-1/2 flex items-center">See Details</div>
                        <hr className="h-[3px] w-full absolute top-[50%] left-0 bg-gray-200"/>
                        <div className="text-greyDark h-1/2 flex justify-center items-center">Hide</div>
                    </div>
                </div>
                
            </div>
        </div>
    </>
}

export default NotificationsParentComponent;