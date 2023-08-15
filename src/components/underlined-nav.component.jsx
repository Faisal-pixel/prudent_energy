
import { Link, useLocation } from "react-router-dom";

const UnderlinedNav = ({navigationElements, includeButton}) => {
    const location = useLocation();
    return <>
        <div className="border-b-2 border-greyDark flex justify-between max-w-full overflow-x-auto">
            <div className="space-x-7">
                {navigationElements.map(navigationElement => {
                    return (
                        <Link key={navigationElement.id} to={navigationElement.path} className={` ${navigationElement.path === location.pathname && "border-b-4 border-primaryBlue text-primaryBlue"} text-greyDark inline-block pb-4`}> {navigationElement.navigationName}</Link>
                    )
                })}
            </div>
            {
                includeButton &&
                <div className="flex">
                    <button type="button" className="border self-end border-primaryBlue bg-primaryBlue rounded text-white px-4 py-1 hover:bg-white hover:text-primaryBlue">{includeButton}</button>
                </div> 
            }
        </div>
    </>
}

export default UnderlinedNav;