import React, { useContext } from 'react'
// import { useLocation, } from "react-router-dom";
import {ReactComponent as ToggleOpenIcon} from "../assets/toggle-point-up-open.svg";
import { ComponentContext } from './component-context';




const BidderGeneralTemplateComponent = () => {
    const { generalTemplateToggleIsOpen, setBidderGeneralTemplateToggleIsOpen } = useContext(ComponentContext);
    // const location = useLocation();
    // const requisitionData = location.state.rowData;
    return <>
        
        {/* General Toggle */}
        <div className="">
                {/* Header Div */}
                <header className="bg-primaryBlue flex justify-between items-center text-white py-2 px-3 cursor-pointer" onClick={() => setBidderGeneralTemplateToggleIsOpen()}>
                    General
                    <ToggleOpenIcon />
                </header>
                    <div className={`container bg-greyLight px-4 transition-all h-0 border border-primaryBlue py-3 ${generalTemplateToggleIsOpen.bidder && "h-[100%] overflow-visible"} space-y-3 overflow-hidden`}>
                        <div className="flex space-x-7">
                            <div className="flex flex-col space-y-1 basis-2/4">
                                <label>RFQ No:</label>
                                <input className="border border-greyDark rounded-md px-2 py-0.5" type="text"value={"RFQ21547"} readOnly/>
                            </div>
                            <div className="flex flex-col space-y-1 basis-2/4">
                                <label>Creation Date:</label>
                                <input className="border border-greyDark rounded-md px-2 py-0.5" type="text" value="05/03/2023" readOnly/>
                            </div>
                            <div className="flex flex-col space-y-1 basis-2/4">
                                <label>Type:</label>
                                <input className="border border-greyDark rounded-md px-2 py-0.5" type="text" value={"Goods"} readOnly/>
                            </div>
                            <div className='basis-2/3 flex flex-col justify-center'>
                                <p className="text-primaryBlue text-sm"> Expiration Date & Time: 06/03/2023; 12:53:00 GMT+1</p>
                                <p className="text-[#FF0000] text-sm">Expiration Countdown: 00:00:03 Hours</p>
                            </div>
                        </div>
                        <div className="flex space-x-4">
                            <div className="w-full space-y-2">
                                <label>Company Overview:</label>
                                <div className="border border-greyDark round-md h-28 rounded-md overflow-y-auto px-2 py-1"></div>
                            </div>
                            <div className="w-full space-y-2">
                                <label>Project Description:</label>
                                <div className="border border-greyDark round-md h-28 rounded-md overflow-y-auto px-2 py-1"></div>
                            </div>
                            <div className="w-full space-y-2">
                                <label>Scope of Work:</label>
                                <div className="border border-greyDark round-md h-28 rounded-md overflow-y-auto px-2 py-1"></div>
                            </div>
                        </div>
                    </div>
            </div>
            
    </>
}

export default BidderGeneralTemplateComponent;