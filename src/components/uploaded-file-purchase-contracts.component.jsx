import { ReactComponent as DeleteIconSVG } from "../assets/delete-uploaded-file-in-purchase-contract-details.svg";
const UploadedFilePurchaseContracts = ({documentName, preview, size}) => {
    return <div className="px-2 py-1 w-full border-2 border-secondaryGreen rounded flex justify-between items-center">
        <span className="text-greyDark">{documentName}</span>
        <span>{preview}</span>
        <span>{size}</span>
        <span className="w-6 h-6 bg-[#f1dddd] flex items-center justify-center rounded-full hover:cursor-pointer"><DeleteIconSVG className="inline pointer-events-none" /></span>
    </div>
}

export default UploadedFilePurchaseContracts;