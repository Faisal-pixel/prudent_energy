import {ReactComponent as ToggleOpenIcon} from "../assets/toggle-point-up-open.svg"
import { useContext, useState } from "react";
import { ComponentContext } from "./component-context";
const GeneralTemplateCreateNewRFQ = () => {
    const [createNewRFQInformation, setCreateNewRFQInformation] = useState({
        rfqNo: "",
        creationDate: "05/03/2023", //at some point, will probably get the current date
        requester: "",
        businessUnit: "",
        department: "",
    })
    const { generalTemplateToggleIsOpen, setOtherGeneralTemplateToggleIsOpen, otherGeneralTemplateRequisitionTypeSelectValue, setOtherGeneralTemplateRequisitionTypeSelectValue } = useContext(ComponentContext);
    const handleChange = (e) => {
        setOtherGeneralTemplateRequisitionTypeSelectValue(e.target.value);
    }
    return <>
        {/* General Toggle */}
        <div>
                {/* Header Div */}
                <header className="bg-primaryBlue flex justify-between items-center text-white py-2 px-3 cursor-pointer" onClick={() => setOtherGeneralTemplateToggleIsOpen()}>
                    General
                    <ToggleOpenIcon />
                </header>
                <div className={`container bg-greyLight px-4 transition-all h-0 border border-primaryBlue ${generalTemplateToggleIsOpen.other && "h-[100%] py-3 overflow-visible"} space-y-3 overflow-hidden`}>
                    <div className="flex space-x-7">
                        <div className="flex flex-col space-y-1">
                            <label>RFQ No:</label>
                            <input className="border border-greyDark rounded-md px-2 py-0.5" type="text"value={createNewRFQInformation.rfqNo} readOnly/>
                        </div>
                        <div className="flex flex-col space-y-1">
                            <label>Creation Date:</label>
                            <input className="border border-greyDark rounded-md px-2 py-0.5" type="text" value="05/03/2023" readOnly/>
                        </div>
                        <div className="flex flex-col space-y-1">
                            <label>Requester:</label>
                            <input className="border border-greyDark rounded-md px-2 py-0.5" type="text" value={createNewRFQInformation.requester} readOnly/>
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
                    <div className="space-x-4">
                        <div className="w-full space-y-2">
                            <label>Description:</label>
                            <div className="border border-greyDark round-md h-28 rounded-md overflow-y-auto px-2 py-1"></div>
                        </div>
                    </div>
                    <div className="flex space-x-4">
                        <div className="flex flex-col space-y-1">
                            <label>Requisition Status:</label>
                            <input className="border border-greyDark rounded-md px-2 py-0.5" type="text" value={createNewRFQInformation.status} readOnly/>
                        </div>
                        <div className="flex flex-col space-y-1">
                            <label>Requisition Type:</label>
                            <select className="border border-greyDark rounded-md px-2 py-0.5" value={otherGeneralTemplateRequisitionTypeSelectValue} onChange={handleChange}>
                                <option value="Services">Services</option>
                                <option value="Goods">Goods</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
    </>
}

export default GeneralTemplateCreateNewRFQ;