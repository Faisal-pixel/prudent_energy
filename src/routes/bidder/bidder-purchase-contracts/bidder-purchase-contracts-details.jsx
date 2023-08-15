import { useContext } from "react";
import {ReactComponent as PurchaseOrderImageSVG} from "../../../assets/purchase-order-image.svg";
import {ReactComponent as UploadIconSVG} from "../../../assets/upload-icon.svg";
import UploadedFilePurchaseContracts from "../../../components/uploaded-file-purchase-contracts.component";
import { BidderContext } from "../context/bidder.context";
const BidderPurchaseContractsDetails = () => {
    const {uploadedFilesPurchaseContracts} = useContext(BidderContext)
    return (
        <div className="container bg-secondaryBackground space-y-5 px-6 pt-6">
            <div className="">
                <p className="text-greyDark"><span className="font-bold text-black">Hey John -</span> We were just about to start the party without you. Welcome back, buddy!</p>
            </div>
            <div className="space-x-3">
                <a href="#" className="px-2 py-1 border-2 border-primaryBlue rounded-md hover:text-white hover:bg-primaryBlue">Download Digital Signature</a>
                <a href="#" className="px-7 py-1 border-2 border-primaryBlue rounded-md hover:text-white hover:bg-primaryBlue">Download Contract</a>
            </div>
            <div className="flex space-x-3">
                <div className="max-h-[35rem] basis-2/3 overflow-y-auto">
                    <PurchaseOrderImageSVG />
                </div>
                <div className="container max-h-[35rem] px-3 basis-1/3 space-y-3 overflow-y-auto">
                    <div className="space-y-2">
                        <label>Comment Optional: </label>
                        <textarea className="w-full h-[15rem] resize-none border rounded p-2 focus:outline-none"></textarea>
                    </div>
                    <div className="space-y-2">
                        <a href="#" className="px-2 w-full block py-1 bg-secondaryGreen flex items-center justify-center rounded-full text-white">Save Comment</a>
                        <a href="#" className="px-2 w-full block py-1 bg-secondaryGreen flex items-center justify-center rounded-full text-white">View Comments</a>
                        <a href="#" className="px-2 w-full block py-1 bg-figmaRed flex items-center justify-center rounded-full text-white">Delete Comments</a>
                    </div>
                    <div className="flex flex-col space-y-1">
                        <div>
                            <input type="file" id="fileInput" className="hidden"/>
                            <label htmlFor="fileInput" className="w-full hover:cursor-pointer flex items-center"><UploadIconSVG className="inline mr-2" />Upload supporting documents</label>
                        </div>
                        <div className="space-y-2">
                            {uploadedFilesPurchaseContracts.map(({documentName, preview, size}) => <UploadedFilePurchaseContracts documentName={documentName} preview={preview} size={size}/> )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BidderPurchaseContractsDetails;