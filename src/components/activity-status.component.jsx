import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
const ActivityStatus = ({activityStatus}) => {
    const navigate = useNavigate();
    const {activityStatusTitle, goTo, activityStatusValue} = activityStatus;
    const handleClick = useCallback(() => {
        navigate(goTo)
    }, [navigate, goTo])
    return (
        <div className="bg-primaryBlue flex py-5 px-2 flex-col space-y-5 basis-1/3 hover:cursor-pointer" onClick={goTo !== "" ? handleClick : null}>
                <div className="text-lg">{activityStatusTitle}</div>
                <b className="font-bold text-3xl">{activityStatusValue}</b>
        </div>
    )
}

export default ActivityStatus;