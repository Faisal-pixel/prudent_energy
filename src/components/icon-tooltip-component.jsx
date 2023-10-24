import React from 'react'

const IconTooltipComponent = ({tooltipText}) => {
  return <>
    <div className="absolute z-50 top-[6.5%] left-[100%] min-w-max transform group-hover:opacity-100 transition-opacity opacity-0 bg-greyDark text-white px-2 py-1 rounded pointer-events-none">
        {tooltipText}
    </div>
    </>
}

export default IconTooltipComponent