import { useContext, useState } from "react";
import ReactTable from "../../../components/react-table.component";

import {ReactComponent as FilterIconSVG} from "../../../assets/filter-icon.svg"
import SearchInputComponent from "../../../components/search-input.component";
import Greetings from "../../../components/greetings.component";
import { useSelector } from "react-redux";
import { selectItAdminPurchaseContractsColumn, selectItAdminPurchaseContractsData } from "../../../store/it-admin/it-admin-purchase-contracts/it-admin-purchase-contracts.selector";
import GeneralTable from "../../../components/general-table.component";



const ITAdminMyPurchaseContracts = () => {
    const [searchInput, setSearchInput] = useState("")
    const itAdminPurchaseContractsColumns = useSelector(selectItAdminPurchaseContractsColumn);
    const itAdminPurchaseContractsData = useSelector(selectItAdminPurchaseContractsData)
    const onSearchChange = (e) => {
        const searchInput = e.target.value;
        setSearchInput(searchInput);
    }
    const filteredPurchaseContractsData = itAdminPurchaseContractsData.filter((bid) => (
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
                <GeneralTable columns={itAdminPurchaseContractsColumns} filteredData={filteredPurchaseContractsData} clickable={"details"}/>
            </div>
        </div>
    </>
}

export default ITAdminMyPurchaseContracts;