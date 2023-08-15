import { useState } from "react";

const SwitchRecords = () => {
    const [switchRecords, setSwitchRecords] = useState({
        myRecords: false,
        allRecords: false
    });
    const handleClick = (recordName) => {
        setSwitchRecords( recordName === "myRecords" ? {"myRecords": true, "allRecords": false} : {"myRecords": false, "allRecords": true})
    }
    return <>
        <div className="flex space-x-2 shadow-sm bg-white rounded py-2 px-1">
                    <div onClick={() => handleClick("myRecords")} className={`${switchRecords.myRecords && "bg-primaryBlue text-white"} p-1 rounded cursor-pointer`}>
                        My Records
                    </div>
                    <div onClick={() => handleClick("allRecords")} className={`${switchRecords.allRecords && "bg-primaryBlue text-white"} p-1 rounded cursor-pointer`}>
                        All Records
                    </div>
                </div>
    </>
}

export default SwitchRecords;