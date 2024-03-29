import { useContext, useState } from "react";
import { BidderContext } from "../context/bidder.context";
import ReactTable from "../../../components/react-table.component";

import {ReactComponent as FilterIconSVG} from "../../../assets/filter-icon.svg"
import Greetings from "../../../components/greetings.component";

const BidderRFQ = () => {
    const [searchInput, setSearchInput] = useState("")
    const {bidderRequestForQuotesRecentBidsColumns, bidderRequestForQuotesRecentBidsData} = useContext(BidderContext)
    const onSearchChange = (e) => {
        const searchInput = e.target.value;
        setSearchInput(searchInput);
    }
    const filteredBidderRequestForQuotesRecentBidsData = bidderRequestForQuotesRecentBidsData.filter((bid) => (
        bid.rfqNo.toLowerCase().includes(searchInput.toLowerCase()) || bid.description.toLowerCase().includes(searchInput.toLowerCase())  || bid.expDateAndTime.toLowerCase().includes(searchInput.toLowerCase()) || bid.status.toLowerCase().includes(searchInput.toLowerCase())
    ))
    
    return <>
        <div className="container bg-secondaryBackground overflow-y-scroll space-y-5 px-6 pt-6">
            <div className="">
                <Greetings />
            </div>

            <div className="bg-white px-3 py-4">
                <div className="mb-3 flex justify-between">
                    <p className="text-primaryBlue font-bold text-xl">
                        My Recent Bids
                    </p>
                    <div className="flex space-x-6">
                        <input placeholder="Search" onChange={onSearchChange} value={searchInput} type="search" className="border rounded-md w-[350px] border-greyDark px-2 py-0.5 focus:outline-none"/>
                        <FilterIconSVG />
                    </div>
                </div>
                <ReactTable columns={bidderRequestForQuotesRecentBidsColumns} data={filteredBidderRequestForQuotesRecentBidsData} goTo={"details"}/>
            </div>
            
        </div>
    </>
}

export default BidderRFQ;