import { useEffect, useState } from "react";

const Test = () => {
    const [expirationDate, setExpirationDate] = useState("");
    const [expirationTime, setExpirationTime] = useState("00:00:00 GMT+1");
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
        const currentHour = currentDate.getHours();

        const futureDate = new Date(currentDate)

        
        setExpirationDate(`${currentDate.getDate()}/${currentDate.getMonth()}/${currentDate.getFullYear()}`)

        const calculateExpirationDate = (optionSelected) => {
            if (optionSelected === "days") {
                futureDate.setDate(currentDay + parseInt(inputValue))
                setExpirationDate(`${futureDate.getDate()}/${futureDate.getMonth()}/${futureDate.getFullYear()}`)
            } else if(optionSelected === "hours") {
                setExpirationDate(`${futureDate.getDate()}/${futureDate.getMonth()}/${futureDate.getFullYear()}`)
            }
        }
        const calculateExpirationTime = (optionSelected) => {
            if(optionSelected === "hours") {
                futureDate.setHours(currentHour + parseInt(inputValue))
                setExpirationTime(`${futureDate.getHours()}:${futureDate.getMinutes()}:${futureDate.getSeconds()} GMT+1`)
            } else if(optionSelected === "days") {
                setExpirationTime(`${futureDate.getHours()}:${futureDate.getMinutes()}:${futureDate.getSeconds()} GMT+1`)
            }
        }
        if(inputValue !== "") {
            calculateExpirationDate(selectedValue);
            const interval = setInterval(() => {
                calculateExpirationTime(selectedValue);
            }, 1)
            
            return () => {
                clearInterval(interval);
            }
            
            // countDown = new Date(`${countDownYear}`)
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