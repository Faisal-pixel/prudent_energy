import { useLocation, } from "react-router-dom";
import {ReactComponent as ToggleOpenIcon} from "../assets/toggle-point-up-open.svg"
import { useContext } from "react";
import { ComponentContext } from "./component-context";
import HtmlEditorGeneralComponent from "./html-editor-general.component";
const GeneralTemplate = () => {
    const { generalTemplateToggleIsOpen, setOtherGeneralTemplateToggleIsOpen, otherGeneralTemplateRequisitionTypeSelectValue, setOtherGeneralTemplateRequisitionTypeSelectValue } = useContext(ComponentContext);
    const location = useLocation();
    const requisitionData = location.state.rowData;
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
                <div className={`bg-greyLight px-4 transition-all h-0 border border-primaryBlue ${generalTemplateToggleIsOpen.other && "h-[100%] py-3 overflow-visible"} space-y-3 overflow-hidden`}>
                    <div className="flex flex-col md:flex-wrap md:flex-row ">
                        <div className="flex flex-col space-y-1 shrink-1 md:mr-3 mb-4">
                            <label>RFQ No:</label>
                            <input className="border border-greyDark rounded-md px-2 py-0.5" type="text"value={requisitionData.rfqNo} readOnly/>
                        </div>
                        <div className="flex flex-col space-y-1 shrink-1 md:mr-3 mb-4">
                            <label>Creation Date:</label>
                            <input className="border border-greyDark rounded-md px-2 py-0.5" type="text" value="05/03/2023" readOnly/>
                        </div>
                        <div className="flex flex-col space-y-1 shrink-1 md:mr-3 mb-4">
                            <label>Requester:</label>
                            <input className="border border-greyDark rounded-md px-2 py-0.5" type="text" value={requisitionData.requester} readOnly/>
                        </div>
                        <div className="flex flex-col space-y-1 shrink-1 md:mr-3 mb-4">
                            <label>Business Unit:</label>
                            <input className="border border-greyDark rounded-md px-2 py-0.5" type="text" value="05/03/2023" readOnly/>
                        </div>
                        <div className="flex flex-col space-y-1 shrink-1 md:mr-3 mb-4">
                            <label>Department:</label>
                            <input className="border border-greyDark rounded-md px-2 py-0.5" type="text" value="05/03/2023" readOnly/>
                        </div>
                    </div>
                    <div className="space-x-4">
                        <div className="flex flex-col relative">
                            <label className="mb-1">Description:</label>
                            <div id="toolbar-container-general" className="border border-[#ddd]"></div>
                            <HtmlEditorGeneralComponent />
                        </div>
                    </div>
                    <div className="flex space-x-4">
                        <div className="flex flex-col space-y-1">
                            <label>Requisition Status:</label>
                            <input className="border border-greyDark rounded-md px-2 py-0.5" type="text" value={requisitionData.status} readOnly/>
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

export default GeneralTemplate;