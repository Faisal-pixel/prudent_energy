const Modal = ({isOpen, children, onClose, setBgColor, setBorder, noPadding}) => {
    if (!isOpen) return null;
    return <>
        <div className={`fixed inset-0 flex items-center justify-center z-50`}>
            <div className="bg-black bg-opacity-50 fixed inset-0" onClick={onClose}></div>
            <div className="relative max-h-[99%] overflow-y-auto bg-white shadow-md ">
            <div className={`${setBgColor === undefined && "bg-white"} ${setBgColor} ${setBorder !== undefined && setBorder}  ${noPadding === undefined && "p-8"} relative rounded-lg z-10`}>
            {children}
            </div>
            </div>
        </div>
    </>
}

export default Modal;