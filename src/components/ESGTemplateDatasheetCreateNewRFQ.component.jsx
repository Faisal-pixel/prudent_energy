import { useCallback, useContext, useMemo, useState } from "react";
import {ReactComponent as BreadCrumbRightNavigationSVG} from "../assets/bread-crumb-right-navigation.svg";
import {ReactComponent as ToggleOpenIcon} from "../assets/toggle-point-up-open.svg";
import {ReactComponent as UploadCloudIcon} from "../assets/upload-cloud-icon.svg";
import SelectDropdown from "./SelectDropdown";
import Modal from "./modal";
import { ProcurementAdminContext } from "../routes/procurement-admin/context/procurement-admin.context";
import ReactTable from "./react-table.component";
const daysHours = [
    {
        accessorID: 1,
        option: "Days"
    },
    {
        accessorID: 2,
        option: "Hours"
    },
    
]
const category = [
    {
        accessorID: 1,
        option: "Category 1"
    },
    {
        accessorID: 2,
        option: "Category 2"
    },
    
]

const listOfBiddersRFQ = [
    {
        accessorID: 1,
        option: "XYZ Corporations",
        reviewRate: 4
    },
    {
        accessorID: 2,
        option: "ABC Nigeria Limited",
        reviewRate: 3
    },
    {
        accessorID: 3,
        option: "Sigma Holdings",
        reviewRate: 5
    },
    {
        accessorID: 4,
        option: "Redstar Global",
        reviewRate: 2
    },
    
]
const ESGTemplateDataSheetCreateNewRFQ = () => {
    const { procurementAdminNominatedBiddersColumns, procurementAdminMyRequisitionsNominatedBiddersData } = useContext(ProcurementAdminContext) 

    const reviewQuotesColumn = useMemo(() => [
        {
            Header: "RFQ No",
            accessor: "rfqNo",
        },
        {
            Header: "Amount",
            accessor: "amount",
        },
        {
            Header: "Status",
            accessor: "reviewQuotesStatus",
        },
    ], [])
    const reviewQuotesData = useMemo(() => [
        {
            rfqNo: "Vendor A",
            amount: "2,000,000.00",
            reviewQuotesStatus: "",
        },
        {
            rfqNo: "Vendor B",
            amount: "4,000,000.00",
            reviewQuotesStatus: "",
        },
        {
            rfqNo: "Vendor C",
            amount: "1,000,000.00",
            reviewQuotesStatus: "Winner",
        },
        {
            rfqNo: "Vendor D",
            amount: "3,000,000.00",
            reviewQuotesStatus: "",
        },
    ], [])

    const [templateDrop, setTemplateDrop] = useState(false);

    const [isDropdownDropped, setDropdownDropped] = useState({
        daysHours: {
            isOpen: false,
            selectedValue: "Select"
        },
        serviceCategory: {
            isOpen: false,
            selectedValue: "Select"
        },
        listOfBiddersRFQ: {
            isOpen: false,
            selectedValue: "Select"
        }
    })
    
    const [isModalOpen, setIsModalOpen] = useState({
        selectPreferredBidders: false,
        reviewQuotesModal: false,
        uploadContractsForWinnerModal: false,
    });

    const toggleDropdown = useCallback((dropdownName) => {
        setDropdownDropped((prevState) => (
            {
                ...prevState,
                [dropdownName]: {...prevState[dropdownName], isOpen: !prevState[dropdownName].isOpen}
            }
        ));
    }, []);

    const handleSelectOption = (dropdownName, selectedValue) => {
        setDropdownDropped((prevState) => (
            {
                ...prevState,
                [dropdownName]: {...prevState[dropdownName], selectedValue}
            }
        ))
    }


    const openModal = (modalName) => {
        setIsModalOpen((prevState) => 
            (
                {
                    ...prevState,
                    [modalName]: true
                }
            )
        )
    }
    const closeModal = (modalName) => {
        setIsModalOpen((prevState) => (
            {
                ...prevState,
                [modalName]: false
            }
        ))
    }
    return <>
        {/* Select Preferred Bidders */}
        <Modal onClose={() => closeModal("selectPreferredBidders")} isOpen={isModalOpen.selectPreferredBidders}>
            <div className="space-y-4">
                <h3 className="font-bold text-center">Add Bidders to RFQ</h3>
                <div className="flex space-x-1 justify-between">
                    <span className="font-bold min-w-fit">Select Bidders:</span>
                    <div className="border w-full border-greyDark px-2 space-x-8 rounded flex justify-between h-max items-center self-center relative cursor-pointer" onClick={() => toggleDropdown("listOfBiddersRFQ")}>
                        <div className="pleaseSelect">{isDropdownDropped.listOfBiddersRFQ.selectedValue}</div>
                        <BreadCrumbRightNavigationSVG className="inline" />
                        {   
                            isDropdownDropped.listOfBiddersRFQ.isOpen && <SelectDropdown setUpdateSelect={(selectedValue) => handleSelectOption("listOfBiddersRFQ", selectedValue)} optionsData={listOfBiddersRFQ} otherClasses={"-left-[2rem] top-6"}/>
                        }
                    </div>
                </div>
                <div className="flex space-x-1 justify-center">
                    <button className="bg-primaryBlue text-white border-2 border-primaryBlue hover:text-primaryBlue hover:bg-white px-7 rounded" onClick={() => closeModal("selectPreferredBidders")}>Cancel</button>
                    <button className="bg-primaryBlue text-white border-2 border-primaryBlue hover:text-primaryBlue hover:bg-white px-7 rounded">Submit</button>
                </div>
            </div>
        </Modal>
        {/* Review Quotes Modal */}
        <Modal onClose={() => closeModal("reviewQuotesModal")} isOpen={isModalOpen.reviewQuotesModal} setBgColor={"bg-greyLight"}>
            <div className="space-y-4">
                <div>
                    <h3 className="font-bold text-primaryBlue text-xl">Review Quotes</h3>
                    <p className="text-primaryBlue">RFQ Number: RF00002</p>
                    <p className="text-primaryBlue">Number of vendors: 6</p>
                </div>
                <div className="bg-white py-4 px-2">
                    <ReactTable columns={reviewQuotesColumn} data={reviewQuotesData}/>
                </div>
                <div className="flex space-x-4 justify-center">
                    <button className="bg-white text-primaryBlue border-2 border-primaryBlue hover:text-white hover:bg-primaryBlue px-7 rounded" onClick={() => closeModal("reviewQuotesModal")}>Cancel</button>
                    <button className="bg-secondaryGreen text-white border-2 border-secondaryGreen hover:text-secondaryGreen hover:bg-white px-7 rounded">Notify Winner</button>
                </div>
            </div>
        </Modal>
        {/* Upload Contract For Winner Modal */}
        <Modal onClose={() => closeModal("uploadContractsForWinnerModal")} isOpen={isModalOpen.uploadContractsForWinnerModal} setBorder={"border-2 border-dashed border-greyDark"}>
            <div className=" space-y-5">
                <div className="flex flex-col items-center space-y-3">
                    <UploadCloudIcon />
                    <p className="text-primaryBlue font-bold">Select a file or drag and drop here</p>
                    <p className="text-greyDark">.xlsx, .xlsm or .xml, file size no more than 100mb</p>
                    <input className="hidden" id="uploadWinnerFile" type="file"/>
                    <label htmlFor="uploadWinnerFile" className="bg-primaryBlue text-white border border-primaryBlue hover:text-primaryBlue hover:bg-white hover:cursor-pointer px-7 py-0.5 rounded">Select file</label>
                </div>
                <div className="space-x-5 text-center">
                    <button className="bg-white text-primaryBlue border-2 border-primaryBlue hover:text-white hover:bg-primaryBlue px-7 rounded" onClick={() => closeModal("uploadContractsForWinnerModal")}>Cancel</button>
                    <button className="bg-secondaryGreen text-white border-2 border-secondaryGreen hover:text-secondaryGreen hover:bg-white px-7 rounded">Upload</button>
                </div>
            </div>
        </Modal>
        {/* ESG Template Datasheet */}
        <div className="border border-primaryBlue">
                {/* Header Div */}
                <header className="bg-primaryBlue flex justify-between items-center text-white py-2 px-3 cursor-pointer" onClick={() => setTemplateDrop(!templateDrop)}>
                    ESG Template Datasheet
                    <ToggleOpenIcon />
                </header>
                {/************************************** Body Of ESG TEMPLATE DATASHEET **********************************/}
                {templateDrop && <div className="container px-4 py-3 space-y-3">
                    <div className="flex space-x-7">
                        <div className="flex flex-col space-y-1 basis-1/4">
                            <label>Company Overview:</label>
                            <textarea className="border border-greyDark rounded-md px-2 py-0.5 w-full h-24 resize-none" type="text" value={"1,200,000"} readOnly> </textarea>
                        </div>
                        <div className="flex flex-col space-y-1 basis-1/4">
                            <label>Project Description:</label>
                            <textarea className="border border-greyDark rounded-md px-2 py-0.5 w-full h-24 resize-none" type="text" value={"1,200,000"} readOnly> </textarea>
                        </div>
                        <div className="flex flex-col space-y-1 basis-1/4">
                            <label>Scope of Work:</label>
                            <textarea className="border border-greyDark rounded-md px-2 py-0.5 w-full h-24 resize-none" type="text" value={"1,200,000"} readOnly> </textarea>
                        </div>

                        {/* Expiration Duration, Select, Service Category */}
                        <div className="flex flex-col space-y-1 basis-1/4">
                            {/* Expiration Duration & Select */}
                            <div className="flex space-x-2">
                                <div className="space-y-1 max-w-max ">
                                    <label>Expiration Duration: </label>
                                    <input type="text" placeholder="Input number" className="px-1 py-1 border border-greyDark rounded"/> 
                                </div>
                                <div className="basis-1/2 border border-greyDark px-1 py-1 rounded flex justify-between h-max items-center self-end relative cursor-pointer" onClick={() => toggleDropdown("daysHours")}>
                                    <div className="pleaseSelect">{isDropdownDropped.daysHours.selectedValue}</div>
                                    <BreadCrumbRightNavigationSVG className="inline" />
                                    {
                                        isDropdownDropped.daysHours.isOpen && <SelectDropdown setUpdateSelect={(selectedValue) => handleSelectOption("daysHours", selectedValue)} optionsData={daysHours}/>
                                    }
                                </div>
                            </div>
                            {/* Service Category */}
                            <div>
                                <label>Service Category:</label>
                                <div className="border border-greyDark rounded flex justify-between h-max items-center self-end px-2 py-1 relative cursor-pointer" onClick={() => toggleDropdown("serviceCategory")}>
                                    <div className="pleaseSelect">{isDropdownDropped.serviceCategory.selectedValue}</div>
                                    <BreadCrumbRightNavigationSVG className="inline" />
                                    {
                                        isDropdownDropped.serviceCategory.isOpen && <SelectDropdown setUpdateSelect={(selectedValue) => handleSelectOption("serviceCategory", selectedValue)} optionsData={category}/>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex space-x-2">
                        <button type="button" className="border-2 border-primaryBlue px-2 py-0.5 rounded text-primaryBlue hover:bg-primaryBlue hover:text-white">Preview Template</button>
                        <button type="button" className="border-2 border-primaryBlue px-2 py-0.5 rounded text-primaryBlue hover:bg-primaryBlue hover:text-white">Select all bidders</button>
                        <button type="button" className="border-2 border-primaryBlue px-2 py-0.5 rounded text-primaryBlue hover:bg-primaryBlue hover:text-white" onClick={() => openModal("selectPreferredBidders")}>Select preferred bidders</button>
                    </div>
                    {/* Nominated Bidders Section */}
                    <div className="space-y-4">
                        <div className="flex justify-between">
                            <h3 className="font-bold text-primaryBlue text-xl">Nominated Bidders</h3>
                            <div>
                                <p className="text-primaryBlue text-sm"> Expiration Date & Time: </p>
                                <p className="text-[#FF0000] text-sm">Expiration Countdown: 00:00:03 Hours</p>
                            </div>
                        </div>

                        <div>
                            <ReactTable columns={procurementAdminNominatedBiddersColumns} data={procurementAdminMyRequisitionsNominatedBiddersData}/>
                        </div>

                        <div className="space-x-2">
                            <button type="button" className="border-2 border-primaryBlue px-6 rounded text-primaryBlue hover:bg-primaryBlue hover:text-white">Reset Bidders</button>
                            <button type="button" className="border-2 border-primaryBlue px-6 rounded text-primaryBlue hover:bg-primaryBlue hover:text-white">Notify Bidders</button>
                            <button type="button" className="border-2 border-primaryBlue px-6 rounded text-primaryBlue hover:bg-primaryBlue hover:text-white" onClick={() => openModal("reviewQuotesModal")}>Review Quotes</button>
                        </div>
                        <div className="space-x-2">
                            <button type="button" className="border-2 border-primaryBlue px-4 rounded text-primaryBlue hover:bg-primaryBlue hover:text-white" onClick={() => openModal("uploadContractsForWinnerModal")}>Upload Contract for Winner</button>
                            <button type="button" className="border-2 border-primaryBlue px-4 rounded text-primaryBlue hover:bg-primaryBlue hover:text-white">View Contract</button>
                            <button type="button" className="border-2 border-primaryBlue px-4 rounded text-primaryBlue hover:bg-primaryBlue hover:text-white">Notify Bid Losers</button>
                        </div>
                    </div>
                </div>
                }
            </div>
    </>
}

export default ESGTemplateDataSheetCreateNewRFQ;