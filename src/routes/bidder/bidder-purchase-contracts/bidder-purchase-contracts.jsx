import { useCallback, useContext, useState } from "react";
import { BidderContext } from "../context/bidder.context";
import ReactTable from "../../../components/react-table.component";

import {ReactComponent as FilterIconSVG} from "../../../assets/filter-icon.svg";
import {ReactComponent as StatusCirclePendingSVG} from "../../../assets/status-small-circle-pending.svg"
import {ReactComponent as StatusCircleCompletedSVG} from "../../../assets/status-small-circle-completed.svg"
import SearchInputComponent from "../../../components/search-input.component";
import Greetings from "../../../components/greetings.component";
import { useNavigate } from "react-router-dom";
import { DataGrid } from "devextreme-react";
import { Column, HeaderFilter, SearchPanel, Sorting } from "devextreme-react/data-grid";


const BidderPurchaseContracts = () => {
    const [searchInput, setSearchInput] = useState("")
    const {bidderPurchaseContractsColumns, bidderPurchaseContractsData} = useContext(BidderContext)
    const onSearchChange = (e) => {
        const searchInput = e.target.value;
        setSearchInput(searchInput);
    }
    const filteredPurchaseContractsData = bidderPurchaseContractsData.filter((bid) => (
        bid.contractNo.toLowerCase().includes(searchInput.toLowerCase()) || bid.description.toLowerCase().includes(searchInput.toLowerCase())  || bid.contractDateAndTime.toLowerCase().includes(searchInput.toLowerCase())
    ))

    const navigate = useNavigate();
    const onRowPrepared = (e) => {
        if(e.rowType === 'data') {
            e.rowElement.classList.add("cursor-pointer");
        }
    }

    const handleRowClick = useCallback((row) => {
        const rowData = row.data;
        const values = row.values;
        console.log(values)
        navigate(`details/${values[0]}`, {state: {rowData}});
      }, [navigate]);
    
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
                {/* <ReactTable columns={bidderPurchaseContractsColumns} data={filteredPurchaseContractsData} goTo={"details"}/> */}

                <DataGrid id='dataGrid' dataSource={filteredPurchaseContractsData} keyExpr="id" onRowPrepared={onRowPrepared} onRowClick={handleRowClick}>
                    <Column dataField="contractNo" caption="Contract No" allowSorting cellRender={({ value }) => <div className="">{value}</div>} />
                    <Column dataField="description" caption="Description" allowSorting cellRender={({ value }) => <div className="">{value}</div>} />
                    <Column dataField="contractDateAndTime" caption="Contract Date & Time" allowSorting cellRender={({ value }) => <div className="">{value}</div>} />
                    {/* <SearchPanel visible /> */}
                    <Sorting mode='multiple' showSortIndexes/>
                    <HeaderFilter visible/>
                </DataGrid>
            </div>
        </div>
    </>
}

export default BidderPurchaseContracts;