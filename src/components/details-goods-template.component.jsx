import { useState } from "react";
import { DataGrid } from "devextreme-react";
import { Column, Editing, HeaderFilter, Sorting, Lookup } from "devextreme-react/data-grid";

// import { useLocation, } from "react-router-dom";
const DetailsGoods = () => {
    // const location = useLocation();
    // const requisitionData = location.state.rowData;

    const [rfqResponseData, setRfqResponseData] = useState([
        {
            id: 1,
            itemCode: "1",
            itemDescription: "Item 1",
            specification: "Specification 1",
            quantity: "1",
            unitCost: "1",
            amount: "1"
        },
        {
            id: 2,
            itemCode: "2",
            itemDescription: "Item 1",
            specification: "Specification 1",
            quantity: "1",
            unitCost: "1",
            amount: "1"
        },
    ])
    const itemCodeData = [
        {
            itemCode: "1",
            item: "A4 Paper"
        },
        {
            itemCode: "2",
            item: "Stamps"
        },
    ]

    const handleEditorPreparing = (e) => {
        // Check if the editor is for the "product" column
    if (e.parentType === 'dataRow' && e.dataField === 'product') {
        const selectedProduct = e.value; // Get the selected product
        const rowIndex = e.row.rowIndex; // Get the row index
  
        // Determine the description based on the selected product
        let description = '';
  
        if (selectedProduct === 'Stamp') {
          description = 'This is a stamp description.';
        } else if (selectedProduct === 'AnotherProduct') {
          // Add more conditions as needed
          description = 'Description for AnotherProduct.';
        }
  
        // Update the data array in the state
        const updatedData = [...rfqResponseData];
        updatedData[rowIndex].description = description;
        setRfqResponseData(updatedData);
  
        // Disable editing for the "description" cell
        e.editorOptions.disabled = true;
      }
    console.log(e)
    }
    return <>
            
            <div className="flex space-x-4 shadow ring-offset-2 rounded-md">
                <DataGrid id='dataGrid' dataSource={rfqResponseData} keyExpr="id" onEditorPreparing={handleEditorPreparing} >
                    <Column dataField='itemCode' caption='Item/Asset Code'>
                        <Lookup valueExpr="itemCode" dataSource={itemCodeData} displayExpr="item"/>
                    </Column>
                    <Column dataField='itemDescription' caption='Item/Asset Description' allowEditing={false}/>
                    <Column dataField='specification' caption='Specification'/>
                    <Column dataField='quantity' caption='Quantity'/>
                    <Column dataField='unitCost' caption='Unit Cost'/>
                    <Column dataField='amount' caption='Amount'/>
                    {/* <SearchPanel visible /> */}
                    <Editing mode='row' allowUpdating allowDeleting allowAdding/>
                    <Sorting mode='multiple' showSortIndexes/>
                    <HeaderFilter visible/>
                </DataGrid>
            </div>
    </>
}

export default DetailsGoods;