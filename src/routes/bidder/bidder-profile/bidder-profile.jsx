import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOff, faToggleOn } from "@fortawesome/free-solid-svg-icons";

import {ReactComponent as UploadIconSVG} from "../../../assets/upload-icon.svg";

const BidderProfile = () => {
    const [createNewBidderFormValues, setCreateNewBidderFormValues] = useState({
        businessDetails: {
            businessName: "",
            businessEmail: "",
            businessAddress: "",
            state: "",
            contactPersonName: "",
            incorporationDate: "",
            cacNumber: "",
            tinNumber: "",
            paymentTermCode: "",
            bidderNumber: "",
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
    <>
        <div className="bg-secondaryBackground overflow-y-scroll space-y-5 px-6 pt-2">
            <p className='font-bold text-primaryBlue'>Profile</p>
            <form className="py-3 space-y-2 w-full">
                <div className="border border-[#E8E8E8] rounded">
                    <h3 className="px-3 py-2 bg-[#E8E8E8] font-bold text-lg">Business Details</h3>
                    <div className="px-3 py-2">
                        <div className="flex space-x-4">
                            <div className="space-y-1 flex flex-col basis-1/2">
                                <label>Business Name</label>
                                <input type="text" name="businessName" onChange={(e) => handleOnChange(e, "businessDetails")} placeholder="Business Name" className="border border-grey[#E8E8E8] rounded-md px-2 py-1 placeholder:text-greyDark"/>
                            </div>
                            <div className="space-y-1 flex flex-col basis-1/2">
                                <label>Business Email</label>
                                <input type="text" name="businessEmail" onChange={(e) => handleOnChange(e, "businessDetails")} placeholder="Business Email" className="border border-grey[#E8E8E8] rounded-md px-2 py-1 placeholder:text-greyDark"/>
                            </div>
                        </div>
                        <div className="flex space-x-4">
                            <div className="space-y-1 flex flex-col basis-1/2">
                                <label>Business Address</label>
                                <input type="text" name="businessAddress" onChange={(e) => handleOnChange(e, "businessDetails")} placeholder="Business Address" className="border border-grey[#E8E8E8] rounded-md px-2 py-1 placeholder:text-greyDark"/>
                            </div>
                            <div className="space-y-1 flex flex-col basis-1/2">
                                <label>State</label>
                                <input type="text" placeholder="State" name="state" onChange={(e) => handleOnChange(e, "businessDetails")} className="border border-grey[#E8E8E8] rounded-md px-2 py-1 placeholder:text-greyDark"/>
                            </div>
                        </div>
                        <div className="flex space-x-4">
                            <div className="space-y-1 flex flex-col basis-1/2">
                                <label>Contact Person Name</label>
                                <input type="text" name="contactPersonName" onChange={(e) => handleOnChange(e, "businessDetails")} placeholder="Contact Person Name" className="border border-grey[#E8E8E8] rounded-md px-2 py-1 placeholder:text-greyDark"/>
                            </div>
                            <div className="space-y-1 flex flex-col basis-1/2">
                                <label>Incorporation Date</label>
                                <input type="text" placeholder="Incorporation Date" name="incorporationDate" onChange={(e) => handleOnChange(e, "businessDetails")} className="border border-grey[#E8E8E8] rounded-md px-2 py-1 placeholder:text-greyDark"/>
                            </div>
                        </div>
                        <div className="flex space-x-4">
                            <div className="space-y-1 flex flex-col basis-1/2">
                                <label>CAC Number</label>
                                <input type="text" name="cacNumber" onChange={(e) => handleOnChange(e, "businessDetails")} placeholder="cacNumber" className="border border-grey[#E8E8E8] rounded-md px-2 py-1 placeholder:text-greyDark"/>
                            </div>
                            <div className="space-y-1 flex flex-col basis-1/2">
                                <label>TIN Number</label>
                                <input type="text" placeholder="Enter TIN Number" name="tinNumber" onChange={(e) => handleOnChange(e, "businessDetails")} className="border border-grey[#E8E8E8] rounded-md px-2 py-1 placeholder:text-greyDark"/>
                            </div>
                        </div>
                        <div className="flex space-x-4">
                            <div className="space-y-1 flex flex-col basis-1/2">
                                <label>Payment Term Code</label>
                                <input type="text" name="paymentTermCode" onChange={(e) => handleOnChange(e, "businessDetails")} placeholder="Payment Term Code" className="border border-grey[#E8E8E8] rounded-md px-2 py-1 placeholder:text-greyDark"/>
                            </div>
                            <div className="space-y-1 flex flex-col basis-1/2">
                                <label>Bidder Number</label>
                                <input type="text" placeholder="Bidder Number" name="bidderNumber" onChange={(e) => handleOnChange(e, "businessDetails")} className="border border-grey[#E8E8E8] rounded-md px-2 py-1 placeholder:text-greyDark"/>
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
                <div className="border border-[#E8E8E8] rounded">
                    <h3 className="px-3 py-2 bg-[#E8E8E8] font-bold text-lg">Documents</h3>
                    <div className="px-3 py-2">
                        <div className="flex space-x-4">
                            <div className="space-y-2 flex flex-col basis-1/2">
                                <p>CAC Registration Certificate</p>
                                <div className='flex '>
                                    <div className='basis-full py-1 px-1 text-greyDark border border-grey[#E8E8E8] rounded-tl rounded-bl'> Select a file or drag and drop</div>
                                    <input id='cacRegistrationCertificate' type="file" name="cacRegistrationCertificate" onChange={(e) => handleOnChange(e, "documents")} placeholder="CAC Registration Certificate" className="hidden"/>
                                    <label htmlFor='cacRegistrationCertificate' className='px-1 hover:cursor-pointer flex items-center bg-[#E8E8E8] rounded-tr rounded-br'><UploadIconSVG className="inline mr-2" /> Upload</label>
                                </div>
                                <div>
                                    {/* Files will be listed here */}
                                </div>
                            </div>
                            <div className="space-y-2 flex flex-col basis-1/2">
                                <p>DPR Certificate</p>
                                <div className='flex '>
                                    <div className='basis-full py-1 px-1 text-greyDark border border-grey[#E8E8E8] rounded-tl rounded-bl'> Select a file or drag and drop</div>
                                    <input id='cacRegistrationCertificate' type="file" name="cacRegistrationCertificate" onChange={(e) => handleOnChange(e, "documents")} placeholder="CAC Registration Certificate" className="hidden"/>
                                    <label htmlFor='cacRegistrationCertificate' className='px-1 hover:cursor-pointer flex items-center bg-[#E8E8E8] rounded-tr rounded-br'><UploadIconSVG className="inline mr-2" /> Upload</label>
                                </div>
                                <div>
                                    {/* Files will be listed here */}
                                </div>
                            </div>
                        </div>
                        <div className="flex space-x-4">
                            <div className="space-y-2 flex flex-col basis-1/2">
                                <p>Evidence of Tax Remittance</p>
                                <div className='flex '>
                                    <div className='basis-full py-1 px-1 text-greyDark border border-grey[#E8E8E8] rounded-tl rounded-bl'> Select a file or drag and drop</div>
                                    <input id='cacRegistrationCertificate' type="file" name="cacRegistrationCertificate" onChange={(e) => handleOnChange(e, "documents")} placeholder="CAC Registration Certificate" className="hidden"/>
                                    <label htmlFor='cacRegistrationCertificate' className='px-1 hover:cursor-pointer flex items-center bg-[#E8E8E8] rounded-tr rounded-br'><UploadIconSVG className="inline mr-2" /> Upload</label>
                                </div>
                                <div>
                                    {/* Files will be listed here */}
                                </div>
                            </div>
                            <div className="space-y-2 flex flex-col basis-1/2">
                                <p>Other Documents</p>
                                <div className='flex '>
                                    <div className='basis-full py-1 px-1 text-greyDark border border-grey[#E8E8E8] rounded-tl rounded-bl'> Select a file or drag and drop</div>
                                    <input id='cacRegistrationCertificate' type="file" name="cacRegistrationCertificate" onChange={(e) => handleOnChange(e, "documents")} placeholder="CAC Registration Certificate" className="hidden"/>
                                    <label htmlFor='cacRegistrationCertificate' className='px-1 hover:cursor-pointer flex items-center bg-[#E8E8E8] rounded-tr rounded-br'><UploadIconSVG className="inline mr-2" /> Upload</label>
                                </div>
                                <div>
                                    {/* Files will be listed here */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </>
  )
}

export default BidderProfile;