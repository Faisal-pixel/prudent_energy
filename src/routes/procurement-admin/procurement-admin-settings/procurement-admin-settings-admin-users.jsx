import ReactTable from "../../../components/react-table.component";
import { useContext, useState } from "react";
import { ProcurementAdminContext } from "../context/procurement-admin.context";
import UnderlinedNav from "../../../components/underlined-nav.component";
import Modal from "../../../components/modal";
import {ReactComponent as XButtonSVG} from "../../../assets/x-button-icon.svg";
import Greetings from "../../../components/greetings.component";
const ProcurementAdminSettingsAdminUsers = () => {
    const {procurementAdminAdminUsersColumns, procurementAdminAdminUsersData, procurementAdminSettingsUnderlinedNavigations} = useContext(ProcurementAdminContext);
    const [addNewUserModalIsOpen, setAddNewUserModalIsOpen] = useState(false);
    const handleAddNewUserModal = () => {
        setAddNewUserModalIsOpen(!addNewUserModalIsOpen);
    }
    return <>
        <Modal isOpen={addNewUserModalIsOpen} onClose={handleAddNewUserModal} noPadding>
            <div className="w-[900px] space-y-2 pb-3">
                <div className="container px-4 py-1 bg-[#E8E8E8] rounded-t-lg flex">User Details <XButtonSVG className="inline ml-auto cursor-pointer self-center" onClick={handleAddNewUserModal}/></div>
                <div className="container px-4 py-1 flex space-x-5">
                    <div className="flex flex-col space-y-1 basis-1/3">
                        <label className="text-sm">First Name</label>
                        <input className="border border-[#E8E8E8] rounded px-2 py-1 placeholder:text-greyDark placeholder:text-sm" type="text" placeholder="First name"/>
                    </div>
                    <div className="flex flex-col space-y-1 basis-1/3">
                        <label className="text-sm">Last Name</label>
                        <input className="border border-[#E8E8E8] rounded px-2 py-1 placeholder:text-greyDark placeholder:text-sm" type="text" placeholder="Last name"/>
                    </div>
                    <div className="flex flex-col space-y-1 basis-1/3">
                        <label className="text-sm">Job Title</label>
                        <input className="border border-[#E8E8E8] rounded px-2 py-1 placeholder:text-greyDark placeholder:text-sm" type="text" placeholder="Job Title"/>
                    </div>
                </div>
                <div className="container px-4 py-1 flex space-x-5">
                    <div className="flex flex-col space-y-1 basis-1/3">
                        <label className="text-sm">Email Address</label>
                        <input className="border border-[#E8E8E8] rounded px-2 py-1 placeholder:text-greyDark placeholder:text-sm" type="email" placeholder="Email"/>
                    </div>
                    <div className="flex flex-col space-y-1 basis-1/3">
                        <label className="text-sm">Phone Number</label>
                        <input className="border border-[#E8E8E8] rounded px-2 py-1 placeholder:text-greyDark placeholder:text-sm" type="tel" placeholder="Phone Number"/>
                    </div>
                    <div className="flex flex-col space-y-1 basis-1/3">
                        <label className="text-sm">User Role</label>
                        <select defaultValue="" className="border border-[#E8E8E8] rounded px-2 py-1 text-greyDark text-sm focus:outline-none">
                            <option value="" className="text-greyDark text-sm" disabled>User Role</option>
                            <option value="basic" className="text-greyDark text-sm">Basic</option>
                            <option value="approver" className="text-greyDark text-sm">Approver</option>
                            <option value="uploader" className="text-greyDark text-sm">Uploader</option>
                            <option value="sys-admin" className="text-greyDark text-sm">Sys Admin</option>
                            <option value="manager" className="text-greyDark text-sm">Manager</option>
                            <option value="lead" className="text-greyDark text-sm">Lead</option>
                            <option value="supervisor" className="text-greyDark text-sm">Supervisor</option>
                        </select>
                    </div>
                </div>
                <div className="container px-4 py-1 flex flex-col space-y-1">
                    <label>Address</label>
                    <input type="text" className="border border-[#E8E8E8] rounded px-2 py-1 placeholder:text-greyDark placeholder:text-sm" placeholder="Addres"/>
                </div>
                <div className="container px-4 py-1 flex">
                    <button type="submit" className="bg-primaryBlue text-white border border-primaryBlue px-10 hover:bg-white hover:text-primaryBlue rounded ml-auto">Submit</button>
                </div>
            </div>
        </Modal>
        <div className="container bg-secondaryBackground overflow-y-scroll space-y-5 px-6 pt-6">
            <div className="flex justify-between">
                <Greetings />
            </div>

            <UnderlinedNav navigationElements={procurementAdminSettingsUnderlinedNavigations} includeButton={"Add new user"} handleButtonClick={handleAddNewUserModal}/>

            <div className="bg-white px-3 py-4">
                
                <ReactTable columns={procurementAdminAdminUsersColumns} data={procurementAdminAdminUsersData}/>
            </div>
            
        </div>
        
    </>
}

export default ProcurementAdminSettingsAdminUsers;