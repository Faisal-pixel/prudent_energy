import { useLocation, useNavigate } from "react-router-dom";
import {ReactComponent as BreadCrumbRightNavigationSVG} from "../../../assets/bread-crumb-right-navigation.svg";
import BidderGeneralTemplateComponent from "../../../components/bidder-general-template.component";
import BidderRfqResponseComponent from "../../../components/bidder-rfq-response.component";

const BidderDashboardDetails = () => {
    // const location = useLocation();
    const navigate = useNavigate();
    // const bidData = location.state.row;
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
            <BidderGeneralTemplateComponent />
            {/* RFQ response Toggle */}
            <BidderRfqResponseComponent />
        </div>
    </>
}

export default BidderDashboardDetails