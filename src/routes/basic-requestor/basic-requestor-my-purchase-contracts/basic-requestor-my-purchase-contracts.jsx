import { useContext, useState } from "react";
import ReactTable from "../../../components/react-table.component";

import {ReactComponent as FilterIconSVG} from "../../../assets/filter-icon.svg"
import SearchInputComponent from "../../../components/search-input.component";
import { BasicRequestorContext } from "../context/basic-requestor-context";
import Greetings from "../../../components/greetings.component";


const BasicRequestorMyPurchaseContracts = () => {
    const [searchInput, setSearchInput] = useState("")
    const {basicRequestorPurchaseContractsColumns, basicRequestorPurchaseContractsData} = useContext(BasicRequestorContext)
    const onSearchChange = (e) => {
        const searchInput = e.target.value;
        setSearchInput(searchInput);
    }
    const filteredPurchaseContractsData = basicRequestorPurchaseContractsData.filter((bid) => (
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
                <ReactTable columns={basicRequestorPurchaseContractsColumns} data={filteredPurchaseContractsData} goTo={"details"}/>
            </div>
        </div>
    </>
}

export default BasicRequestorMyPurchaseContracts;