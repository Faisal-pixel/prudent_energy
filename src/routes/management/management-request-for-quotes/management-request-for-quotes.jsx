import { useContext, useState, } from "react";
import Greetings from "../../../components/greetings.component";
import ReactTable from "../../../components/react-table.component";
import UnderlinedNav from "../../../components/underlined-nav.component";
import SearchInputComponent from "../../../components/search-input.component";
import {ReactComponent as FilterIconSVG} from "../../../assets/filter-icon.svg";
import { useNavigate } from "react-router-dom";
import { ManagementContext } from "../context/management.context";

const ManagementRequestForQuotes = () => {
    const {managementRequestForQuotesUnderlinedNavigations, managementRequestForQuotesMyRequisitionsData, managementRequisitionsColumns} = useContext(ManagementContext);
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
                <ReactTable columns={managementRequisitionsColumns} data={filteredMyRequisitionsData} goTo={"my-requisitions/details"}/>
            </div>
            
        </div>
        
    </>
}

export default ManagementRequestForQuotes;