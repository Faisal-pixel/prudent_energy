import { useCallback, useContext, useMemo, useState } from "react";
import {ReactComponent as BreadCrumbRightNavigationSVG} from "../assets/bread-crumb-right-navigation.svg";
import {ReactComponent as UploadCloudIcon} from "../assets/upload-cloud-icon.svg";
import SelectDropdown from "./SelectDropdown";
import Modal from "./modal";
import { useLocation } from "react-router-dom";
import { ProcurementAdminContext } from "../routes/procurement-admin/context/procurement-admin.context";
import ReactTable from "./react-table.component";
import { ComponentContext } from "./component-context";
import DetailsGoods from "./details-goods-template.component";
import HtmlEditorComponent from "./html-editor.component";

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

const DetailsServicesComponent = () => {
    const location = useLocation();
    const requisitionData = location.state.rowData;
    const { procurementAdminNominatedBiddersColumns, procurementAdminMyRequisitionsNominatedBiddersData } = useContext(ProcurementAdminContext);
    const { detailsTemplateToggleIsOpen, otherGeneralTemplateRequisitionTypeSelectValue } = useContext(ComponentContext);

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
  return (
    <>
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
        <div className={`container bg-greyLight px-4 transition-all h-0 border border-primaryBlue space-y-3 ${detailsTemplateToggleIsOpen && "h-[100%] py-3 overflow-visible"} space-y-3 overflow-hidden`}>
                <div className="flex space-x-7">
                    <div className="flex flex-col space-y-1 basis-[15%]">
                        <label>Service Category:</label>
                        <select className="border border-greyDark rounded-md px-2 py-0.5" >
                            <option value="category1">Category 1</option>
                            <option value="category2">Category 2</option>
                        </select>
                    </div>
                    <div className="flex flex-col space-y-1">
                        <label>Expiration Duration:</label>
                        <input type="text" className="border border-greyDark rounded-md px-2 py-0.5" placeholder="Input number"/>
                    </div>
                    <div className="flex flex-col space-y-1">
                        <label>Service Category:</label>
                        <select className="border border-greyDark rounded-md px-2 py-0.5" >
                            <option value="select" disabled>Select</option>
                            <option value="days">Days</option>
                            <option value="hours">Hours</option>
                        </select>
                    </div>
                </div>
                <div className="flex space-x-7">
                    <div className="flex flex-col relative">
                        <label className="mb-1">Scope of work</label>
                        {/* <textarea className="border border-greyDark rounded-md px-2 py-0.5 w-full h-24 resize-none" type="text" readOnly> </textarea> */}
                        <div id="toolbar-container" className="border border-[#ddd]"></div>
                        <HtmlEditorComponent />
                    </div>
                </div>
                {
                    otherGeneralTemplateRequisitionTypeSelectValue === "Goods" && <DetailsGoods />
                }
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
                                <p className="text-primaryBlue text-sm"> Expiration Date & Time: {requisitionData.expDateAndTime}</p>
                                <p className="text-[#FF0000] text-sm">Expiration Countdown: 00:00:03 Hours</p>
                            </div>
                        </div>

                        <div>
                            <ReactTable columns={procurementAdminNominatedBiddersColumns} data={procurementAdminMyRequisitionsNominatedBiddersData}/>
                        </div>

                        <div className="flex justify-between">
                            <button type="button" className="border-2 border-primaryBlue px-6 rounded text-primaryBlue hover:bg-primaryBlue hover:text-white">Reset Bidders</button>
                            <button type="button" className="border-2 border-primaryBlue px-6 rounded text-primaryBlue hover:bg-primaryBlue hover:text-white">Notify Bidders</button>
                            <button type="button" className="border-2 border-primaryBlue px-6 rounded text-primaryBlue hover:bg-primaryBlue hover:text-white" onClick={() => openModal("reviewQuotesModal")}>Review Quotes</button>
                            <button type="button" className="border-2 border-primaryBlue px-4 rounded text-primaryBlue hover:bg-primaryBlue hover:text-white" onClick={() => openModal("uploadContractsForWinnerModal")}>Upload Contract for Winner</button>
                            <button type="button" className="border-2 border-primaryBlue px-4 rounded text-primaryBlue hover:bg-primaryBlue hover:text-white">View Contract</button>
                            <button type="button" className="border-2 border-primaryBlue px-4 rounded text-primaryBlue hover:bg-primaryBlue hover:text-white">Notify Bid Losers</button>
                        </div>
                    </div>
                </div>
    </>
  )
}

export default DetailsServicesComponent