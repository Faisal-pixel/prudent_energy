import { useContext, } from "react";
import Greetings from "../../../components/greetings.component";
import ReactTable from "../../../components/react-table.component";
import UnderlinedNav from "../../../components/underlined-nav.component";
import { ProcurementAdminContext } from "../context/procurement-admin.context";

const ProcurementAdminRequestForQuotes = () => {
    const {procurementAdminRequestForQuotesUnderlinedNavigations, procurementAdminRequestForQuotesMyRequisitionsData, procurementAdminRequisitionsColumns} = useContext(ProcurementAdminContext);
    // const [addNewUserModalIsOpen, setAddNewUserModalIsOpen] = useState(false);
    // const handleAddNewUserModal = () => {
    //     setAddNewUserModalIsOpen(!addNewUserModalIsOpen);
    // }
    return <>
        <div className="container bg-secondaryBackground overflow-y-scroll space-y-5 px-6 pt-6">
            <div className="flex justify-between">
                <Greetings />
            </div>

            <UnderlinedNav navigationElements={procurementAdminRequestForQuotesUnderlinedNavigations} includeButton={"Create New RFQ"} />

            <div className="bg-white px-3 py-4">
                <p className="text-primaryBlue font-bold text-xl">
                    My Requisitions
                </p>
                <ReactTable columns={procurementAdminRequisitionsColumns} data={procurementAdminRequestForQuotesMyRequisitionsData} goTo={"my-requisitions/details"}/>
            </div>
            
        </div>
        
    </>
}

export default ProcurementAdminRequestForQuotes;