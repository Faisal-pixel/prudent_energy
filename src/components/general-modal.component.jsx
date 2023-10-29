import React from 'react'

const GeneralModalComponent = ({isOpen, children, onClose}) => {
    if (!isOpen) return null;
    return <>
        <div className={`fixed inset-0 flex items-center justify-center z-50`}>
            <div className="bg-black bg-opacity-50 fixed inset-0" onClick={onClose}></div>
            <div className="bg-white p-8 rounded-lg shadow-md z-10">
                {children}
            </div>
        </div>
    </>
}

export default GeneralModalComponent;