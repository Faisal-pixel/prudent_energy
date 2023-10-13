import { useContext } from "react";
import {ReactComponent as ToggleOpenIcon} from "../assets/toggle-point-up-open.svg";
import { ComponentContext } from "./component-context";
import DetailsServicesComponent from "./details-services.component";
const DetailsTemplate = () => {
    const { setDetailsTemplateToggleIsOpen } = useContext(ComponentContext);
    return <>
        {/* Details */}
        <div>
                {/* Header Div */}
                <header className="bg-primaryBlue flex justify-between items-center text-white py-2 px-3 cursor-pointer" onClick={() => setDetailsTemplateToggleIsOpen()}>
                    Details
                    <ToggleOpenIcon />
                </header>
                {/************************************** Body Of DETAILS TEMPLATE **********************************/}
                <DetailsServicesComponent />
        </div>
    </>
}

export default DetailsTemplate;