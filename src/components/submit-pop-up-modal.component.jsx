import React from 'react';
import {ReactComponent as SubmitResponseIconSVG} from "../assets/submit-response-icon.svg";
import GeneralModalComponent from './general-modal.component';

const SubmitPopUpModalComponent = ({isOpen, toggleSubmitResponseModal}) => {
    return <>
        <GeneralModalComponent isOpen={isOpen} onClose={toggleSubmitResponseModal}>
            <div className="flex flex-col items-center gap-y-2">
                    <div>
                        <SubmitResponseIconSVG />
                    </div>
                    <h3 className="text-xl font-bold">Submit Response</h3>
                    <p className="text-greyDark">Are you sure you want to submit your response?</p>
                    <div className="flex gap-x-2">
                        <button className="bg-white text-primaryBlue border border-primaryBlue rounded px-8 py-1 hover:bg-primaryBlue hover:text-white" onClick={toggleSubmitResponseModal}>No</button>
                        <button className="bg-primaryBlue text-white border border-primaryBlue rounded px-8 py-1 hover:bg-white hover:text-primaryBlue" onClick={toggleSubmitResponseModal}>Yes</button>
                    </div>
                </div>
        </GeneralModalComponent>
    </>
}

export default SubmitPopUpModalComponent;