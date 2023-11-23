import React, { useState } from 'react';
import {ReactComponent as FilterIconSVG} from "../assets/filter-icon.svg"
import SearchInputComponent from "./search-input.component";
import Greetings from "./greetings.component";
import PurchaseContractsTables from './purchase-contracts-table';
import GeneralTable from './general-table.component';

const PurchaseContractTemplateComponent = ({incomingData, usingApi, incomingColumn}) => {
    const [searchInput, setSearchInput] = useState("")
    const onSearchChange = (e) => {
        const searchInput = e.target.value;
        setSearchInput(searchInput);
    }
    const filteredPurchaseContractsData = incomingData.filter((bid) => (
        usingApi ? bid.id.toLowerCase().includes(searchInput.toLowerCase()) || bid.description.toLowerCase().includes(searchInput.toLowerCase())  || bid.creationDateTime.toLowerCase().includes(searchInput.toLowerCase()) : bid.contractNo.toLowerCase().includes(searchInput.toLowerCase()) || bid.description.toLowerCase().includes(searchInput.toLowerCase())  || bid.contractDateAndTime.toLowerCase().includes(searchInput.toLowerCase())
    ))
    console.log(filteredPurchaseContractsData)
  return (
    <div className="container bg-secondaryBackground space-y-5 px-6 pt-6">
            <div className="">
                <Greetings />
            </div>

            <div className="bg-white px-3 py-4">
                <div className="mb-3 flex flex-col space-y-5 items-center shrink md:items-start md:space-y-0 md:justify-between md:flex-row">
                    <p className="text-primaryBlue font-bold text-xl">
                        Purchase Contracts
                    </p>
                    <div className="flex space-x-6 w-full md:w-fit">
                        <SearchInputComponent searchInput={searchInput} onSearchChange={onSearchChange}/>
                        <FilterIconSVG />
                    </div>
                </div>
                {
                    usingApi ? <GeneralTable filteredData={filteredPurchaseContractsData} columns={incomingColumn}/> : <PurchaseContractsTables filteredData={filteredPurchaseContractsData}/>
                }
            </div>
        </div>
  )
}

export default PurchaseContractTemplateComponent;