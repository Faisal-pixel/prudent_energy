import { useLocation, useNavigate } from "react-router-dom";
import {ReactComponent as BreadCrumbRightNavigationSVG} from "../../../assets/bread-crumb-right-navigation.svg" 
import {ReactComponent as ToggleOpenIcon} from "../../../assets/toggle-point-up-open.svg" 
import {ReactComponent as UploadCloudIcon} from "../../../assets/upload-cloud-icon.svg" 
import { useCallback, useContext, useMemo, useState } from "react";
import SelectDropdown from "../../../components/SelectDropdown";
import Modal from "../../../components/modal";
import ReactTable from "../../../components/react-table.component";
import { BasicRequestorContext } from "../context/basic-requestor-context";

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

const BasicRequestorMyRecentRequisitionsDetails = () => {
    // **************************************** USE MEMO HOOK *********************************
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

// ******************************************************* ALL CONTEXT************************************************************
    const {basicRequestorNomindatedBiddersColumns, basicRequestorNomindatedBiddersData} = useContext(BasicRequestorContext)

// ****************************************************** DaysHours Dropdown State and functions**********************************
    const [isDaysHoursDropdownDropped, setDaysHoursDropdownDropped] = useState({
        dropDownStateLegal: {
            isOpen: false,
            selectedValue: "Select"
        },
        dropDownStateESG: {
            isOpen: false,
            selectedValue: "Select"
        },
        dropDownStateTechnical: {
            isOpen: false,
            selectedValue: "Select"
        }
    })
    const toggleDaysHoursDropdown = useCallback((dropdownName) => {
        setDaysHoursDropdownDropped((prevState) => (
            {
                ...prevState,
                [dropdownName]: {...prevState[dropdownName], isOpen: !prevState[dropdownName].isOpen}
            }
        ));
    }, []);
    const handleDaysHoursSelectOption = (dropdownName, selectedValue) => {
        setDaysHoursDropdownDropped((prevState) => (
            {
                ...prevState,
                [dropdownName]: {...prevState[dropdownName], selectedValue}
            }
        ))
    }
// ****************************************************** Service Category Dropdown State and functions**********************************
    const [isServiceCategoryDropdownDropped, setIsServiceCategoryDropdownDropped] = useState({
        dropDownStateLegal: {
            isOpen: false,
            selectedValue: "Select"
        },
        dropDownStateESG: {
            isOpen: false,
            selectedValue: "Select"
        },
        dropDownStateTechnical: {
            isOpen: false,
            selectedValue: "Select"
        }
    })
    const toggleServiceCategoryDropdown = useCallback((dropdownName) => {
        setIsServiceCategoryDropdownDropped((prevState) => (
            {
                ...prevState,
                [dropdownName]: {...prevState[dropdownName], isOpen: !prevState[dropdownName].isOpen}
            }
        ));
    }, []);

    const handleServiceCategorySelectOption = (dropdownName, selectedValue) => {
        setIsServiceCategoryDropdownDropped((prevState) => (
            {
                ...prevState,
                [dropdownName]: {...prevState[dropdownName], selectedValue}
            }
        ))
    }
// ****************************************************** Service Category Dropdown State and functions**********************************'
    // const [isCategoryDropdownDropped, setCategoryDropdownDropped] = useState({
    //     dropDownStateLegal: false,
    //     dropDownStateESG: false,
    //     dropDownStateTechnical: false
    // })


    // const openCategoryDropdown = useCallback((modalName) => {
    //     setCategoryDropdownDropped((prevState) => (
    //         {
    //             ...prevState,
    //             [modalName]: !prevState[modalName]
    //         }
    //     ));
    // }, []);

// ****************************************************** List of Bidders RFQ Dropdown State and functions**********************************
    const [isListOfBiddersRFQDropdownDropped, setListOfBiddersRFQDropdownDropped] = useState({
        dropDownStateLegal: {
            isOpen: false,
            selectedValue: "Select"
        },
        dropDownStateESG: {
            isOpen: false,
            selectedValue: "Select"
        },
        dropDownStateTechnical: {
            isOpen: false,
            selectedValue: "Select"
        }
    })

    const openListOfBiddersRFQDropdown = useCallback((dropdownName) => {
        setListOfBiddersRFQDropdownDropped((prevState) => (
            {
                ...prevState,
                [dropdownName]: {...prevState[dropdownName], isOpen: !prevState[dropdownName].isOpen}
            }
        ));
    }, []);

    const handleListOfBiddersRFQSelectOption = (dropdownName, selectedValue) => {
        setListOfBiddersRFQDropdownDropped((prevState) => (
            {
                ...prevState,
                [dropdownName]: {...prevState[dropdownName], selectedValue}
            }
        ))
    }
    
    // ****************************Select Preferred Bidders Modal State and Functions*******************************************
    const [isSelectPreferredBidderModalOpen, setIsSelectPreferredBidderModalOpen] = useState({
        modalStateLegal: false,
        modalStateESG: false,
        modalStateTechnical: false,
    });

    const openModal = (modalName) => {
        setIsSelectPreferredBidderModalOpen((prevState) => 
            (
                {
                    ...prevState,
                    [modalName]: true
                }
            )
        )
    }
    const closeModal = (modalName) => {
        setIsSelectPreferredBidderModalOpen((prevState) => (
            {
                ...prevState,
                [modalName]: false
            }
        ))
    }
    // ****************************Select Preferred Bidders Modal State and Functions Ends Here*******************************************

    // ****************************Review Quotes Modal State and Functions*******************************************
    const [isReviewQuotesModalOpen, setIsReviewQuotesModalOpen] = useState({
        modalStateLegal: false,
        modalStateESG: false,
        modalStateTechnical: false,
    });

    const openReviewQuotesModal = (modalName) => {
        setIsReviewQuotesModalOpen((prevState) => (
            {
                ...prevState,
                [modalName]: true
            }
        ))
    }
    const closeReviewQuotesModal = (modalName) => {
        setIsReviewQuotesModalOpen((prevState) => (
            {
                ...prevState,
                [modalName]: false
            }
        ))
    }
    // ****************************Review Quotes Modal State and Functions Ends Here*******************************************
    // ****************************Upload Contract For Winner Modal State and Functions*******************************************
    const [isUploadContractsForWinnerModalOpen, setIsUploadContractsForWinnerModalOpen] = useState({
        modalStateLegal: false,
        modalStateESG: false,
        modalStateTechnical: false,
    });

    const openUploadContractsForWinnerModal = (modalName) => {
        setIsUploadContractsForWinnerModalOpen((prevState) => ({...prevState, [modalName]: true}))
    }
    const closeUploadContractsForWinnerModal = (modalName) => {
        setIsUploadContractsForWinnerModalOpen((prevState) => ({...prevState, [modalName]: false}))
    }
    // ****************************Upload Contract For Winner Modal State and Functions Ends Here*******************************************

    const location = useLocation();
    const navigate = useNavigate();
    const requisitionData = location.state.row;
    const handleClick = () => {
        navigate(-1)
    }
    return <>
    {/******************************************************** ALL MODALS ***********************************************************/}
                    {/******************* Legal Template Datasheet **********************************/}
        {/* Select Preferred Bidders */}
        <Modal onClose={() => closeModal("modalStateLegal")} isOpen={isSelectPreferredBidderModalOpen.modalStateLegal}>
            <div className="space-y-4">
                <h3 className="font-bold text-center">Add Bidders to RFQ</h3>
                <div className="flex space-x-1">
                    <span className="font-bold">Select Bidders:</span>
                    <div className="border border-greyDark px-2 space-x-8 rounded flex justify-between h-max items-center self-center relative cursor-pointer" onClick={() => openListOfBiddersRFQDropdown("dropDownStateLegal")}>
                        <div className="pleaseSelect">{isListOfBiddersRFQDropdownDropped.dropDownStateLegal.selectedValue}</div>
                        <BreadCrumbRightNavigationSVG className="inline" />
                        {   
                            isListOfBiddersRFQDropdownDropped.dropDownStateLegal.isOpen && <SelectDropdown setUpdateSelect={(selectedValue) => handleListOfBiddersRFQSelectOption("dropDownStateLegal", selectedValue)} optionsData={listOfBiddersRFQ} otherClasses={"-left-[2rem] top-6"}/>
                        }
                    </div>
                </div>
                <div className="flex space-x-1 justify-center">
                    <button className="bg-primaryBlue text-white border-2 border-primaryBlue hover:text-primaryBlue hover:bg-white px-7 rounded" onClick={() => closeModal("modalStateLegal")}>Cancel</button>
                    <button className="bg-primaryBlue text-white border-2 border-primaryBlue hover:text-primaryBlue hover:bg-white px-7 rounded">Submit</button>
                </div>
            </div>
        </Modal>
        {/* Review Quotes Modal */}
        <Modal onClose={() => closeReviewQuotesModal("modalStateLegal")} isOpen={isReviewQuotesModalOpen.modalStateLegal} setBgColor={"bg-greyLight"}>
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
                    <button className="bg-white text-primaryBlue border-2 border-primaryBlue hover:text-white hover:bg-primaryBlue px-7 rounded" onClick={() => closeReviewQuotesModal("modalStateLegal")}>Cancel</button>
                    <button className="bg-secondaryGreen text-white border-2 border-secondaryGreen hover:text-secondaryGreen hover:bg-white px-7 rounded">Notify Winner</button>
                </div>
            </div>
        </Modal>
        {/* Upload Contract For Winner Modal */}
        <Modal onClose={() => closeUploadContractsForWinnerModal("modalStateLegal")} isOpen={isUploadContractsForWinnerModalOpen.modalStateLegal} setBorder={"border-2 border-dashed border-greyDark"}>
            <div className=" space-y-5">
                <div className="flex flex-col items-center space-y-3">
                    <UploadCloudIcon />
                    <p className="text-primaryBlue font-bold">Select a file or drag and drop here</p>
                    <p className="text-greyDark">.xlsx, .xlsm or .xml, file size no more than 100mb</p>
                    <input className="hidden" id="uploadWinnerFile" type="file"/>
                    <label htmlFor="uploadWinnerFile" className="bg-primaryBlue text-white border border-primaryBlue hover:text-primaryBlue hover:bg-white hover:cursor-pointer px-7 py-0.5 rounded">Select file</label>
                </div>
                <div className="space-x-5 text-center">
                    <button className="bg-white text-primaryBlue border-2 border-primaryBlue hover:text-white hover:bg-primaryBlue px-7 rounded" onClick={() => closeUploadContractsForWinnerModal("modalStateLegal")}>Cancel</button>
                    <button className="bg-secondaryGreen text-white border-2 border-secondaryGreen hover:text-secondaryGreen hover:bg-white px-7 rounded">Upload</button>
                </div>
            </div>
        </Modal>
                    {/******************* ESG Template Datasheet **********************************/}
        {/* Select Preferred Bidders */}
        <Modal onClose={() => closeModal("modalStateESG")} isOpen={isSelectPreferredBidderModalOpen.modalStateESG}>
            <div className="space-y-4">
                <h3 className="font-bold text-center">Add Bidders to RFQ</h3>
                <div className="flex space-x-1">
                    <span className="font-bold">Select Bidders:</span>
                    <div className="border border-greyDark px-2 space-x-8 rounded flex justify-between h-max items-center self-center relative cursor-pointer" onClick={() => openListOfBiddersRFQDropdown("dropDownStateESG")}>
                        <div className="pleaseSelect">{isListOfBiddersRFQDropdownDropped.dropDownStateESG.selectedValue}</div>
                        <BreadCrumbRightNavigationSVG className="inline" />
                        {
                            isListOfBiddersRFQDropdownDropped.dropDownStateESG.isOpen && <SelectDropdown setUpdateSelect={(selectedValue) => handleListOfBiddersRFQSelectOption("dropDownStateESG", selectedValue) } optionsData={listOfBiddersRFQ} otherClasses={"-left-[2rem] top-6"}/>
                        }
                    </div>
                </div>
                <div className="flex space-x-1 justify-center">
                    <button className="bg-primaryBlue text-white border-2 border-primaryBlue hover:text-primaryBlue hover:bg-white px-7 rounded" onClick={() => closeModal("modalStateESG")}>Cancel</button>
                    <button className="bg-primaryBlue text-white border-2 border-primaryBlue hover:text-primaryBlue hover:bg-white px-7 rounded">Submit</button>
                </div>
            </div>
        </Modal>
        {/* Review Quotes Modal */}
        <Modal onClose={() => closeReviewQuotesModal("modalStateESG")} isOpen={isReviewQuotesModalOpen.modalStateESG} setBgColor={"bg-greyLight"}>
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
                    <button className="bg-white text-primaryBlue border-2 border-primaryBlue hover:text-white hover:bg-primaryBlue px-7 rounded" onClick={() => closeReviewQuotesModal("modalStateESG")}>Cancel</button>
                    <button className="bg-secondaryGreen text-white border-2 border-secondaryGreen hover:text-secondaryGreen hover:bg-white px-7 rounded">Notify Winner</button>
                </div>
            </div>
        </Modal>
        {/* Upload Contract For Winner Modal */}
        <Modal onClose={() => closeUploadContractsForWinnerModal("modalStateESG")} isOpen={isUploadContractsForWinnerModalOpen.modalStateESG} setBorder={"border-2 border-dashed border-greyDark"}>
            <div className=" space-y-5">
                <div className="flex flex-col items-center space-y-3">
                    <UploadCloudIcon />
                    <p className="text-primaryBlue font-bold">Select a file or drag and drop here</p>
                    <p className="text-greyDark">.xlsx, .xlsm or .xml, file size no more than 100mb</p>
                    <input className="hidden" id="uploadWinnerFile" type="file"/>
                    <label htmlFor="uploadWinnerFile" className="bg-primaryBlue text-white border border-primaryBlue hover:text-primaryBlue hover:bg-white hover:cursor-pointer px-7 py-0.5 rounded">Select file</label>
                </div>
                <div className="space-x-5 text-center">
                    <button className="bg-white text-primaryBlue border-2 border-primaryBlue hover:text-white hover:bg-primaryBlue px-7 rounded" onClick={() => closeUploadContractsForWinnerModal("modalStateESG")}>Cancel</button>
                    <button className="bg-secondaryGreen text-white border-2 border-secondaryGreen hover:text-secondaryGreen hover:bg-white px-7 rounded">Upload</button>
                </div>
            </div>
        </Modal>
                    {/******************* Technical Template Datasheet **********************************/}
        {/* Select Preferred Bidders */}
        <Modal onClose={() => closeModal("modalStateTechnical")} isOpen={isSelectPreferredBidderModalOpen.modalStateTechnical}>
            <div className="space-y-4">
                <h3 className="font-bold text-center">Add Bidders to RFQ</h3>
                <div className="flex space-x-1">
                    <span className="font-bold">Select Bidders:</span>
                    <div className="border border-greyDark px-2 space-x-8 rounded flex justify-between h-max items-center self-center relative cursor-pointer" onClick={() => openListOfBiddersRFQDropdown("dropDownStateTechnical")}>
                        <div className="pleaseSelect">{isListOfBiddersRFQDropdownDropped.dropDownStateTechnical.selectedValue}</div>
                        <BreadCrumbRightNavigationSVG className="inline" />
                        {
                            isListOfBiddersRFQDropdownDropped.dropDownStateTechnical.isOpen && <SelectDropdown setUpdateSelect={(selectedValue) => handleListOfBiddersRFQSelectOption("dropDownStateTechnical", selectedValue)} optionsData={listOfBiddersRFQ} otherClasses={"-left-[2rem] top-6"}/>
                        }
                    </div>
                </div>
                <div className="flex space-x-1 justify-center">
                    <button className="bg-primaryBlue text-white border-2 border-primaryBlue hover:text-primaryBlue hover:bg-white px-7 rounded" onClick={() => closeModal("modalStateTechnical")}>Cancel</button>
                    <button className="bg-primaryBlue text-white border-2 border-primaryBlue hover:text-primaryBlue hover:bg-white px-7 rounded">Submit</button>
                </div>
            </div>
        </Modal>
        {/* Review Quotes Modal */}
        <Modal onClose={() => closeReviewQuotesModal("modalStateTechnical")} isOpen={isReviewQuotesModalOpen.modalStateTechnical} setBgColor={"bg-greyLight"}>
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
                    <button className="bg-white text-primaryBlue border-2 border-primaryBlue hover:text-white hover:bg-primaryBlue px-7 rounded" onClick={() => closeReviewQuotesModal("modalStateTechnical")}>Cancel</button>
                    <button className="bg-secondaryGreen text-white border-2 border-secondaryGreen hover:text-secondaryGreen hover:bg-white px-7 rounded">Notify Winner</button>
                </div>
            </div>
        </Modal>
        {/* Upload Contract For Winner Modal */}
        <Modal onClose={() => closeUploadContractsForWinnerModal("modalStateTechnical")} isOpen={isUploadContractsForWinnerModalOpen.modalStateTechnical} setBorder={"border-2 border-dashed border-greyDark"}>
            <div className=" space-y-5">
                <div className="flex flex-col items-center space-y-3">
                    <UploadCloudIcon />
                    <p className="text-primaryBlue font-bold">Select a file or drag and drop here</p>
                    <p className="text-greyDark">.xlsx, .xlsm or .xml, file size no more than 100mb</p>
                    <input className="hidden" id="uploadWinnerFile" type="file"/>
                    <label htmlFor="uploadWinnerFile" className="bg-primaryBlue text-white border border-primaryBlue hover:text-primaryBlue hover:bg-white hover:cursor-pointer px-7 py-0.5 rounded">Select file</label>
                </div>
                <div className="space-x-5 text-center">
                    <button className="bg-white text-primaryBlue border-2 border-primaryBlue hover:text-white hover:bg-primaryBlue px-7 rounded" onClick={() => closeUploadContractsForWinnerModal("modalStateTechnical")}>Cancel</button>
                    <button className="bg-secondaryGreen text-white border-2 border-secondaryGreen hover:text-secondaryGreen hover:bg-white px-7 rounded">Upload</button>
                </div>
            </div>
        </Modal>
        <div className="container h-full overflow-y-auto px-5 pt-6 pb-5 flex flex-col space-y-5">
            {/* BreadCrumbsNavigation */}
            <div className="flex space-x-3 text-sm">
                <span onClick={handleClick} className="text-greyDark hover:cursor-pointer">Dashboard</span>
                <span className="self-center text-greyDark"><BreadCrumbRightNavigationSVG /></span>
                <span className="text-greyDark">Records</span>
                <span className="self-center text-greyDark"><BreadCrumbRightNavigationSVG /></span>
                <span className="text-primaryBlue">Requisition Details</span>

            </div>
            {/* Buttons */}
            <div className="space-x-3">
                <button type="button" className="px-7 py-1 border-2 border-primaryBlue rounded-md hover:text-white hover:bg-primaryBlue">Save</button>
                <button type="button" className="px-7 py-1 border-2 border-primaryBlue rounded-md hover:text-white hover:bg-primaryBlue">Delete</button>
            </div>
            {/* General Toggle */}
            <div className="border border-primaryBlue">
                {/* Header Div */}
                <header className="bg-primaryBlue flex justify-between items-center text-white py-2 px-3">
                    General
                    <ToggleOpenIcon />
                </header>
                <div className="container px-4 py-3 space-y-3">
                    <div className="flex space-x-7">
                        <div className="flex flex-col space-y-1">
                            <label>RFQ No:</label>
                            <input className="border border-greyDark rounded-md px-2 py-0.5" type="text"value={requisitionData.rfqNo} readOnly/>
                        </div>
                        <div className="flex flex-col space-y-1">
                            <label>Creation Date:</label>
                            <input className="border border-greyDark rounded-md px-2 py-0.5" type="text" value="05/03/2023" readOnly/>
                        </div>
                        <div className="flex flex-col space-y-1">
                            <label>Requester:</label>
                            <input className="border border-greyDark rounded-md px-2 py-0.5" type="text" value={requisitionData.requester} readOnly/>
                        </div>
                        <div className="flex flex-col space-y-1">
                            <label>Business Unit:</label>
                            <input className="border border-greyDark rounded-md px-2 py-0.5" type="text" value="05/03/2023" readOnly/>
                        </div>
                        <div className="flex flex-col space-y-1">
                            <label>Department:</label>
                            <input className="border border-greyDark rounded-md px-2 py-0.5" type="text" value="05/03/2023" readOnly/>
                        </div>
                    </div>
                    <div className="flex space-x-4">
                        <div className="w-full space-y-2">
                            <label>Description:</label>
                            <div className="border border-greyDark round-md h-28 rounded-md overflow-y-auto px-2 py-1"></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Legal Template Datasheet */}
            <div className="border border-primaryBlue">
                {/* Header Div */}
                <header className="bg-primaryBlue flex justify-between items-center text-white py-2 px-3">
                    Legal Template Datasheet
                    <ToggleOpenIcon />
                </header>
                {/************************************** Body Of LEGAL TEMPLATE DATASHEET **********************************/}
                <div className="container px-4 py-3 space-y-3">
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
                                <div className="basis-1/2 border border-greyDark px-1 py-1 rounded flex justify-between h-max items-center self-end relative cursor-pointer" onClick={() => toggleDaysHoursDropdown("dropDownStateLegal")}>
                                    <div className="pleaseSelect">{isDaysHoursDropdownDropped.dropDownStateLegal.selectedValue}</div>
                                    <BreadCrumbRightNavigationSVG className="inline" />
                                    {
                                        isDaysHoursDropdownDropped.dropDownStateLegal.isOpen && <SelectDropdown setUpdateSelect={(selectedValue) => handleDaysHoursSelectOption("dropDownStateLegal", selectedValue)} optionsData={daysHours}/>
                                    }
                                </div>
                            </div>
                            {/* Service Category */}
                            <div>
                                <label>Service Category:</label>
                                <div className="border border-greyDark rounded flex justify-between h-max items-center self-end px-2 py-1 relative cursor-pointer" onClick={() => toggleServiceCategoryDropdown("dropDownStateLegal")}>
                                    <div className="pleaseSelect">{isServiceCategoryDropdownDropped.dropDownStateLegal.selectedValue}</div>
                                    <BreadCrumbRightNavigationSVG className="inline" />
                                    {
                                        isServiceCategoryDropdownDropped.dropDownStateLegal.isOpen && <SelectDropdown setUpdateSelect={(selectedValue) => handleServiceCategorySelectOption("dropDownStateLegal", selectedValue)} optionsData={category}/>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex space-x-2">
                        <button type="button" className="border-2 border-primaryBlue px-2 py-0.5 rounded text-primaryBlue hover:bg-primaryBlue hover:text-white">Preview Template</button>
                        <button type="button" className="border-2 border-primaryBlue px-2 py-0.5 rounded text-primaryBlue hover:bg-primaryBlue hover:text-white">Select all bidders</button>
                        <button type="button" className="border-2 border-primaryBlue px-2 py-0.5 rounded text-primaryBlue hover:bg-primaryBlue hover:text-white" onClick={() => openModal("modalStateLegal")}>Select preferred bidders</button>
                    </div>
                    {/* Nominated Bidders Section */}
                    <div className="space-y-4">
                        <div className="flex justify-between">
                            <h3 className="font-bold text-primaryBlue text-xl">Nominated Bidders</h3>
                            <div>
                                <p className="text-primaryBlue text-sm"> Expiration Date & Time: {requisitionData.expDateAndTime}</p>
                                <p className="text-[#FF0000] text-sm">Expiration Countdown: 00:00:03 Hours</p>
                            </div>
                        </div>

                        <div>
                            <ReactTable columns={basicRequestorNomindatedBiddersColumns} data={basicRequestorNomindatedBiddersData}/>
                        </div>

                        <div className="space-x-2">
                            <button type="button" className="border-2 border-primaryBlue px-6 rounded text-primaryBlue hover:bg-primaryBlue hover:text-white">Reset Bidders</button>
                            <button type="button" className="border-2 border-primaryBlue px-6 rounded text-primaryBlue hover:bg-primaryBlue hover:text-white">Notify Bidders</button>
                            <button type="button" className="border-2 border-primaryBlue px-6 rounded text-primaryBlue hover:bg-primaryBlue hover:text-white" onClick={() => openReviewQuotesModal("modalStateLegal")}>Review Quotes</button>
                        </div>
                        <div className="space-x-2">
                            <button type="button" className="border-2 border-primaryBlue px-4 rounded text-primaryBlue hover:bg-primaryBlue hover:text-white" onClick={() => openUploadContractsForWinnerModal("modalStateLegal")}>Upload Contract for Winner</button>
                            <button type="button" className="border-2 border-primaryBlue px-4 rounded text-primaryBlue hover:bg-primaryBlue hover:text-white">View Contract</button>
                            <button type="button" className="border-2 border-primaryBlue px-4 rounded text-primaryBlue hover:bg-primaryBlue hover:text-white">Notify Bid Losers</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* ESG Template Datasheet */}
            <div className="border border-primaryBlue">
                {/* Header Div */}
                <header className="bg-primaryBlue flex justify-between items-center text-white py-2 px-3">
                    ESG Template Datasheet
                    <ToggleOpenIcon />
                </header>
                {/************************************** Body Of ESG TEMPLATE DATASHEET **********************************/}
                <div className="container px-4 py-3 space-y-3">
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
                                <div className="basis-1/2 border border-greyDark px-1 py-1 rounded flex justify-between h-max items-center self-end relative cursor-pointer" onClick={() => toggleDaysHoursDropdown("dropDownStateESG")}>
                                    <div className="pleaseSelect">{isDaysHoursDropdownDropped.dropDownStateESG.selectedValue}</div>
                                    <BreadCrumbRightNavigationSVG className="inline" />
                                    {
                                        isDaysHoursDropdownDropped.dropDownStateESG.isOpen && <SelectDropdown setUpdateSelect={(selectedValue) => handleDaysHoursSelectOption("dropDownStateESG", selectedValue)} optionsData={daysHours}/>
                                    }
                                </div>
                            </div>
                            {/* Service Category */}
                            <div>
                                <label>Service Category:</label>
                                <div className="border border-greyDark rounded flex justify-between h-max items-center self-end px-2 py-1 relative cursor-pointer" onClick={() => toggleServiceCategoryDropdown("dropDownStateESG")}>
                                    <div className="pleaseSelect">{isServiceCategoryDropdownDropped.dropDownStateESG.selectedValue}</div>
                                    <BreadCrumbRightNavigationSVG className="inline" />
                                    {
                                        isServiceCategoryDropdownDropped.dropDownStateESG.isOpen && <SelectDropdown setUpdateSelect={(selectedValue) => handleServiceCategorySelectOption("dropDownStateESG", selectedValue)} optionsData={category}/>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex space-x-2">
                        <button type="button" className="border-2 border-primaryBlue px-2 py-0.5 rounded text-primaryBlue hover:bg-primaryBlue hover:text-white">Preview Template</button>
                        <button type="button" className="border-2 border-primaryBlue px-2 py-0.5 rounded text-primaryBlue hover:bg-primaryBlue hover:text-white">Select all bidders</button>
                        <button type="button" className="border-2 border-primaryBlue px-2 py-0.5 rounded text-primaryBlue hover:bg-primaryBlue hover:text-white" onClick={() => openModal("modalStateESG")}>Select preferred bidders</button>
                    </div>
                    {/* Nominated Bidders Section */}
                    <div className="space-y-4">
                        <div className="flex justify-between">
                            <h3 className="font-bold text-primaryBlue text-xl">Nominated Bidders</h3>
                            <div>
                                <p className="text-primaryBlue text-sm"> Expiration Date & Time: {requisitionData.expDateAndTime}</p>
                                <p className="text-[#FF0000] text-sm">Expiration Countdown: 00:00:03 Hours</p>
                            </div>
                        </div>

                        <div>
                            <ReactTable columns={basicRequestorNomindatedBiddersColumns} data={basicRequestorNomindatedBiddersData}/>
                        </div>

                        <div className="space-x-2">
                            <button type="button" className="border-2 border-primaryBlue px-6 rounded text-primaryBlue hover:bg-primaryBlue hover:text-white">Reset Bidders</button>
                            <button type="button" className="border-2 border-primaryBlue px-6 rounded text-primaryBlue hover:bg-primaryBlue hover:text-white">Notify Bidders</button>
                            <button type="button" className="border-2 border-primaryBlue px-6 rounded text-primaryBlue hover:bg-primaryBlue hover:text-white" onClick={() => openReviewQuotesModal("modalStateESG")}>Review Quotes</button>
                        </div>
                        <div className="space-x-2">
                            <button type="button" className="border-2 border-primaryBlue px-4 rounded text-primaryBlue hover:bg-primaryBlue hover:text-white" onClick={() => openUploadContractsForWinnerModal("modalStateESG")}>Upload Contract for Winner</button>
                            <button type="button" className="border-2 border-primaryBlue px-4 rounded text-primaryBlue hover:bg-primaryBlue hover:text-white">View Contract</button>
                            <button type="button" className="border-2 border-primaryBlue px-4 rounded text-primaryBlue hover:bg-primaryBlue hover:text-white">Notify Bid Losers</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Technical Template Datasheet */}
            <div className="border border-primaryBlue">
                {/* Header Div */}
                <header className="bg-primaryBlue flex justify-between items-center text-white py-2 px-3">
                    Technical Template Datasheet
                    <ToggleOpenIcon />
                </header>
                {/************************************** Body Of TECHNICAL TEMPLATE DATASHEET **********************************/}
                <div className="container px-4 py-3 space-y-3">
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
                                <div className="basis-1/2 border border-greyDark px-1 py-1 rounded flex justify-between h-max items-center self-end relative cursor-pointer" onClick={() => toggleDaysHoursDropdown("dropDownStateTechnical")}>
                                    <div className="pleaseSelect">{isDaysHoursDropdownDropped.dropDownStateTechnical.selectedValue}</div>
                                    <BreadCrumbRightNavigationSVG className="inline" />
                                    {
                                        isDaysHoursDropdownDropped.dropDownStateTechnical.isOpen && <SelectDropdown setUpdateSelect={(selectedValue) => handleDaysHoursSelectOption("dropDownStateTechnical", selectedValue)} optionsData={daysHours}/>
                                    }
                                </div>
                            </div>
                            {/* Service Category */}
                            <div>
                                <label>Service Category:</label>
                                <div className="border border-greyDark rounded flex justify-between h-max items-center self-end px-2 py-1 relative cursor-pointer" onClick={() => toggleServiceCategoryDropdown("dropDownStateTechnical")}>
                                    <div className="pleaseSelect">{isServiceCategoryDropdownDropped.dropDownStateTechnical.selectedValue}</div>
                                    <BreadCrumbRightNavigationSVG className="inline" />
                                    {
                                        isServiceCategoryDropdownDropped.dropDownStateTechnical.isOpen && <SelectDropdown setUpdateSelect={(selectedValue) => handleServiceCategorySelectOption("dropDownStateTechnical", selectedValue)} optionsData={category}/>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex space-x-2">
                        <button type="button" className="border-2 border-primaryBlue px-2 py-0.5 rounded text-primaryBlue hover:bg-primaryBlue hover:text-white">Preview Template</button>
                        <button type="button" className="border-2 border-primaryBlue px-2 py-0.5 rounded text-primaryBlue hover:bg-primaryBlue hover:text-white">Select all bidders</button>
                        <button type="button" className="border-2 border-primaryBlue px-2 py-0.5 rounded text-primaryBlue hover:bg-primaryBlue hover:text-white" onClick={() => openModal("modalStateTechnical")}>Select preferred bidders</button>
                    </div>
                    {/* Nominated Bidders Section */}
                    <div className="space-y-4">
                        <div className="flex justify-between">
                            <h3 className="font-bold text-primaryBlue text-xl">Nominated Bidders</h3>
                            <div>
                                <p className="text-primaryBlue text-sm"> Expiration Date & Time: {requisitionData.expDateAndTime}</p>
                                <p className="text-[#FF0000] text-sm">Expiration Countdown: 00:00:03 Hours</p>
                            </div>
                        </div>

                        <div>
                            <ReactTable columns={basicRequestorNomindatedBiddersColumns} data={basicRequestorNomindatedBiddersData}/>
                        </div>

                        <div className="space-x-2">
                            <button type="button" className="border-2 border-primaryBlue px-6 rounded text-primaryBlue hover:bg-primaryBlue hover:text-white">Reset Bidders</button>
                            <button type="button" className="border-2 border-primaryBlue px-6 rounded text-primaryBlue hover:bg-primaryBlue hover:text-white">Notify Bidders</button>
                            <button type="button" className="border-2 border-primaryBlue px-6 rounded text-primaryBlue hover:bg-primaryBlue hover:text-white" onClick={() => openReviewQuotesModal("modalStateTechnical")}>Review Quotes</button>
                        </div>
                        <div className="space-x-2">
                            <button type="button" className="border-2 border-primaryBlue px-4 rounded text-primaryBlue hover:bg-primaryBlue hover:text-white" onClick={() => openUploadContractsForWinnerModal("modalStateTechnical")}>Upload Contract for Winner</button>
                            <button type="button" className="border-2 border-primaryBlue px-4 rounded text-primaryBlue hover:bg-primaryBlue hover:text-white">View Contract</button>
                            <button type="button" className="border-2 border-primaryBlue px-4 rounded text-primaryBlue hover:bg-primaryBlue hover:text-white">Notify Bid Losers</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default BasicRequestorMyRecentRequisitionsDetails;