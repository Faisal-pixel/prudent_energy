import { useState } from "react";

import {ReactComponent as FilterIconSVG} from "../../../assets/filter-icon.svg";
import SearchInputComponent from "../../../components/search-input.component";
import Greetings from "../../../components/greetings.component";
import { useSelector } from "react-redux";
import { selectBidderPurchaseContractsData } from "../../../store/bidder/bidder-purchase-contracts/bidder-purchase-contracts.selector";
import PurchaseContractsTables from "../../../components/purchase-contracts-table";


const BidderPurchaseContracts = () => {
    const [searchInput, setSearchInput] = useState("")
    const bidderPurchaseContractsData = useSelector(selectBidderPurchaseContractsData)
    const onSearchChange = (e) => {
        const searchInput = e.target.value;
        setSearchInput(searchInput);
    }
    const filteredPurchaseContractsData = bidderPurchaseContractsData.filter((bid) => (
        bid.contractNo.toLowerCase().includes(searchInput.toLowerCase()) || bid.description.toLowerCase().includes(searchInput.toLowerCase())  || bid.contractDateAndTime.toLowerCase().includes(searchInput.toLowerCase())
    ))
    
    return <>
        <div className="bg-secondaryBackground space-y-5 px-6 pt-6">
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
                {/* <ReactTable columns={bidderPurchaseContractsColumns} data={filteredPurchaseContractsData} goTo={"details"}/> */}

                <PurchaseContractsTables filteredData={filteredPurchaseContractsData}/>
            </div>
        </div>
    </>
}

export default BidderPurchaseContracts;