
import {NavLink} from "react-router-dom";

const UnderlinedNav = ({navigationElements, includeButton, handleButtonClick}) => {
    return <>
        <div className="border-b-2 border-greyDark flex justify-between max-w-full overflow-x-auto">
            <div className="space-x-7">
                {navigationElements.map(navigationElement => {
                    return (
                        <NavLink key={navigationElement.id} to={navigationElement.path} activeClassName="border-b-4 border-primaryBlue text-primaryBlue" className={({ isActive }) =>
                        isActive ? "border-b-4 border-primaryBlue text-primaryBlue inline-block pb-4" : "text-greyDark inline-block pb-4"
                        } end> {navigationElement.navigationName}</NavLink>
                    )
                })}
            </div>
            {
                includeButton &&
                <div className="flex">
                    <button type="button" onClick={handleButtonClick} className="border self-end border-primaryBlue bg-primaryBlue rounded text-white px-4 py-1 hover:bg-white hover:text-primaryBlue">{includeButton}</button>
                </div> 
            }
        </div>
    </>
}

export default UnderlinedNav;