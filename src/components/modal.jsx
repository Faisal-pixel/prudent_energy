const Modal = ({isOpen, children, onClose, setBgColor, setBorder, noPadding}) => {
    if (!isOpen) return null;
    return <>
        <div className={`fixed inset-0 flex items-center justify-center z-50`}>
            <div className="bg-black bg-opacity-50 absolute inset-0" onClick={onClose}></div>
            <div className={`${setBgColor === undefined && "bg-white"} ${setBgColor} ${setBorder !== undefined && setBorder}  ${noPadding === undefined && "p-8"} rounded-lg shadow-md z-10 max-h-[90%] overflow-y-auto overflow-x-hidden`}>
            {children}
            </div>
        </div>
    </>
}

export default Modal;