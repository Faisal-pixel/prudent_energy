import { useContext, useState, } from "react";
import Greetings from "../../../components/greetings.component";
import ReactTable from "../../../components/react-table.component";
import UnderlinedNav from "../../../components/underlined-nav.component";
import { ProcurementAdminContext } from "../context/procurement-admin.context";

import SearchInputComponent from "../../../components/search-input.component";
import {ReactComponent as FilterIconSVG} from "../../../assets/filter-icon.svg";
const ProcurementAdminRequestForQuotesOtherRequisitions = () => {
    const {procurementAdminRequestForQuotesUnderlinedNavigations, procurementAdminRequestForQuotesOtherRequisitionsData, procurementAdminRequisitionsColumns} = useContext(ProcurementAdminContext);
    const [searchInput, setSearchInput] = useState("")    

    const onSearchChange = (e) => {
        const searchInput = e.target.value;
        setSearchInput(searchInput);
    }

    const filteredOtherRequisitionsData = procurementAdminRequestForQuotesOtherRequisitionsData.filter((data) => (
        data.rfqNo.toLowerCase().includes(searchInput.toLowerCase()) || data.description.toLowerCase().includes(searchInput.toLowerCase())  || data.expDateAndTime.toLowerCase().includes(searchInput.toLowerCase()) || data.status.toLowerCase().includes(searchInput.toLowerCase()) 
    ))
    return <>
        <div className="container bg-secondaryBackground overflow-y-scroll space-y-5 px-6 pt-6">
            <div className="flex justify-between">
                <Greetings />
            </div>
            {console.log(procurementAdminRequestForQuotesUnderlinedNavigations)}
            <UnderlinedNav navigationElements={procurementAdminRequestForQuotesUnderlinedNavigations} />

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
                <ReactTable columns={procurementAdminRequisitionsColumns} data={filteredOtherRequisitionsData} goTo={"details"}/>
            </div>
            
        </div>
        
    </>
}

export default ProcurementAdminRequestForQuotesOtherRequisitions;