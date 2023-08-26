import { useNavigate } from "react-router-dom"
import {ReactComponent as BreadCrumbRightNavigationSVG} from "../../../assets/bread-crumb-right-navigation.svg"
import GeneralTemplate from "../../../components/GeneralTemplateComponent";
import LegalTemplateDataSheet from "../../../components/LegalTemplateDatasheet.component";
import ESGTemplateDataSheet from "../../../components/ESGTemplateDatasheet.component";
import TechnicalTemplateDataSheet from "../../../components/technical-template-datasheet.component";
const FinanceAdminRequestForQuotesOtherRequisitionsDetails = () => {
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
                <span className="text-greyDark">Other Requisitions</span>
                <span className="self-center text-greyDark"><BreadCrumbRightNavigationSVG /></span>
                <span className="text-primaryBlue">Requisition Details</span>
            </div>

            {/* Buttons */}
            <div className="space-x-3">
                <button type="button" className="px-7 py-1 border-2 border-primaryBlue rounded-md hover:text-white hover:bg-primaryBlue">Reopen</button>
                <button type="button" className="px-7 py-1 border-2 border-primaryBlue rounded-md hover:text-white hover:bg-primaryBlue">Close</button>
            </div>
            {/* General Toggle */}
            <GeneralTemplate />
            <LegalTemplateDataSheet />
            <ESGTemplateDataSheet />
            <TechnicalTemplateDataSheet />
        </div>
    </>
}

export default FinanceAdminRequestForQuotesOtherRequisitionsDetails;