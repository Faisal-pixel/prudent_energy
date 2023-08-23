import { useEffect, useState } from "react";

const Test = () => {
    const [expirationDate, setExpirationDate] = useState("");
    const [expirationTime, setExpirationTime] = useState("");
    const [expirationCountDown, setExpirationCountDown] = useState("00:00:00");
    const [inputValue, setInputValue] = useState("");
    const [selectedValue, setSelectedValue] = useState("select");
    

    const handleSelectChange = (e) => {
        setSelectedValue(e.target.value)
    }

    useEffect(() => {
        const currentDate = new Date();
        const currentDay = currentDate.getDate();
        const currentMonth = currentDate.getMonth();
        const currentYear = currentDate.getFullYear();

        const futureDate = new Date(currentDate)

        // const months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October"]
        // let countDown;
        // let countDownDate = currentDate.getDate();
        // let countDownMonth = currentDate.getMonth();
        // let countDownYear = currentDate.getFullYear();
        setExpirationDate(`${currentDate.getDate()}/${currentDate.getMonth()}/${currentDate.getFullYear()}`)
        setExpirationTime(`${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`)
        // if(inputValue === "") return;
        if(inputValue !== "" && selectedValue === "days") {
            
            futureDate.setDate(currentDay + parseInt(inputValue))
            setExpirationDate(`${futureDate.getDate()}/${futureDate.getMonth()}/${futureDate.getFullYear()}`)
            // countDown = new Date(`${countDownYear}`)
        } else if (inputValue !== "" && selectedValue === "hours") {
            setExpirationTime(`${currentDate.getHours() + parseInt(inputValue)}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`)
        }
    }, [ inputValue, selectedValue])

    
    return <>
        <input type="text" placeholder="Input number" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
        <select value={selectedValue} onChange={handleSelectChange}>
            <option value={"select"} disabled>Select</option>
            <option value={"days"}>Days</option>
            <option value={"hours"}>Hours</option>
        </select>
        <p>Expiration Date & Time: {`${expirationDate}; ${expirationTime}`}</p>
        <p>Expiration Countdown: {`${expirationCountDown}`}</p>
    </>
}

export default Test;