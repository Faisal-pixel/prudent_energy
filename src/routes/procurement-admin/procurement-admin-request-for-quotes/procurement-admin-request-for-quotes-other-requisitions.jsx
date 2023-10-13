import { useState } from "react";
import Greetings from "../../../components/greetings.component";
import UnderlinedNav from "../../../components/underlined-nav.component";
import SearchInputComponent from "../../../components/search-input.component";
import {ReactComponent as FilterIconSVG} from "../../../assets/filter-icon.svg";
import { useSelector } from "react-redux";
import { selectProcurementAdminRequestForQuotesOtherRequisitionsData, selectProcurementAdminRequisitionsColumns, selectProcurementAdminRfqUnderlinedNavigations } from "../../../store/procurement-admin/procurement-admin-rfq/procurement-admin-rfq.selector";
import GeneralTable from "../../../components/general-table.component";
const ProcurementAdminRequestForQuotesOtherRequisitions = () => {
    const procurementAdminRequestForQuotesUnderlinedNavigations = useSelector(selectProcurementAdminRfqUnderlinedNavigations)
    const procurementAdminRequisitionsColumns = useSelector(selectProcurementAdminRequisitionsColumns);
    const procurementAdminRequestForQuotesOtherRequisitionsData = useSelector(selectProcurementAdminRequestForQuotesOtherRequisitionsData);
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
                <GeneralTable columns={procurementAdminRequisitionsColumns} filteredData={filteredOtherRequisitionsData} clickable={"details"}/>
            </div>
            
        </div>
        
    </>
}

export default ProcurementAdminRequestForQuotesOtherRequisitions;