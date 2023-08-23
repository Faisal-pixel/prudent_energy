import React from "react";

const SelectDropdown = ({optionsData, setUpdateSelect, otherClasses}) => {
    //Other classes is prop is for if I want to reposition the dropdown
    // data.option
    return <>
        <div className={`absolute bg-white bg-opacity-100 border border-greyDark shadow-sm rounded-md w-max min-w-full ${otherClasses === undefined && "-left-[0.5px] top-8"} z-10  ${otherClasses}`}>
            {
                optionsData.map(data => (
                    <div onClick={() => setUpdateSelect(data.option)} key={data.accessorID}  className="px-2">
                        <div className="pleaseSelect">{data.option}</div>
                    </div>
                ))
            }
        </div>
    </>
}



export default SelectDropdown;