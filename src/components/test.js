import { useEffect, useState } from "react";

const Test = () => {
    const [expirationDate, setExpirationDate] = useState("");
    const [expirationTime, setExpirationTime] = useState("00:00:00 GMT+1");
    const [expirationCountDown, setExpirationCountDown] = useState("00:00:00");
    const [inputValue, setInputValue] = useState("");
    const [selectedValue, setSelectedValue] = useState("select");
    

    const handleSelectChange = (e) => {
        setSelectedValue(e.target.value)
        setExpirationDate("00:00:00:00")
    }


    const currentDate = new Date()
    const currentDay = currentDate.getDate();
    const currentHour = currentDate.getHours();

    const futureDate = new Date(currentDate)
    

    const countDown = () => {
        const countDownDate = new Date(futureDate).getTime();
        const currentDateGetTime = new Date().getTime();
        const gap = countDownDate - currentDateGetTime;
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const countDownToExpirationDay = Math.floor(gap/day);
        const countDownToExpirationHour = Math.floor((gap%day)/hour);
        const countDownToExpirationMinute = Math.floor((gap%hour)/minute);
        const countDownToExpirationSecond = Math.floor((gap%minute)/second);
        setExpirationCountDown(`${countDownToExpirationDay.toString().length === 1 ? `0${countDownToExpirationDay}` : countDownToExpirationDay}:${countDownToExpirationHour.toString().length === 1 ? `0${countDownToExpirationHour}` : countDownToExpirationHour}:${countDownToExpirationMinute.toString().length === 1 ? `0${countDownToExpirationMinute}` : countDownToExpirationMinute}:${countDownToExpirationSecond.toString().length === 1 ? `0${countDownToExpirationSecond}` : countDownToExpirationSecond}`)
    }


    useEffect(() => {
        
        setExpirationDate(`${currentDate.getDate()}/${currentDate.getMonth()}/${currentDate.getFullYear()}`)
        
        if(inputValue !== "") {
            if (selectedValue === "days") {
                futureDate.setDate(currentDay + parseInt(inputValue))
                setExpirationDate(`${futureDate.getDate()}/${futureDate.getMonth()}/${futureDate.getFullYear()}`)
                setExpirationTime(`${futureDate.getHours()}:${futureDate.getMinutes()}:${futureDate.getSeconds()} GMT+1`)
                const interval = setInterval(() => {
                    countDown(); // Call the countDown function every second
                }, 1000);
            
                // Cleanup the interval when the component unmounts
                return () => {
                    clearInterval(interval);
                };
            } else if(selectedValue === "hours") {
                futureDate.setHours(currentHour + parseInt(inputValue))
                setExpirationTime(`${futureDate.getHours()}:${futureDate.getMinutes()}:${futureDate.getSeconds()} GMT+1`);
                setExpirationDate(`${futureDate.getDate()}/${futureDate.getMonth()}/${futureDate.getFullYear()}`)
                const interval = setInterval(() => {
                    countDown(); // Call the countDown function every second
                }, 1000);
            
                // Cleanup the interval when the component unmounts
                return () => {
                    clearInterval(interval);
                };
            }
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