import ReactTable from "../../../components/react-table.component";
import { useContext, useState } from "react";
import { ProcurementAdminContext } from "../context/procurement-admin.context";
import UnderlinedNav from "../../../components/underlined-nav.component";
import Modal from "../../../components/modal";

const ProcurementAdminSettingsAdminUsers = () => {
    const {procurementAdminAdminUsersColumns, procurementAdminAdminUsersData, procurementAdminSettingsUnderlinedNavigations} = useContext(ProcurementAdminContext);
    const [addNewUserModalIsOpen, setAddNewUserModalIsOpen] = useState(false);
    const handleAddNewUserModal = () => {
        setAddNewUserModalIsOpen(!addNewUserModalIsOpen);
    }
    return <>
        <Modal isOpen={addNewUserModalIsOpen} onClose={handleAddNewUserModal} noPadding>
            <div className="w-[900px] space-y-2">
                <div className="container px-4 py-1 bg-[#E8E8E8] rounded-t-lg">User Details</div>
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
                        <input className="border border-[#E8E8E8] rounded px-2 py-1 placeholder:text-greyDark placeholder:text-sm" type="text" placeholder="Phone Number"/>
                    </div>
                    <div className="flex flex-col space-y-1 basis-1/3">
                        <label className="text-sm">User Role</label>
                        <select className="border border-[#E8E8E8] rounded px-2 py-1" value={"User Role"}>
                            <option value="" selected className="text-greyDark text-sm">User Role</option>
                            <option value="basic" className="text-greyDark text-sm">Basic</option>
                        </select>
                    </div>
                </div>
                <div className="container px-4 py-1"></div>
                <div className="container px-4 py-1"></div>
                <div className="container px-4 py-1">
                    <button></button>
                </div>
            </div>
        </Modal>
        <div className="container bg-secondaryBackground overflow-y-scroll space-y-5 px-6 pt-6">
            <div className="flex justify-between">
                <p className="text-greyDark"><span className="font-bold text-black">Hey John -</span> We were just about to start the party without you. Welcome back, buddy!</p>
            </div>

            <UnderlinedNav navigationElements={procurementAdminSettingsUnderlinedNavigations} includeButton={"Add new user"} handleButtonClick={handleAddNewUserModal}/>

            <div className="bg-white px-3 py-4">
                
                <ReactTable columns={procurementAdminAdminUsersColumns} data={procurementAdminAdminUsersData}/>
            </div>
            
        </div>
        
    </>
}

export default ProcurementAdminSettingsAdminUsers;