import React, { useContext, useState } from 'react';
import { DataGrid } from "devextreme-react";
import { Column, Editing, HeaderFilter, Sorting, Lookup } from "devextreme-react/data-grid";
// ASSETS
import {ReactComponent as UploadCloudIcon} from "../assets/upload-cloud-icon.svg";
import {ReactComponent as ToggleOpenIcon} from "../assets/toggle-point-up-open.svg";
// Components I created
import Modal from './modal';
import { ComponentContext } from './component-context';

const BidderRfqResponseComponent = () => {
    const { bidderRFQResponseTemplateToggleIsOpen, setBidderRFQResponseTemplateToggleIsOpen } = useContext(ComponentContext);
    const [isUploadContractsForWinnerModalOpen, setIsUploadContractsForWinnerModalOpen] = useState(false);
    const [rfqResponseData, setRfqResponseData] = useState([
        {
            id: 1,
            itemCode: "1",
            itemDescription: "Item 1",
            specification: "Specification 1",
            quantity: "1",
            unitCost: "1",
            amount: "1"
        },
        {
            id: 2,
            itemCode: "2",
            itemDescription: "Item 1",
            specification: "Specification 1",
            quantity: "1",
            unitCost: "1",
            amount: "1"
        },
    ])
    const itemCodeData = [
        {
            itemCode: "1",
            item: "A4 Paper"
        },
        {
            itemCode: "2",
            item: "Stamps"
        },
    ]

    const handleEditorPreparing = (e) => {
        // Check if the editor is for the "product" column
    if (e.parentType === 'dataRow' && e.dataField === 'product') {
        const selectedProduct = e.value; // Get the selected product
        const rowIndex = e.row.rowIndex; // Get the row index
  
        // Determine the description based on the selected product
        let description = '';
  
        if (selectedProduct === 'Stamp') {
          description = 'This is a stamp description.';
        } else if (selectedProduct === 'AnotherProduct') {
          // Add more conditions as needed
          description = 'Description for AnotherProduct.';
        }
  
        // Update the data array in the state
        const updatedData = [...rfqResponseData];
        updatedData[rowIndex].description = description;
        setRfqResponseData(updatedData);
  
        // Disable editing for the "description" cell
        e.editorOptions.disabled = true;
      }
    console.log(e)
    }
  return <>
    {/* Upload Contracts for Winner Modal */}
        <Modal onClose={() => setIsUploadContractsForWinnerModalOpen(false)} isOpen={isUploadContractsForWinnerModalOpen} setBorder={"border-2 border-dashed border-greyDark"}>
            <div className=" space-y-5">
                <div className="flex flex-col items-center space-y-3">
                    <UploadCloudIcon />
                    <p className="text-primaryBlue font-bold">Select a file or drag and drop here</p>
                    <p className="text-greyDark">.xlsx, .xlsm or .xml, file size no more than 100mb</p>
                    <input className="hidden" id="uploadWinnerFile" type="file"/>
                    <label htmlFor="uploadWinnerFile" className="bg-primaryBlue text-white border border-primaryBlue hover:text-primaryBlue hover:bg-white hover:cursor-pointer px-7 py-0.5 rounded">Select file</label>
                </div>
                <div className="space-x-5 text-center">
                    <button className="bg-white text-primaryBlue border-2 border-primaryBlue hover:text-white hover:bg-primaryBlue px-7 rounded" onClick={() => setIsUploadContractsForWinnerModalOpen(false)}>Cancel</button>
                    <button className="bg-secondaryGreen text-white border-2 border-secondaryGreen hover:text-secondaryGreen hover:bg-white px-7 rounded">Upload</button>
                </div>
            </div>
        </Modal>
        {/* RFQ RESPONSE */}
        <div className={``}>
                {/* Header Div */}
                <header className="bg-primaryBlue flex justify-between items-center text-white py-2 px-3 cursor-pointer" onClick={() => setBidderRFQResponseTemplateToggleIsOpen()}>
                    RFQ Response
                    <ToggleOpenIcon />
                </header>
                    <div className={`bg-greyLight px-4 py-0 transition-all h-0 border border-primaryBlue ${bidderRFQResponseTemplateToggleIsOpen && "h-[100%] py-3 overflow-visible"} space-y-3 overflow-hidden`}>
                        <div className="flex space-x-7">
                            <div className="flex flex-col space-y-1 basis-full">
                                <label>Specifications:</label>
                                <input className="border border-greyDark rounded-md px-2 py-0.5" type="text"value={""} readOnly/>
                            </div>
                        </div>
                        <div className="flex space-x-4 shadow ring-offset-2 rounded-md">
                        <DataGrid id='dataGrid' dataSource={rfqResponseData} keyExpr="id" onEditorPreparing={handleEditorPreparing} >
                            <Column dataField='itemCode' caption='Item/Asset Code'>
                                <Lookup valueExpr="itemCode" dataSource={itemCodeData} displayExpr="item"/>
                            </Column>
                            <Column dataField='itemDescription' caption='Item/Asset Description' allowEditing={false}/>
                            <Column dataField='specification' caption='Specification'/>
                            <Column dataField='quantity' caption='Quantity'/>
                            <Column dataField='unitCost' caption='Unit Cost'/>
                            <Column dataField='amount' caption='Amount'/>
                            {/* <SearchPanel visible /> */}
                            <Editing mode='row' allowUpdating allowDeleting allowAdding/>
                            <Sorting mode='multiple' showSortIndexes/>
                            <HeaderFilter visible/>
                        </DataGrid>
                        </div>
                        <div className="space-y-4">
                            <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-2  md:flex-row">
                                <div className='flex flex-col basis-1/4 space-y-2 flex-1'>
                                    <label>Expected Delivery Timeline:</label>
                                    <input className="border border-greyDark rounded-md px-2 py-0.5" type="text"value={""} placeholder='Input number'/>    
                                </div>
                                <div className='basis-1/4 flex-1 md:self-end'>
                                    <select className='border border-greyDark rounded-md w-full px-3 py-0.5'>
                                        <option value="" className='pr-3'>Select</option>
                                        <option value="days" className='pr-3'>Days</option>
                                        <option value="hours" className='pr-3'>Hours</option>
                                    </select>
                                </div>
                                <div className='flex flex-col basis-1/4 space-y-2 flex-1'>
                                    <label>Payment Terms (Days):</label>
                                    <input className="border border-greyDark rounded-md px-2 py-0.5" type="text" value={""} placeholder='Input numbers'/>    
                                </div>
                                <div className='flex flex-col basis-1/4 space-y-2 flex-1'>
                                    <label>Price Validity Period (Days):</label>
                                    <input className="border border-greyDark rounded-md px-2 py-0.5" type="text" value={""} placeholder='Input numbers'/>    
                                </div>
                            </div>
                            <div className="flex flex-col space-y-1 items-start">
                                <label>Bid Value:</label>
                                <input className="border border-greyDark rounded-md px-2 py-0.5" type="text"value={""} placeholder='Input Bid Value'/>
                            </div>
                            <div className="flex flex-col space-y-1">
                                <label>Comment (Optional):</label>
                                <input className="border border-greyDark rounded-md px-2 py-0.5" type="text"value={""} />
                            </div>
                            <div className="flex flex-col space-y-1 items-start">
                                <button type="button" className="border-2 border-primaryBlue px-4 rounded text-primaryBlue hover:bg-primaryBlue hover:text-white" onClick={() => setIsUploadContractsForWinnerModalOpen(true)}>Upload Contract for Winner</button>
                            </div>
                        </div>
                    </div>
            </div>
    </>
}

export default BidderRfqResponseComponent