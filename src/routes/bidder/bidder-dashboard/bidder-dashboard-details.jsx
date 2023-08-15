import { useLocation, useNavigate } from "react-router-dom";
import {ReactComponent as BreadCrumbRightNavigationSVG} from "../../../assets/bread-crumb-right-navigation.svg" 
import {ReactComponent as ToggleOpenIcon} from "../../../assets/toggle-point-up-open.svg" 

const BidderDashboardDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const bidData = location.state.row;
    console.log(bidData)
    const handleClick = () => {
        navigate(-1)
    }
    return <>
        <div className="container h-full overflow-y-auto px-5 pt-6 pb-5 flex flex-col space-y-5">
            {/* BreadCrumbsNavigation */}
            <div className="flex space-x-3 text-sm">
                <span onClick={handleClick} className="text-greyDark hover:cursor-pointer">Dashboard</span>
                <span className="self-center text-greyDark"><BreadCrumbRightNavigationSVG /></span>
                <span className="text-greyDark">Records</span>
                <span className="self-center text-greyDark"><BreadCrumbRightNavigationSVG /></span>
                <span className="text-primaryBlue">Requisition Details</span>

            </div>
            {/* Buttons */}
            <div className="space-x-3">
                <a href="#" className="px-7 py-1 border-2 border-primaryBlue rounded-md hover:text-white hover:bg-primaryBlue">Download RFQ</a>
                <a href="#" className="px-7 py-1 border-2 border-primaryBlue rounded-md hover:text-white hover:bg-primaryBlue">Submit Response</a>
            </div>
            {/* General Toggle */}
            <div className="border border-primaryBlue">
                {/* Header Div */}
                <header className="bg-primaryBlue flex justify-between items-center text-white py-2 px-3">
                    General
                    <ToggleOpenIcon />
                </header>
                <div className="container px-4 py-3 space-y-3">
                    <div className="flex space-x-7">
                        <div className="flex flex-col space-y-1">
                            <label>RFQ No:</label>
                            <input className="border border-greyDark rounded-md px-2 py-0.5" type="text"value={bidData.rfqNo} readOnly/>
                        </div>
                        <div className="flex flex-col space-y-1">
                            <label>Creation Date:</label>
                            <input className="border border-greyDark rounded-md px-2 py-0.5" type="text" value="05/03/2023" readOnly/>
                        </div>
                        <div>
                            <p className="text-primaryBlue"> Expiration Date & Time: {bidData.expDateAndTime}</p>
                            <p className="text-[#FF0000]">Expiration Countdown: 00:00:03 Hours</p>
                        </div>
                    </div>
                    <div className="flex space-x-4">
                        <div className="basis-1/3 space-y-2">
                            <label>Company Overview:</label>
                            <div className="border border-greyDark round-md h-28 rounded-md overflow-y-auto px-2 py-1"></div>
                        </div>
                        <div className="basis-1/3 space-y-2">
                            <label>Project Description:</label>
                            <div className="border border-greyDark round-md h-28 rounded-md overflow-y-auto px-2 py-1"></div>
                        </div>
                        <div className="basis-1/3 space-y-2">
                            <label>Scope of Work:</label>
                            <div className="border border-greyDark round-md h-28 rounded-md overflow-y-auto px-2 py-1"></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* RFQ response Toggle */}
            <div className="border border-primaryBlue">
                {/* Header Div */}
                <header className="bg-primaryBlue flex justify-between items-center text-white py-2 px-3">
                    RFQ Response
                    <ToggleOpenIcon />
                </header>
                <div className="container px-4 py-3 space-y-3">
                    <div className="flex space-x-7">
                        <div className="flex flex-col space-y-1">
                            <label>RFQ No:</label>
                            <input className="border border-greyDark rounded-md px-2 py-0.5" type="text" value={"1,200,000"} readOnly/>
                        </div>
                    </div>
                    <div className="">
                        <div className="space-y-2">
                            <label>Company Overview:</label>
                            <div className="border border-greyDark round-md h-28 rounded-md overflow-y-auto px-2 py-1"></div>
                        </div>
                    </div>
                    <div>
                        <input type="file" id="fileInput" className="hidden"/>
                        <label htmlFor="fileInput" className="px-2 py-1 border border-primaryBlue bg-primaryBlue text-white rounded-md hover:cursor-pointer hover:bg-white hover:text-primaryBlue">Upload supporting documents</label>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default BidderDashboardDetails