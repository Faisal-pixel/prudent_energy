import { useContext, useState } from "react";
import Greetings from "../../../components/greetings.component";
import SearchInputComponent from "../../../components/search-input.component";
import {ReactComponent as FilterIconSVG} from "../../../assets/filter-icon.svg"

import { ITAdminContext} from "../context/it-admin.context";
import ReactTable from "../../../components/react-table.component";
import { ComponentContext } from "../../../components/component-context";
import CreateNewBidderForm from "../../../components/create-new-bidder-form.component";


const ITAdminBidders = () => {
    const {itAdminBiddersColumn, itAdminBiddersData} = useContext(ITAdminContext)
    const {setCreateNewBidderModalIsOpen} = useContext(ComponentContext)

    const [searchInput, setSearchInput] = useState("")    

    const onSearchChange = (e) => {
        const searchInput = e.target.value;
        setSearchInput(searchInput);
    }

    const filteredBiddersData = itAdminBiddersData.filter((data) => (
        data.bidderNumber.toLowerCase().includes(searchInput.toLowerCase()) || data.companyName.toLowerCase().includes(searchInput.toLowerCase())  || data.companyEmail.toLowerCase().includes(searchInput.toLowerCase()) || data.companyPhoneNumber.toLowerCase().includes(searchInput.toLowerCase()) || data.companyAddress.toLowerCase().includes(searchInput.toLowerCase())
    ))
    return <>
        <CreateNewBidderForm />
        <div className="container bg-secondaryBackground overflow-y-scroll space-y-5 px-6 pt-6">
            <div className="flex justify-between">
                <Greetings />
            </div>

            <div className="bg-white px-3 py-4">
                <div className="flex justify-between">
                    <div className="space-x-3">
                        <button className="bg-white border border-primaryBlue px-2 py-1 text-primaryBlue rounded hover:text-white hover:bg-primaryBlue"> Upload Prequalified Bidders </button>
                        <button className="bg-primaryBlue border border-primaryBlue px-7 py-1 text-white rounded hover:text-primaryBlue hover:bg-white" onClick={setCreateNewBidderModalIsOpen}> Create New Bidder </button>
                    </div>
                    <div className="flex space-x-6">
                        <SearchInputComponent searchInput={searchInput} onSearchChange={onSearchChange}/>
                        <FilterIconSVG />
                    </div>
                </div>
                <ReactTable columns={itAdminBiddersColumn} data={filteredBiddersData}/>
            </div>
            
        </div>
    </>
}

export default ITAdminBidders;