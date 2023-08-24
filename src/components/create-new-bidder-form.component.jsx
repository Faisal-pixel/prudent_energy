import Modal from "./modal";
import {ReactComponent as XButtonSVG} from "../assets/x-button-icon.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOff, faToggleOn } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { ComponentContext } from "./component-context";

const CreateNewBidderForm = () => {
    const {createNewBidderModalIsOpen, setCreateNewBidderModalIsOpen} = useContext(ComponentContext)
    
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


    const handleOnChange = (e, section) => {
        const {name, value} = e.target;
        setCreateNewBidderFormValues((prevState) => (
            {...prevState, [section]: {...prevState[section], [name]: value}}
        ))
    }
    const handleToggleOnClick = (e, section) => {
        const name = e.currentTarget.getAttribute("data-icon-name");
        setCreateNewBidderFormValues((prevState) => (
            {...prevState, [section]: {...prevState[section], [name]: !prevState.serviceCategories[name]}}
        ))
    }

    return (
        <Modal isOpen={createNewBidderModalIsOpen} onClose={setCreateNewBidderModalIsOpen} noPadding>
            <form className="p-3 w-[690px] space-y-2">
                <h2 className="font-bold text-xl flex">Bidder Details <XButtonSVG className="inline ml-auto cursor-pointer self-center" onClick={setCreateNewBidderModalIsOpen}/></h2>
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
                <div className="border border-[#E8E8E8] rounded">
                    <h3 className="px-3 py-2 bg-[#E8E8E8] font-bold text-lg">Service Categories</h3>
                    <div className="px-3 py-2 space-y-4">
                        <div className="flex space-x-4">
                            <div className="space-x-2 flex basis-1/2">
                                <label className="min-w-max self-center">Service Class: </label>
                                <select defaultValue="select" name="serviceClass" onChange={(e) => handleOnChange(e, "serviceCategories")}  className="border border-grey[#E8E8E8] rounded-md px-2 py-1 w-full text-greyDark">
                                    <option value="select" className="text-greyDark" disabled>Select</option>
                                    <option value="legal" className="text-greyDark">Legal</option>
                                    <option value="esg" className="text-greyDark">ESG</option>
                                    <option value="technical" className="text-greyDark">Technical</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex justify-between pl-3">
                            <div className="space-x-6 flex">
                                <label className="w-14">Insurance</label>
                                <span>- - - - - - - - -</span>
                                <FontAwesomeIcon data-icon-name="insurance" icon={createNewBidderFormValues.serviceCategories.insurance ? faToggleOn : faToggleOff} onClick={(e) => handleToggleOnClick(e, "serviceCategories")} className="self-center text-2xl text-[#227CBF] cursor-pointer"/>
                            </div>
                            <div className="space-x-6 flex">
                                <label className="w-14">Freight</label>
                                <span>- - - - - - - - -</span>
                                <FontAwesomeIcon data-icon-name="freight" icon={createNewBidderFormValues.serviceCategories.freight ? faToggleOn : faToggleOff} onClick={(e) => handleToggleOnClick(e, "serviceCategories")} className="self-center text-2xl text-[#227CBF] cursor-pointer"/>
                            </div>
                        </div>
                        <div className="flex justify-between pl-3">
                            <div className="space-x-6 flex">
                                <label className="w-14">Agency</label>
                                <span>- - - - - - - - -</span>
                                <FontAwesomeIcon data-icon-name="agency" icon={createNewBidderFormValues.serviceCategories.agency ? faToggleOn : faToggleOff} onClick={(e) => handleToggleOnClick(e, "serviceCategories")} className="self-center text-2xl text-[#227CBF] cursor-pointer"/>
                            </div>
                            <div className="space-x-6 flex">
                                <label className="w-14">Storage</label>
                                <span>- - - - - - - - -</span>
                                <FontAwesomeIcon data-icon-name="storage" icon={createNewBidderFormValues.serviceCategories.storage ? faToggleOn : faToggleOff} onClick={(e) => handleToggleOnClick(e, "serviceCategories")} className="self-center text-2xl text-[#227CBF] cursor-pointer"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <button type="submit" className="bg-primaryBlue text-white border border-primaryBlue flex-shrink px-14 py-0.5 rounded ml-auto hover:bg-white hover:text-primaryBlue">Submit</button>
                </div>
            </form>
        </Modal>
    )
}

export default CreateNewBidderForm;