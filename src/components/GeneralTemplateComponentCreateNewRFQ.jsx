import { useLocation, } from "react-router-dom";
import {ReactComponent as ToggleOpenIcon} from "../assets/toggle-point-up-open.svg"
import { useState } from "react";
const GeneralTemplateCreateNewRFQ = () => {
    const [createNewRFQInformation, setCreateNewRFQInformation] = useState({
        rfqNo: "",
        creationDate: "05/03/2023", //at some point, will probably get the current date
        requester: "",
        businessUnit: "",
        department: "",
    })
    return <>
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
                            <input className="border border-greyDark rounded-md px-2 py-0.5" type="text"value={createNewRFQInformation.rfqNo}/>
                        </div>
                        <div className="flex flex-col space-y-1">
                            <label>Creation Date:</label>
                            <input className="border border-greyDark rounded-md px-2 py-0.5" type="text" value={createNewRFQInformation.creationDate} />
                        </div>
                        <div className="flex flex-col space-y-1">
                            <label>Requester:</label>
                            <input className="border border-greyDark rounded-md px-2 py-0.5" type="text" value={createNewRFQInformation.requester} />
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
    </>
}

export default GeneralTemplateCreateNewRFQ;