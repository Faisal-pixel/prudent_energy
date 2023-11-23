import { useContext, useEffect, useState } from "react";
import Greetings from "../../../components/greetings.component";
import SearchInputComponent from "../../../components/search-input.component";
import {ReactComponent as FilterIconSVG} from "../../../assets/filter-icon.svg"
import { ComponentContext } from "../../../components/component-context";
import CreateNewBidderForm from "../../../components/create-new-bidder-form.component";
import { selectProcurementAdminBiddersColumn, selectProcurementAdminBiddersData, selectProcurementAdminBiddersStatus } from "../../../store/procurement-admin/procurement-admin-bidders/procurement-admin-bidders.selector";
import { useDispatch, useSelector } from "react-redux";
import GeneralTable from "../../../components/general-table.component";
import { fetchProcurementAdminBidders } from "../../../store/procurement-admin/procurement-admin-bidders/procurement_admin_bidders.thunk_actions";


const ProcurementAdminBidders = () => {
    const dispatch = useDispatch()
    const procurementAdminBiddersColumn = useSelector(selectProcurementAdminBiddersColumn)
    const procurementAdminBiddersData = useSelector(selectProcurementAdminBiddersData)
    const procurementAdminBiddersStatus = useSelector(selectProcurementAdminBiddersStatus)
    const {setCreateNewBidderModalIsOpen} = useContext(ComponentContext)

    useEffect(() => {
        if(procurementAdminBiddersStatus === "idle") {
            dispatch(fetchProcurementAdminBidders())
        } else if (procurementAdminBiddersStatus === "failed") {
            console.log("failed to fetch procurement admin bidders " + procurementAdminBiddersStatus.error)
        }
    }, [procurementAdminBiddersStatus, dispatch])

    const [searchInput, setSearchInput] = useState("")    

    const onSearchChange = (e) => {
        const searchInput = e.target.value;
        setSearchInput(searchInput);
    }

    const filteredBiddersData = procurementAdminBiddersData.filter((data) => (
        data.id.toLowerCase().includes(searchInput.toLowerCase()) || data.bidderName.toLowerCase().includes(searchInput.toLowerCase())  || data.primaryEmailAddress.toLowerCase().includes(searchInput.toLowerCase()) || data.primaryContactNumber.toLowerCase().includes(searchInput.toLowerCase()) || data.address.toLowerCase().includes(searchInput.toLowerCase())
    ))
    return <>
        <CreateNewBidderForm />
        <div className="bg-secondaryBackground overflow-y-scroll space-y-5 px-6 pt-6">
            <div className="flex justify-between">
                <Greetings />
            </div>

            <div className="bg-white px-3 py-4">
                <div className="flex flex-col justify-between gap-y-4 mb-4 lg:flex-row">
                    <div className="flex flex-col gap-x-3 gap-y-4 order-2 sm:flex-row lg:order-1">
                        <button className="bg-white border border-primaryBlue px-2 py-1 text-primaryBlue rounded hover:text-white hover:bg-primaryBlue"> Upload Prequalified Bidders </button>
                        <button className="bg-primaryBlue border border-primaryBlue px-7 py-1 text-white rounded hover:text-primaryBlue hover:bg-white" onClick={setCreateNewBidderModalIsOpen}> Create New Bidder </button>
                    </div>
                    <div className="flex space-x-6 order-1 lg:order-2">
                        <SearchInputComponent searchInput={searchInput} onSearchChange={onSearchChange}/>
                        <FilterIconSVG />
                    </div>
                </div>
                <GeneralTable columns={procurementAdminBiddersColumn} filteredData={filteredBiddersData}/>
            </div>
            
        </div>
    </>
}

export default ProcurementAdminBidders;