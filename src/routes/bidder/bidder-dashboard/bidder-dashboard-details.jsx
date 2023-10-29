import { Link, useLocation, useNavigate } from "react-router-dom";
import {ReactComponent as BreadCrumbRightNavigationSVG} from "../../../assets/bread-crumb-right-navigation.svg";
import BidderGeneralTemplateComponent from "../../../components/bidder-general-template.component";
import BidderRfqResponseComponent from "../../../components/bidder-rfq-response.component";
import SubmitPopUpModalComponent from "../../../components/submit-pop-up-modal.component";
import { useState } from "react";

const BidderDashboardDetails = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    // const location = useLocation();
    const navigate = useNavigate();
    // const bidData = location.state.row;
    const handleClick = () => {
        navigate(-1)
    }
    const toggleSubmitResponseModal = () => {
        setIsModalOpen(!isModalOpen);
    }
    return <>
        <SubmitPopUpModalComponent isOpen={isModalOpen} toggleSubmitResponseModal={toggleSubmitResponseModal} />
        <div className="h-full overflow-y-auto px-5 pt-6 pb-5 flex flex-col space-y-5">
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
                <Link href="#" className="px-7 py-1 border-2 border-primaryBlue rounded-md hover:text-white hover:bg-primaryBlue">Download RFQ</Link>
                <button href="#" className="px-7 py-1 border-2 border-primaryBlue rounded-md hover:text-white hover:bg-primaryBlue" onClick={toggleSubmitResponseModal}>Submit Response</button>
            </div>
            <div className="space-y-5">
                {/* General Toggle */}
            <BidderGeneralTemplateComponent />
            {/* RFQ response Toggle */}
            <BidderRfqResponseComponent />
            </div>
        </div>
    </>
}

export default BidderDashboardDetails