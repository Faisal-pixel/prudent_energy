import { useNavigate } from "react-router-dom";
import {ReactComponent as BreadCrumbRightNavigationSVG} from "../../../assets/bread-crumb-right-navigation.svg" 
import GeneralTemplate from "../../../components/GeneralTemplateComponent";
import DetailsTemplate from "../../../components/details-template.component";

const BasicRequestorMyRecentRequisitionsDetails = () => {
    const navigate = useNavigate();
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
                <button type="button" className="px-7 py-1 border-2 border-primaryBlue rounded-md hover:text-white hover:bg-primaryBlue">Save</button>
                <button type="button" className="px-7 py-1 border-2 border-primaryBlue rounded-md hover:text-white hover:bg-primaryBlue">Delete</button>
            </div>
            <div className="space-y-5">
                {/* General Toggle */}
                <GeneralTemplate />
                {/* Legal Template Datasheet */}
                <DetailsTemplate />
            </div>
        </div>
    </>
}

export default BasicRequestorMyRecentRequisitionsDetails;