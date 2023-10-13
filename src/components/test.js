// import { useEffect, useState } from "react";



// const Test = () => {
//     const [expirationDate, setExpirationDate] = useState("");
//     const [expirationTime, setExpirationTime] = useState("00:00:00 GMT+1");
//     const [expirationCountDown, setExpirationCountDown] = useState("00:00:00");
//     const [inputValue, setInputValue] = useState("");
//     const [selectedValue, setSelectedValue] = useState("select");
    

//     const handleSelectChange = (e) => {
//         setSelectedValue(e.target.value)
//         setExpirationDate("00:00:00:00")
//     }


//     const currentDate = new Date()
//     const currentDay = currentDate.getDate();
//     const currentHour = currentDate.getHours();

//     const futureDate = new Date(currentDate)
    

//     const countDown = () => {
//         const countDownDate = new Date(futureDate).getTime();
//         const currentDateGetTime = new Date().getTime();
//         const gap = countDownDate - currentDateGetTime;
//         const second = 1000;
//         const minute = second * 60;
//         const hour = minute * 60;
//         const day = hour * 24;

//         const countDownToExpirationDay = Math.floor(gap/day);
//         const countDownToExpirationHour = Math.floor((gap%day)/hour);
//         const countDownToExpirationMinute = Math.floor((gap%hour)/minute);
//         const countDownToExpirationSecond = Math.floor((gap%minute)/second);
//         setExpirationCountDown(`${countDownToExpirationDay.toString().length === 1 ? `0${countDownToExpirationDay}` : countDownToExpirationDay}:${countDownToExpirationHour.toString().length === 1 ? `0${countDownToExpirationHour}` : countDownToExpirationHour}:${countDownToExpirationMinute.toString().length === 1 ? `0${countDownToExpirationMinute}` : countDownToExpirationMinute}:${countDownToExpirationSecond.toString().length === 1 ? `0${countDownToExpirationSecond}` : countDownToExpirationSecond}`)
//     }


//     useEffect(() => {
        
//         setExpirationDate(`${currentDate.getDate()}/${currentDate.getMonth()}/${currentDate.getFullYear()}`)
        
//         if(inputValue !== "") {
//             if (selectedValue === "days") {
//                 futureDate.setDate(currentDay + parseInt(inputValue))
//                 setExpirationDate(`${futureDate.getDate()}/${futureDate.getMonth()}/${futureDate.getFullYear()}`)
//                 setExpirationTime(`${futureDate.getHours()}:${futureDate.getMinutes()}:${futureDate.getSeconds()} GMT+1`)
//                 const interval = setInterval(() => {
//                     countDown(); // Call the countDown function every second
//                 }, 1000);
            
//                 // Cleanup the interval when the component unmounts
//                 return () => {
//                     clearInterval(interval);
//                 };
//             } else if(selectedValue === "hours") {
//                 futureDate.setHours(currentHour + parseInt(inputValue))
//                 setExpirationTime(`${futureDate.getHours()}:${futureDate.getMinutes()}:${futureDate.getSeconds()} GMT+1`);
//                 setExpirationDate(`${futureDate.getDate()}/${futureDate.getMonth()}/${futureDate.getFullYear()}`)
//                 const interval = setInterval(() => {
//                     countDown(); // Call the countDown function every second
//                 }, 1000);
            
//                 // Cleanup the interval when the component unmounts
//                 return () => {
//                     clearInterval(interval);
//                 };
//             }
//         }
//     }, [ inputValue, selectedValue])   


//     return <>
//         <input type="text" placeholder="Input number" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
//         <select value={selectedValue} onChange={handleSelectChange}>
//             <option value={"select"} disabled>Select</option>
//             <option value={"days"}>Days</option>
//             <option value={"hours"}>Hours</option>
//         </select>
//         <p>Expiration Date & Time: {`${expirationDate}; ${expirationTime}`}</p>
//         <p>Expiration Countdown: {`${expirationCountDown}`}</p>
//     </>
// }



