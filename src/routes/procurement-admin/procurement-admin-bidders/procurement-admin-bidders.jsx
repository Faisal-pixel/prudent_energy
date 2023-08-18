import { useContext, useState } from "react";
import Greetings from "../../../components/greetings.component";
import SearchInputComponent from "../../../components/search-input.component";
import {ReactComponent as FilterIconSVG} from "../../../assets/filter-icon.svg"
import {ReactComponent as XButtonSVG} from "../../../assets/x-button-icon.svg"
import { ProcurementAdminContext } from "../context/procurement-admin.context";
import ReactTable from "../../../components/react-table.component";
import Modal from "../../../components/modal";

const ProcurementAdminBidders = () => {
    const {procurementAdminBiddersColumn, procurementAdminBiddersData} = useContext(ProcurementAdminContext)
    const [createNewBidderFormValues, setCreateNewBidderFormValues] = useState({
        general: {
            bidderNumber: "",
            name: "",
            lastDateModified: "",
            status: ""
        },
        addressAndContact: {
            address1: "",
            address2: "",
            city: "",
            contactPersonName: "",
            phoneNumber: "",
            email: "",
        },
        payment: {
            tinNumber: "",
            paymentTermCode: "",
        },
        serviceCategories: {
            serviceClass: "",
            insurance: false,
            freight: false,
            agency: false,
            storage: false
        }

    });

    const [createNewBidderModalIsOpen, setCreateNewBidderModalIsOpen] = useState(false);
    const [searchInput, setSearchInput] = useState("")


    const handleCreateNewBidderModal = () => {
        setCreateNewBidderModalIsOpen(!createNewBidderModalIsOpen);
    }
    
    const handleOnChange = (e, section) => {
        const {name, value} = e.target;
        setCreateNewBidderFormValues((prevState) => (
            {...prevState, [section]: {...prevState[section], [name]: value}}
        ))
    }
    console.log(createNewBidderFormValues)

    const onSearchChange = (e) => {
        const searchInput = e.target.value;
        setSearchInput(searchInput);
    }
    return <>
        <Modal isOpen={createNewBidderModalIsOpen} onClose={handleCreateNewBidderModal} noPadding>
            <form className="p-3 w-[690px] space-y-2">
                <h2 className="font-bold text-xl flex">Bidder Details <XButtonSVG className="inline ml-auto cursor-pointer self-center" onClick={handleCreateNewBidderModal}/></h2>
                <div className="border border-[#E8E8E8] rounded">
                    <h3 className="px-3 py-2 bg-[#E8E8E8] font-bold text-lg">General</h3>
                    <div className="px-3 py-2">
                        <div className="flex space-x-4">
                            <div className="space-y-1 flex flex-col basis-1/2">
                                <label>Bidder Number</label>
                                <input type="text" name="bidderNumber" onChange={(e) => handleOnChange(e, "general")} placeholder="Bidder Number" className="border border-grey[#E8E8E8] rounded-md px-2 py-1 placeholder:text-greyDark"/>
                            </div>
                            <div className="space-y-1 flex flex-col basis-1/2">
                                <label>Name</label>
                                <input type="text" name="name" onChange={(e) => handleOnChange(e, "general")} placeholder="Bidder Number" className="border border-grey[#E8E8E8] rounded-md px-2 py-1 placeholder:text-greyDark"/>
                            </div>
                        </div>
                        <div className="flex space-x-4">
                            <div className="space-y-1 flex flex-col basis-1/2">
                                <label>Last Date modified</label>
                                <input type="date" name="lastDateModified" onChange={(e) => handleOnChange(e, "general")} placeholder="Date" className="border border-grey[#E8E8E8] rounded-md px-2 py-1 placeholder:text-greyDark"/>
                            </div>
                            <div className="space-y-1 flex flex-col basis-1/2">
                                <label>Status</label>
                                <input type="text" placeholder="Status" name="status" onChange={(e) => handleOnChange(e, "general")} className="border border-grey[#E8E8E8] rounded-md px-2 py-1 placeholder:text-greyDark"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border border-[#E8E8E8] rounded">
                    <h3 className="px-3 py-2 bg-[#E8E8E8] font-bold text-lg">Address & Contact</h3>
                    <div className="px-3 py-2">
                        <div className="flex space-x-4">
                            <div className="space-y-1 flex flex-col basis-1/2">
                                <label>Address 1</label>
                                <input type="text" name="address1" onChange={(e) => handleOnChange(e, "addressAndContact")} placeholder="Address 1" className="border border-grey[#E8E8E8] rounded-md px-2 py-1 placeholder:text-greyDark"/>
                            </div>
                            <div className="space-y-1 flex flex-col basis-1/2">
                                <label>Address 2</label>
                                <input type="text" name="address2" onChange={(e) => handleOnChange(e, "addressAndContact")} placeholder="Address 2" className="border border-grey[#E8E8E8] rounded-md px-2 py-1 placeholder:text-greyDark"/>
                            </div>
                        </div>
                        <div className="flex space-x-4">
                            <div className="space-y-1 flex flex-col basis-1/2">
                                <label>City</label>
                                <input type="text" name="city" onChange={(e) => handleOnChange(e, "addressAndContact")} placeholder="City" className="border border-grey[#E8E8E8] rounded-md px-2 py-1 placeholder:text-greyDark"/>
                            </div>
                            <div className="space-y-1 flex flex-col basis-1/2">
                                <label>Contact Person Name</label>
                                <input type="text" name="contactPersonName" onChange={(e) => handleOnChange(e, "addressAndContact")} placeholder="Contact Person Name" className="border border-grey[#E8E8E8] rounded-md px-2 py-1 placeholder:text-greyDark"/>
                            </div>
                        </div>
                        <div className="flex space-x-4">
                            <div className="space-y-1 flex flex-col basis-1/2">
                                <label>Phone Number</label>
                                <input type="tel" name="phoneNumber" onChange={(e) => handleOnChange(e, "addressAndContact")} placeholder="Phone Number" className="border border-grey[#E8E8E8] rounded-md px-2 py-1 placeholder:text-greyDark"/>
                            </div>
                            <div className="space-y-1 flex flex-col basis-1/2">
                                <label>Email</label>
                                <input type="email" name="email" onChange={(e) => handleOnChange(e, "addressAndContact")} placeholder="Email" className="border border-grey[#E8E8E8] rounded-md px-2 py-1 placeholder:text-greyDark"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border border-[#E8E8E8] rounded">
                    <h3 className="px-3 py-2 bg-[#E8E8E8] font-bold text-lg">Payment</h3>
                    <div className="px-3 py-2">
                        <div className="flex space-x-4">
                            <div className="space-y-1 flex flex-col basis-1/2">
                                <label>TIN Number</label>
                                <input type="text" name="tinNumber" onChange={(e) => handleOnChange(e, "payment")} placeholder="Enter TIN Number" className="border border-grey[#E8E8E8] rounded-md px-2 py-1 placeholder:text-greyDark"/>
                            </div>
                            <div className="space-y-1 flex flex-col basis-1/2">
                                <label>Payment Term Code</label>
                                <select type="select" defaultValue="select" name="paymentTermCode" onChange={(e) => handleOnChange(e, "payment")}  className="border border-grey[#E8E8E8] rounded-md px-2 py-1 placeholder:text-greyDark">
                                    <option value="select" disabled>Select</option>
                                    <option></option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </Modal>
        <div className="container bg-secondaryBackground overflow-y-scroll space-y-5 px-6 pt-6">
            <div className="flex justify-between">
                <Greetings />
            </div>

            <div className="bg-white px-3 py-4">
                <div className="flex justify-between">
                    <div className="space-x-3">
                        <button className="bg-white border border-primaryBlue px-2 py-1 text-primaryBlue rounded hover:text-white hover:bg-primaryBlue"> Upload Prequalified Bidders </button>
                        <button className="bg-primaryBlue border border-primaryBlue px-7 py-1 text-white rounded hover:text-primaryBlue hover:bg-white" onClick={handleCreateNewBidderModal}> Create New Bidder </button>
                    </div>
                    <div className="flex space-x-6">
                        <SearchInputComponent searchInput={searchInput} onSearchChange={onSearchChange}/>
                        <FilterIconSVG />
                    </div>
                </div>
                <ReactTable columns={procurementAdminBiddersColumn} data={procurementAdminBiddersData}/>
            </div>
            
        </div>
    </>
}

export default ProcurementAdminBidders;