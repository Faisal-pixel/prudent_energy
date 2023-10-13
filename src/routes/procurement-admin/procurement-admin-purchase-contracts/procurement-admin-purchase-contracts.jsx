import { useState } from "react";
import {ReactComponent as FilterIconSVG} from "../../../assets/filter-icon.svg"
import SearchInputComponent from "../../../components/search-input.component";
import Greetings from "../../../components/greetings.component";
import { useSelector } from "react-redux";
import { selectProcurementAdminPurchaseContractsColumn, selectProcurementAdminPurchaseContractsData } from "../../../store/procurement-admin/procurement-admin-purchase-contracts/procurement-admin-purchase-contracts.selector";
import GeneralTable from "../../../components/general-table.component";


const ProcurementAdminMyPurchaseContracts = () => {
    const [searchInput, setSearchInput] = useState("")
    const procurementAdminPurchaseContractsColumns = useSelector(selectProcurementAdminPurchaseContractsColumn)
    const procurementAdminPurchaseContractsData = useSelector(selectProcurementAdminPurchaseContractsData)
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
                <GeneralTable columns={procurementAdminPurchaseContractsColumns} filteredData={filteredPurchaseContractsData} clickable={"details"}/>
            </div>
        </div>
    </>
}

export default ProcurementAdminMyPurchaseContracts;