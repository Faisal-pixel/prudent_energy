import { useState } from "react";
import Greetings from "../../../components/greetings.component";
import UnderlinedNav from "../../../components/underlined-nav.component";
import SearchInputComponent from "../../../components/search-input.component";
import {ReactComponent as FilterIconSVG} from "../../../assets/filter-icon.svg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectManagementMyRequisitionsData, selectManagementRequisitionsColumns, selectManagementRfqUnderlinedNavigations } from "../../../store/management/management-rfq/management-rfq.selector";
import GeneralTable from "../../../components/general-table.component";

const ManagementRequestForQuotes = () => {
    const managementRequestForQuotesUnderlinedNavigations = useSelector(selectManagementRfqUnderlinedNavigations);
    const managementRequisitionsColumns = useSelector(selectManagementRequisitionsColumns);
    const managementRequestForQuotesMyRequisitionsData = useSelector(selectManagementMyRequisitionsData);
    const navigate = useNavigate();
    const [searchInput, setSearchInput] = useState("");

    const onSearchChange = (e) => {
        const searchInput = e.target.value;
        setSearchInput(searchInput);
    }

    const filteredMyRequisitionsData = managementRequestForQuotesMyRequisitionsData.filter((data) => (
        data.rfqNo.toLowerCase().includes(searchInput.toLowerCase()) || data.description.toLowerCase().includes(searchInput.toLowerCase())  || data.expDateAndTime.toLowerCase().includes(searchInput.toLowerCase()) || data.status.toLowerCase().includes(searchInput.toLowerCase()) 
    ))

    const handleButtonClick = () => {
        navigate("create-new-rfq")
    }
    return <>
        <div className="container bg-secondaryBackground overflow-y-scroll space-y-5 px-6 pt-6">
            <div className="flex justify-between">
                <Greetings />
            </div>

            <UnderlinedNav navigationElements={managementRequestForQuotesUnderlinedNavigations} includeButton={"Create New RFQ"} handleButtonClick={handleButtonClick} />

            <div className="bg-white px-3 py-4">
                <div className="flex justify-between">
                    <p className="text-primaryBlue font-bold text-xl">
                        My Requisitions
                    </p>
                    <div className="flex space-x-6">
                        <SearchInputComponent searchInput={searchInput} onSearchChange={onSearchChange}/>
                        <FilterIconSVG />
                    </div>
                </div>
                <GeneralTable columns={managementRequisitionsColumns} filteredData={filteredMyRequisitionsData} clickable={"my-requisitions/details"}/>
            </div>
            
        </div>
        
    </>
}

export default ManagementRequestForQuotes;