import {ReactComponent as NotificationSvg} from "../assets/notification.svg";
const NotificationsParentComponent = ({onClose}) => {
    return <>
        <div className="fixed h-screen w-screen">
            <div className="bg-black bg-opacity-50 absolute inset-0" onClick={onClose}></div>
            <div className="fixed h-full max-w-[27%] right-0 pt-20">
                <div className="bg-white px-2 py-1 flex">
                    <div>
                        <NotificationSvg />
                    </div>
                    <div className="pr-7">
                        <h3 className="font-bold">New RFQ!</h3>
                        <p className="text-greyDark">Mark John just created a new RFQ request</p>
                    </div>
                    <div>
                        <div className="text-primaryBlue">See Details</div>
                        <div className="text-greyDark">Hide</div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default NotificationsParentComponent;