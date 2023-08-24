import { useContext, useState } from "react";
import ReactTable from "../../../components/react-table.component";

import {ReactComponent as FilterIconSVG} from "../../../assets/filter-icon.svg"
import SearchInputComponent from "../../../components/search-input.component";
import Greetings from "../../../components/greetings.component";
import { ProcurementAdminContext } from "../context/it-admin.context";


const ProcurementAdminMyPurchaseContracts = () => {
    const [searchInput, setSearchInput] = useState("")
    const {procurementAdminPurchaseContractsColumns, procurementAdminPurchaseContractsData} = useContext(ProcurementAdminContext)
    const onSearchChange = (e) => {
        const searchInput = e.target.value;
        setSearchInput(searchInput);
    }
    const filteredPurchaseContractsData = procurementAdminPurchaseContractsData.filter((bid) => (
        bid.contractNo.toLowerCase().includes(searchInput.toLowerCase()) || bid.description.toLowerCase().includes(searchInput.toLowerCase())  || bid.contractDateAndTime.toLowerCase().includes(searchInput.toLowerCase())
    ))
    
    return <>
        <div className="container bg-secondaryBackground space-y-5 px-6 pt-6">
            <div className="">
                <Greetings />
            </div>

            <div className="bg-white px-3 py-4">
                <div className="mb-3 flex justify-between">
                    <p className="text-primaryBlue font-bold text-xl">
                        Purchase Contracts
                    </p>
                    <div className="flex space-x-6">
                        <SearchInputComponent searchInput={searchInput} onSearchChange={onSearchChange}/>
                        <FilterIconSVG />
                    </div>
                </div>
                <ReactTable columns={procurementAdminPurchaseContractsColumns} data={filteredPurchaseContractsData} goTo={"details"}/>
            </div>
        </div>
    </>
}

export default ProcurementAdminMyPurchaseContracts;