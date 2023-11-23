
import {NavLink} from "react-router-dom";

const UnderlinedNav = ({navigationElements, includeButton, handleButtonClick}) => {
    return <>
        <div className="border-b-2 border-greyDark flex justify-between max-w-full overflow-x-auto">
            <div className="flex space-x-7">
                {navigationElements.map(navigationElement => {
                    return (
                        <NavLink key={navigationElement.id} to={navigationElement.path} className={({ isActive }) =>
                        isActive ? "border-b-4 border-primaryBlue text-primaryBlue inline-block pb-4 shrink" : "text-greyDark inline-block pb-4 shrink"
                        } end> {navigationElement.navigationName}</NavLink>
                    )
                })}
            </div>
            {
                includeButton &&
                <div className="hidden md:flex">
                    <button type="button" onClick={handleButtonClick} className="border self-end border-primaryBlue bg-primaryBlue rounded text-white px-4 py-1 hover:bg-white hover:text-primaryBlue">{includeButton}</button>
                </div> 
            }
        </div>
        {
                includeButton &&
                <div className="flex md:hidden">
                    <button type="button" onClick={handleButtonClick} className="border self-end border-primaryBlue bg-primaryBlue rounded text-white px-4 py-1 hover:bg-white hover:text-primaryBlue">{includeButton}</button>
                </div> 
        }
    </>
}

export default UnderlinedNav;