import 'devextreme/dist/css/dx.light.css';
import { Column, DataGrid, FilterRow, HeaderFilter, SearchPanel, Sorting } from "devextreme-react/data-grid";
import {ReactComponent as StatusCirclePendingSVG} from "../assets/status-small-circle-pending.svg"
import {ReactComponent as StatusCircleCompletedSVG} from "../assets/status-small-circle-completed.svg"
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import { useContext } from 'react';
// import { BidderContext } from '../routes/bidder/context/bidder.context';
// try {
//     const response = await axios.get("https://api-infracredit.azurewebsites.net/api/administrations/getuserroles")
//     console.log(response.data)
// } catch (error) {
//     console.log(error.message)
// }
const bidderDashboardRecentBidsData = [
    {
        id: 1,
        rfqNo: "SD2568",
        description: "Building Maintenance",
        expDateAndTime: "2022-01-28 14:53 GMT+1",
        status: "pending"
    },
    {
        id: 2,
        rfqNo: "SD2568",
        description: "Building Maintenance",
        expDateAndTime: "2022-01-28 14:53 GMT+1",
        status: "pending"
    },
    {
        id: 3,
        rfqNo: "SD2568",
        description: "Building Maintenance",
        expDateAndTime: "2022-01-28 14:53 GMT+1",
        status: "pending"
    },
    {
        id: 4,
        rfqNo: "SD2568",
        description: "Building Maintenance",
        expDateAndTime: "2022-01-28 14:53 GMT+1",
        status: "pending"
    },
    {
        id: 5,
        rfqNo: "SD1564",
        description: "IT infrastructure Service",
        expDateAndTime: "2022-01-28 14:53 GMT+1",
        status: "completed"
    },
    {
        id: 6,
        rfqNo: "SD1564",
        description: "IT infrastructure Service",
        expDateAndTime: "2022-01-28 14:53 GMT+1",
        status: "completed"
    },
    {
        id: 7,
        rfqNo: "SD1564",
        description: "IT infrastructure Service",
        expDateAndTime: "2022-01-28 14:53 GMT+1",
        status: "completed"
    },
]

const Test = () => {
    // const {bidderDashboardRecentBidsData} = useContext(BidderContext)
    const navigate = useNavigate();
    const onRowPrepared = (e) => {
        if(e.rowType === 'data') {
            e.rowElement.classList.add("cursor-pointer");
        }
    }

    const handleRowClick = useCallback((row) => {
        const rowData = row.data;
        navigate(`details/${rowData["rfqNo"]}`, {state: {rowData}});
      }, [navigate]);
    return <>
      <DataGrid id='dataGrid' dataSource={bidderDashboardRecentBidsData} keyExpr="id" onRowPrepared={onRowPrepared} onRowClick={handleRowClick}>
      <Column dataField="rfqNo" caption="Description" allowSorting cellRender={({ value }) => <div className="">{value}</div>} />
      <Column dataField="description" caption="Description" allowSorting cellRender={({ value }) => <div className="">{value}</div>} />
      <Column dataField="expDateAndTime" caption="Description" allowSorting cellRender={({ value }) => <div className="">{value}</div>} />
      <Column dataField="status" caption="Description" allowSorting cellRender={({ value }) => <div>{value === "pending" ?  <span className="rounded-full px-3 py-1 space-x-2 text-sm bg-yellow-100"><span className="inline-flex items-center"><StatusCirclePendingSVG className="inline" /></span><span>{value}</span></span> : <span className="rounded-full px-3 py-1 space-x-2 text-sm bg-green-200"><span className="inline-flex items-center"><StatusCircleCompletedSVG className="self-center inline" /> </span><span>{value}</span></span>}</div>} />
      <SearchPanel visible />
      <Sorting mode='multiple' showSortIndexes/>
      <HeaderFilter visible/>
      </DataGrid>
    </>
}

export default Test;

