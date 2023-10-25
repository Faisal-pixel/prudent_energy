import { useState } from "react";
import {ReactComponent as FilterIconSVG} from "../../../assets/filter-icon.svg"
import Greetings from "../../../components/greetings.component";
import { useSelector } from "react-redux";
import { selectBidderRequestForQuotesRecentBidsColumns, selectBidderRequestForQuotesRecentBidsData } from "../../../store/bidder/bidder-rfq-reducer/bidder-rfq.selector";
import GeneralTable from "../../../components/general-table.component";
import SearchInputComponent from "../../../components/search-input.component";

const BidderRFQ = () => {
    const [searchInput, setSearchInput] = useState("")
    const bidderRequestForQuotesRecentBidsColumns = useSelector(selectBidderRequestForQuotesRecentBidsColumns)
    const bidderRequestForQuotesRecentBidsData = useSelector(selectBidderRequestForQuotesRecentBidsData)
    const onSearchChange = (e) => {
        const searchInput = e.target.value;
        setSearchInput(searchInput);
    }
    const filteredBidderRequestForQuotesRecentBidsData = bidderRequestForQuotesRecentBidsData.filter((bid) => (
        bid.rfqNo.toLowerCase().includes(searchInput.toLowerCase()) || bid.description.toLowerCase().includes(searchInput.toLowerCase())  || bid.expDateAndTime.toLowerCase().includes(searchInput.toLowerCase()) || bid.status.toLowerCase().includes(searchInput.toLowerCase())
    ))
    
    return <>
        <div className="bg-secondaryBackground overflow-y-scroll h-full w-full space-y-5 px-6 pt-6">
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
                <GeneralTable columns={bidderRequestForQuotesRecentBidsColumns} filteredData={filteredBidderRequestForQuotesRecentBidsData} clickable={"details"}/>
            </div>
            
        </div>
    </>
}

export default BidderRFQ;